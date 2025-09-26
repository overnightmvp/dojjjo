# ⚡ Developer Commands Cheatsheet

## 🚀 Project Setup & Quick Start

### Initial Repository Setup
```bash
# Clone and setup (5 minutes)
git clone https://github.com/overnightmvp/growplate.git
cd growplate

# Auto-setup parallel development environment  
chmod +x DEVELOPMENT/worktree-commands.sh
./DEVELOPMENT/worktree-commands.sh

# Result: 4 parallel worktrees ready for development
# growplate/ growplate-foundation/ growplate-customer/ growplate-server/ growplate-admin/
```

### Quick Navigation
```bash
# Switch between worktrees (created by setup script)
./switch-to-foundation.sh    # Foundation tasks (F1-F5)
./switch-to-customer.sh      # Customer app (C1-C8) 
./switch-to-server.sh        # Server dashboard (S1-S8)
./switch-to-admin.sh         # Admin CMS (A1-A8)

# Check status across all worktrees
./check-all-worktrees.sh
```

---

## 🌲 Worktree Management

### Core Worktree Commands
```bash
git worktree list                    # Show all active worktrees
git worktree list --porcelain        # Machine-readable format
git worktree add ../name branch      # Create new worktree
git worktree remove ../name          # Delete worktree (must be clean)
git worktree prune                   # Clean up deleted worktrees
git worktree lock ../name            # Prevent accidental deletion
git worktree unlock ../name          # Remove lock
```

### Branch Management Across Worktrees
```bash
# Create and push new branch
git branch feature-branch
git push origin feature-branch
git worktree add ../growplate-feature feature-branch

# Merge changes from worktree
cd growplate
git merge foundation           # Merge foundation changes
git merge customer-app         # Merge customer app changes
git merge server-app           # Merge server changes
git merge admin-cms            # Merge admin changes

# Delete branch and worktree
git worktree remove ../growplate-feature
git branch -d feature-branch
git push origin --delete feature-branch
```

---

## 🔄 Development Workflow

### Starting Work on a Task
```bash
# 1. Switch to appropriate worktree
cd ../growplate-[foundation|customer|server|admin]

# 2. Pull latest changes (important for parallel development)
git pull origin foundation     # Get foundation changes first
git pull origin [branch-name]  # Get branch-specific changes

# 3. Update task tracker
# Edit PROJECT-MANAGEMENT/TASK-TRACKER.md → change status to "🔄 In Progress"

# 4. Start development server
npm run dev                    # Starts on available port (3000, 3001, 3002...)
```

### Completing a Task (Every 15 Minutes)
```bash
# 1. Test your changes
npm run build                  # Verify build works
npm run lint                   # Check code style
npm run type-check            # Verify TypeScript

# 2. Commit with detailed message
git add .
git commit -m "Complete task [ID]: [Description]

✅ [Specific deliverable achieved]
🧪 [Testing completed]
📝 [Any notes or discoveries]

Refs: TASK-TRACKER.md [Task ID]"

# 3. Push to remote
git push origin [branch-name]

# 4. Update task tracker
# Edit PROJECT-MANAGEMENT/TASK-TRACKER.md → change status to "✅ Completed"
```

---

## 🛠️ Build & Development Commands

### Development Servers
```bash
# Start development (auto-assigns ports)
npm run dev                    # Next.js development server
npm run dev -- --port 3001    # Force specific port
npm run dev -- --turbo        # Enable Turbopack (faster builds)

# Development with debugging
npm run dev -- --inspect      # Enable Node.js debugger
DEBUG=* npm run dev            # Verbose logging
```

### Build & Quality Checks
```bash
# Build commands
npm run build                  # Production build
npm run start                  # Start production server
npm run build && npm run start # Test production build locally

# Code quality
npm run lint                   # ESLint check
npm run lint -- --fix         # Auto-fix linting issues
npm run type-check             # TypeScript validation
npm run format                 # Prettier formatting (if configured)

# Testing (when implemented)
npm run test                   # Run unit tests
npm run test:watch             # Watch mode for testing
npm run test:coverage          # Test coverage report
npm run e2e                    # End-to-end tests
```

### Package Management
```bash
# Dependencies
npm install                    # Install all dependencies
npm install [package]          # Add new dependency
npm install -D [package]       # Add dev dependency
npm uninstall [package]        # Remove dependency
npm update                     # Update all packages
npm audit                      # Security audit
npm audit fix                  # Fix security issues

# Workspace management (if using npm workspaces)
npm install -w customer        # Install in specific worktree
npm run build -ws             # Run build in all workspaces
```

---

## 📊 Database Management

### Supabase CLI Commands
```bash
# Install Supabase CLI globally
npm install -g @supabase/cli

# Project management
supabase init                  # Initialize local project
supabase login                 # Authenticate with Supabase
supabase start                 # Start local development
supabase stop                  # Stop local services
supabase status                # Check service status

# Database operations
supabase db reset              # Reset local database
supabase db push               # Push schema changes
supabase db pull               # Pull remote schema
supabase migration new [name]  # Create new migration
supabase migration up          # Apply migrations

# Type generation
supabase gen types typescript --local > src/types/supabase.ts
supabase gen types typescript --project-id [id] > src/types/supabase.ts
```

### Direct Database Access
```bash
# Connect to database
supabase db connect            # Connect to local DB
psql [connection-string]       # Direct PostgreSQL connection

# Common queries
psql -c "SELECT COUNT(*) FROM restaurants;"
psql -c "SELECT * FROM orders WHERE status = 'pending';"
psql -c "SELECT name, price FROM menu_items WHERE is_available = true;"
```

---

## 🚀 Deployment Commands

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Authentication and setup
vercel login                   # Authenticate with Vercel
vercel link                    # Link project to Vercel
vercel env pull                # Download environment variables

# Deployment
vercel                         # Deploy to preview environment
vercel --prod                  # Deploy to production
vercel --prebuilt             # Deploy pre-built application

# Management
vercel logs                    # View deployment logs
vercel logs --follow          # Stream live logs
vercel domains                 # Manage custom domains
vercel env ls                 # List environment variables
vercel env add                # Add environment variable
vercel env rm [name]          # Remove environment variable

# Monitoring
vercel inspect [url]          # Inspect deployment
vercel rollback [deployment]  # Rollback to previous version
```

### Netlify Deployment (Alternative)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Authentication and setup
netlify login                  # Authenticate
netlify init                   # Initialize project
netlify link                   # Link to existing site

# Deployment  
netlify deploy                 # Deploy to draft
netlify deploy --prod         # Deploy to production
netlify deploy --build       # Build and deploy

# Management
netlify status                # Check site status
netlify open                  # Open site in browser
netlify env:list              # List environment variables
netlify env:set KEY value     # Set environment variable
```

---

## 🔧 Environment Management

### Environment Files
```bash
# Local development
cp PROJECT-MANAGEMENT/API-KEYS-TEMPLATE.md .env.local.template
cp .env.local.template .env.local
# Edit .env.local with actual API keys

# Security
chmod 600 .env.local          # Secure file permissions
echo ".env.local" >> .gitignore # Prevent committing secrets

# Environment validation
node -e "console.log(process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Configured' : '❌ Missing')"
```

### Testing Configuration
```bash
# Test database connection
curl http://localhost:3000/test-connection

# Test API endpoints
curl http://localhost:3000/api/health
curl -X GET http://localhost:3000/api/restaurants
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"table_id":"uuid", "items":[], "total_amount":0}'

# Test build with environment
NODE_ENV=production npm run build
```

---

## 🚨 Troubleshooting Commands

### Port & Process Management
```bash
# Find what's using a port
lsof -i :3000                 # Check port 3000
lsof -ti:3000 | xargs kill -9 # Kill process on port 3000

# Find and kill Node processes
ps aux | grep node            # List all Node processes
pkill -f "next"               # Kill all Next.js processes
killall node                  # Kill all Node processes (careful!)
```

### Git & Worktree Issues
```bash
# Fix common worktree issues
git worktree repair           # Repair corrupted worktrees
git worktree remove --force ../path # Force remove stuck worktree
rm -rf ../stuck-worktree && git worktree prune # Clean up manually

# Reset branch state
git reset --hard HEAD         # Discard all changes
git clean -fd                 # Remove untracked files
git pull origin [branch]      # Get latest from remote

# Resolve merge conflicts
git status                    # Check conflicted files
git add [resolved-files]      # Mark conflicts as resolved
git commit                    # Complete merge
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install                   # Fresh install

# Clear npm cache
npm cache clean --force       # Clear npm cache
rm -rf ~/.npm                 # Nuclear option: delete cache

# Version conflicts
npm ls                        # Check dependency tree
npm audit                     # Check for issues
npm dedupe                    # Remove duplicate packages
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf .next                  # Delete build cache
npm run build                 # Rebuild from scratch

# TypeScript issues
npx tsc --noEmit             # Check TypeScript without building
rm -rf .next/types           # Clear type cache
npm run type-check           # Rerun type checking

# Memory issues (common with large projects)
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📋 Task Management Commands

### Progress Tracking
```bash
# Check overall progress
grep -E "(✅|🔄|❌)" PROJECT-MANAGEMENT/TASK-TRACKER.md

# Count completed tasks
grep -c "✅" PROJECT-MANAGEMENT/TASK-TRACKER.md

# Find current in-progress tasks
grep -B1 -A1 "🔄" PROJECT-MANAGEMENT/TASK-TRACKER.md

# Check for blocked tasks
grep -B1 -A1 "❌" PROJECT-MANAGEMENT/TASK-TRACKER.md
```

### Development Status
```bash
# Check git status across all worktrees
for dir in . ../growplate-*; do
  if [[ -d "$dir/.git" ]] || git -C "$dir" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "=== $dir ==="
    git -C "$dir" status --porcelain
  fi
done

# Check recent commits across branches
git log --oneline --all --graph -10

# Check deployment readiness
npm run build && echo "✅ Build successful" || echo "❌ Build failed"
npm run lint && echo "✅ Linting passed" || echo "❌ Linting failed"  
npm run type-check && echo "✅ Types valid" || echo "❌ Type errors"
```

---

## 🎯 One-Liners for Common Tasks

```bash
# Quick setup from scratch
git clone [repo] && cd growplate && ./DEVELOPMENT/worktree-commands.sh

# Start all development servers
cd ../growplate-customer && npm run dev & cd ../growplate-server && npm run dev & cd ../growplate-admin && npm run dev &

# Full build test across all worktrees
for dir in ../growplate-*; do echo "Building $dir..."; (cd "$dir" && npm run build); done

# Deploy to production (after testing)
git merge customer-app && git merge server-app && git merge admin-cms && vercel --prod

# Emergency reset (nuclear option)
git worktree remove --force ../growplate-* && rm -rf ../growplate-* && ./DEVELOPMENT/worktree-commands.sh
```

---

## 📞 Help & Documentation Links

### Internal Documentation
- **Setup Guide**: `PROJECT-MANAGEMENT/SETUP-GUIDE.md`
- **Task Tracker**: `PROJECT-MANAGEMENT/TASK-TRACKER.md`  
- **Worktree Guide**: `PROJECT-MANAGEMENT/WORKTREE-GUIDE.md`
- **API Reference**: `DOCUMENTATION/04-API-REFERENCE/`
- **Troubleshooting**: `QUICK-REFERENCE/TROUBLESHOOTING.md`

### External Resources
- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs  
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Emergency Contacts
- **GitHub Issues**: https://github.com/overnightmvp/growplate/issues
- **Technical Lead**: [Add contact info]
- **Database Admin**: [Add Supabase project details]

---

**Cheatsheet Version**: v1.0  
**Last Updated**: $(date)  
**Coverage**: Foundation → Development → Deployment → Troubleshooting  

*💡 Pro tip: Bookmark this file and use `Ctrl+F` to quickly find commands during development!*