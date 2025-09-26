# 🛠️ Troubleshooting Guide

## 🚨 Common Issues & Quick Fixes

### 🌲 Worktree Issues

#### ❌ "Branch already exists" error
```bash
# Problem: Trying to create a worktree for existing branch
git worktree add ../growplate-customer customer-app
# fatal: 'customer-app' is already checked out at '../growplate-customer'

# Solution 1: Remove existing worktree first
git worktree remove ../growplate-customer
git worktree add ../growplate-customer customer-app

# Solution 2: Force remove if stuck
git worktree remove --force ../growplate-customer
rm -rf ../growplate-customer
git worktree add ../growplate-customer customer-app
```

#### ❌ "Worktree is locked" error  
```bash
# Problem: Worktree is locked and can't be removed
git worktree remove ../growplate-server
# fatal: '../growplate-server' is locked

# Solution: Unlock then remove
git worktree unlock ../growplate-server
git worktree remove ../growplate-server
```

#### ❌ "Directory not empty" error
```bash
# Problem: Trying to create worktree in existing directory
mkdir ../growplate-test
git worktree add ../growplate-test feature-branch
# fatal: '../growplate-test' already exists

# Solution: Remove directory or use different path
rm -rf ../growplate-test
git worktree add ../growplate-test feature-branch

# Or: Use a clean directory
git worktree add ../growplate-test-clean feature-branch
```

---

### 🔧 Development Server Issues

#### ❌ Port already in use
```bash
# Problem: EADDRINUSE: address already in use :::3000
npm run dev
# Error: listen EADDRINUSE: address already in use :::3000

# Solution 1: Kill process using port
lsof -ti:3000 | xargs kill -9
npm run dev

# Solution 2: Use different port
npm run dev -- --port 3001

# Solution 3: Kill all Node processes (nuclear option)
pkill -f node
npm run dev
```

#### ❌ "Module not found" errors
```bash
# Problem: Cannot find module '@/components/...'
# Error: Module not found: Can't resolve '@/components/MenuGrid'

# Solution 1: Check file exists and path is correct
ls src/components/MenuGrid.tsx

# Solution 2: Clear Next.js cache
rm -rf .next
npm run dev

# Solution 3: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### ❌ TypeScript errors after switching worktrees
```bash
# Problem: Type errors that weren't there before
# Could not find declaration file for module 'zustand'

# Solution 1: Regenerate TypeScript cache
rm -rf .next/types
npx tsc --noEmit

# Solution 2: Reinstall type dependencies
npm install -D @types/node @types/react @types/react-dom
npm run type-check

# Solution 3: Check tsconfig.json is correct
cat tsconfig.json | grep -E "(baseUrl|paths)"
```

---

### 🗄️ Database Connection Issues

#### ❌ Supabase connection fails
```bash
# Problem: Database connection not working
# Visit /test-connection shows "Connection failed"

# Solution 1: Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
# Should not be empty

# Solution 2: Verify .env.local file exists and is readable
ls -la .env.local
cat .env.local | grep SUPABASE

# Solution 3: Check Supabase project status
# Go to supabase.com dashboard, verify project is active
# Copy fresh URL and keys if needed

# Solution 4: Test direct connection
curl -H "apikey: YOUR_ANON_KEY" https://YOUR_PROJECT.supabase.co/rest/v1/restaurants

# Solution 5: Check RLS policies
# In Supabase dashboard, ensure RLS policies allow public read access
```

#### ❌ "relation does not exist" errors
```sql
-- Problem: ERROR: relation "restaurants" does not exist

-- Solution 1: Check if tables were created
-- Go to Supabase Dashboard > Table Editor
-- Should see: restaurants, tables, menu_items, orders, bill_requests

-- Solution 2: Run schema creation script
-- Copy SQL from DOCUMENTATION/04-API-REFERENCE/DATABASE-SCHEMA.md
-- Paste into Supabase SQL Editor and run

-- Solution 3: Check you're connected to correct project
SELECT current_database();
```

#### ❌ Data not loading in components
```typescript
// Problem: useEffect not fetching data, shows loading forever

// Solution 1: Check network tab in browser dev tools
// Should see requests to /rest/v1/restaurants
// If 401/403, check API keys
// If 404, check table names

// Solution 2: Add error handling
useEffect(() => {
  async function fetchData() {
    try {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
      
      if (error) {
        console.error('Supabase error:', error)
        return
      }
      
      console.log('Data loaded:', data) // Debug log
      setData(data)
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }
  fetchData()
}, [])

// Solution 3: Check component is rendering
console.log('Component rendering, data:', data)
```

---

### 🎨 UI & Styling Issues

#### ❌ Tailwind CSS not working
```bash
# Problem: Tailwind classes not applying
# <div className="bg-red-500"> has no red background

# Solution 1: Check tailwind.config.js exists
cat tailwind.config.js
# Should include paths to your components

# Solution 2: Check globals.css imports Tailwind
head -5 src/app/globals.css
# Should see: @tailwind base; @tailwind components; @tailwind utilities;

# Solution 3: Restart dev server
# Tailwind changes require restart
npm run dev

# Solution 4: Clear PostCSS cache
rm -rf .next
npm run dev
```

#### ❌ Images not loading
```typescript
// Problem: Next.js Image component showing broken image
<Image src="/images/menu-item.jpg" alt="Food" width={200} height={200} />

// Solution 1: Check image file exists
ls public/images/menu-item.jpg

// Solution 2: Use correct path (no leading slash for public)
<Image src="images/menu-item.jpg" alt="Food" width={200} height={200} />

// Solution 3: Add image domain to next.config.js (for external images)
// next.config.js
module.exports = {
  images: {
    domains: ['your-supabase-project.supabase.co'],
  },
}

// Solution 4: Check image format is supported
// Supported: .jpg, .jpeg, .png, .webp, .gif, .svg
```

#### ❌ Mobile layout broken
```css
/* Problem: Layout doesn't work on mobile devices */

/* Solution 1: Check viewport meta tag in layout.tsx */
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

/* Solution 2: Use mobile-first responsive classes */
/* Instead of: */
.container { @apply w-full lg:w-1/2; }

/* Use: */
.container { @apply w-full lg:w-1/2; } /* Mobile first, then desktop */

/* Solution 3: Test with browser dev tools */
/* Chrome DevTools > Toggle device toolbar (Ctrl+Shift+M) */
/* Test iPhone, Android viewports */

/* Solution 4: Check for horizontal overflow */
.debug-overflow { @apply overflow-x-hidden; }
```

---

### ⚡ Performance Issues

#### ❌ Slow page loads
```typescript
// Problem: Pages taking > 5 seconds to load

// Solution 1: Check for unnecessary re-renders
// Add React DevTools Profiler
// Look for components rendering too frequently

// Solution 2: Add loading states
function MyComponent() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  
  // Show loading spinner while fetching
  if (loading) {
    return <div className="animate-spin">Loading...</div>
  }
  
  return <div>{/* Your component */}</div>
}

// Solution 3: Optimize database queries
const { data } = await supabase
  .from('menu_items')
  .select('id, name, price') // Only select needed columns
  .eq('is_available', true)  // Filter on server side
  .limit(20)                 // Limit results

// Solution 4: Use Next.js Image optimization
import Image from 'next/image'
// Automatically optimizes images
```

#### ❌ Real-time updates not working
```javascript
// Problem: Order notifications not appearing in real-time

// Solution 1: Check WebSocket connection
// Browser DevTools > Network > WS (WebSockets)
// Should see active connection to Supabase

// Solution 2: Verify subscription setup
const subscription = supabase
  .channel('orders')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'orders',
      filter: 'restaurant_id=eq.YOUR_RESTAURANT_ID' // Add filter
    },
    (payload) => {
      console.log('New order:', payload) // Debug log
    }
  )
  .subscribe((status) => {
    console.log('Subscription status:', status) // Should be "SUBSCRIBED"
  })

// Solution 3: Clean up subscriptions
useEffect(() => {
  const subscription = supabase.channel('orders')
    // ... subscription setup
  
  return () => {
    subscription.unsubscribe()
  }
}, [])

// Solution 4: Check RLS policies allow real-time
-- In Supabase, RLS policies must allow the subscription
CREATE POLICY "realtime_orders" ON orders FOR SELECT USING (true);
```

---

### 🚀 Deployment Issues

#### ❌ Vercel build failing
```bash
# Problem: Build fails on Vercel but works locally
# "Type error: Cannot find module '@/components/MenuGrid'"

# Solution 1: Check all imports use correct casing
# File: MenuGrid.tsx (capital G)
# Import: import { MenuGrid } from '@/components/MenuGrid' // Correct
# Import: import { MenuGrid } from '@/components/menugrid' // Wrong

# Solution 2: Verify all files are committed
git status
git add . && git commit -m "Add missing files"
git push

# Solution 3: Check build locally first
npm run build
# Should complete without errors before deploying

# Solution 4: Check environment variables in Vercel
# Vercel Dashboard > Project > Settings > Environment Variables
# All required vars should be set for Production
```

#### ❌ Environment variables not working in production
```bash
# Problem: API calls fail in production
# "TypeError: Cannot read property 'SUPABASE_URL' of undefined"

# Solution 1: Check Vercel environment variables
# Go to Vercel Dashboard > Settings > Environment Variables
# Ensure all vars are set for "Production" environment

# Solution 2: Use correct variable names
# Must start with NEXT_PUBLIC_ for client-side access
NEXT_PUBLIC_SUPABASE_URL=https://... # ✅ Accessible in browser
SUPABASE_URL=https://...             # ❌ Server-side only

# Solution 3: Redeploy after adding variables
vercel --prod

# Solution 4: Test variables are loaded
console.log('Environment check:', {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  nodeEnv: process.env.NODE_ENV
})
```

#### ❌ Database connection works locally but not in production
```bash
# Problem: Local development works, production shows database errors

# Solution 1: Use production database credentials
# Don't use localhost URLs in production
# Use actual Supabase project URL

# Solution 2: Check IP restrictions
# Some database providers restrict IP access
# Vercel uses dynamic IPs, may need to allow all

# Solution 3: Verify SSL requirements
# Production databases often require SSL
const supabase = createClient(url, key, {
  db: { schema: 'public' },
  auth: { persistSession: false }
})

# Solution 4: Check connection limits
# Free database plans have connection limits
# Monitor active connections in dashboard
```

---

### 🔍 Debugging Tips

#### Enable detailed logging
```typescript
// Add debug logging to track issues
console.log('[DEBUG] Component rendering:', { props, state })
console.log('[DEBUG] API call:', { url, method, data })
console.log('[DEBUG] Database query:', { table, filters })

// Use error boundaries to catch crashes
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false)
  
  if (hasError) {
    return <div>Something went wrong. Check console for details.</div>
  }
  
  return children
}
```

#### Check browser developer tools
```bash
# Always check these tabs when debugging:
# 1. Console - JavaScript errors and logs
# 2. Network - API requests and responses  
# 3. Application - Local storage, cookies, service workers
# 4. Sources - Set breakpoints in code
# 5. Performance - Find slow operations
```

#### Test with curl
```bash
# Test API endpoints directly
curl -X GET "https://your-app.vercel.app/api/restaurants"
curl -X POST "https://your-app.vercel.app/api/orders" \
  -H "Content-Type: application/json" \
  -d '{"table_id":"test","items":[],"total_amount":0}'

# Test database directly
curl -H "apikey: YOUR_KEY" \
  "https://YOUR_PROJECT.supabase.co/rest/v1/restaurants"
```

---

## 📞 Getting Help

### 🆘 When to escalate
- **Immediately**: Data loss, security issues, production down
- **Within 1 hour**: Blocking multiple developers, corrupted worktrees
- **Within 4 hours**: Single developer blocked, unclear errors
- **Next day**: Nice-to-have improvements, documentation unclear

### 📋 Information to include when asking for help
1. **Exact error message** (copy/paste, not screenshot)
2. **Steps to reproduce** the issue
3. **What you expected** vs what actually happened
4. **Environment details** (worktree, task, browser, OS)
5. **What you've already tried**
6. **Code snippets** if relevant (use markdown formatting)

### 🔗 Resources
- **GitHub Issues**: https://github.com/overnightmvp/growplate/issues
- **Task Support Template**: Use "Task Support Request" issue template
- **Documentation**: Check `DOCUMENTATION/` directory first
- **Commands Reference**: `QUICK-REFERENCE/COMMANDS-CHEATSHEET.md`

---

**Last Updated**: $(date)  
**Troubleshooting Version**: v1.0  
**Issues Covered**: 25+ common problems and solutions  

💡 **Pro tip**: Most issues are environment-related. Check API keys, database connections, and file paths first!