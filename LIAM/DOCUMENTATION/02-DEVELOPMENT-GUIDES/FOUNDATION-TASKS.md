# 🏗️ Foundation Tasks (F1-F5) - Complete Walkthrough

## 📋 Overview
Foundation tasks establish the core infrastructure for the Growplate restaurant ordering system. These tasks must be completed **sequentially** before starting parallel development.

**Estimated Time**: 75 minutes (5 × 15-minute tasks)  
**Worktree**: `../growplate-foundation`  
**Branch**: `foundation`

---

## **Task F1: Initialize Next.js Project (15 min)**

### 🎯 Goal
Set up a working Next.js 14 application with TypeScript and Tailwind CSS.

### 🛠️ Steps
```bash
# Switch to foundation worktree
cd ../growplate-foundation

# Initialize Next.js project with optimal configuration
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Install additional core dependencies
npm install @supabase/supabase-js zustand lucide-react qr-code-generator

# Install development dependencies
npm install -D @types/qr-code-generator

# Test the application
npm run dev
```

### ✅ Deliverable
- Next.js app running on `http://localhost:3000`
- TypeScript configuration working
- Tailwind CSS styles loading
- No console errors

### 🔧 Verification
```bash
# Check that these commands work without errors
npm run build
npm run lint
```

### ⚠️ Troubleshooting
- If port 3000 is busy: `npm run dev -- --port 3001`
- If TypeScript errors: Check `tsconfig.json` was created properly
- If Tailwind not working: Verify `tailwind.config.js` exists

---

## **Task F2: Clean Project Structure (15 min)**

### 🎯 Goal
Remove default Next.js files and create organized project structure for restaurant system.

### 🛠️ Steps
```bash
# Create organized directory structure
mkdir -p src/components/{ui,menu,cart,orders,admin}
mkdir -p src/lib/{supabase,utils,stores}
mkdir -p src/types
mkdir -p src/app/{table,server,admin}
mkdir -p public/{images,sounds}

# Remove default files
rm -f src/app/globals.css src/app/page.tsx src/app/favicon.ico

# Create new globals.css with restaurant-optimized styling
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 142 76% 36%;
    --primary-foreground: 355 7% 97%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222 84% 5%;
  }
}

/* Restaurant-specific optimizations */
@layer components {
  .btn-primary {
    @apply bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md border border-gray-100 p-6;
  }
  
  .menu-item {
    @apply bg-white rounded-lg shadow-sm border p-4 cursor-pointer hover:shadow-md transition-shadow;
  }
}

/* Mobile-first responsive design */
@screen sm {
  .menu-grid {
    @apply grid-cols-2;
  }
}

@screen md {
  .menu-grid {
    @apply grid-cols-3;
  }
}

@screen lg {
  .menu-grid {
    @apply grid-cols-4;
  }
}
EOF

# Create new homepage with project branding
cat > src/app/page.tsx << 'EOF'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            🍽️ Growplate
          </h1>
          <p className="text-xl text-gray-600">
            Commission-Free QR Ordering for Restaurants
          </p>
        </div>
        
        <div className="space-y-2 text-gray-500">
          <p>✨ Foundation setup complete</p>
          <p>🚀 Ready for parallel development</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="card text-left">
            <h3 className="font-semibold text-green-600 mb-2">For Customers</h3>
            <p className="text-sm text-gray-600">Scan QR → Browse Menu → Order → Enjoy</p>
          </div>
          
          <div className="card text-left">
            <h3 className="font-semibold text-blue-600 mb-2">For Restaurants</h3>
            <p className="text-sm text-gray-600">Manage orders, reduce costs, increase revenue</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Next.js 14 + TypeScript + Supabase + Tailwind CSS
        </p>
      </div>
    </main>
  )
}
EOF

# Update layout with restaurant-optimized meta tags
cat > src/app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Growplate - Restaurant QR Ordering System',
  description: 'Commission-free digital ordering system for restaurants. Scan QR codes, browse menus, and place orders instantly.',
  keywords: 'restaurant, ordering, QR code, digital menu, commission-free, hospitality',
  authors: [{ name: 'Growplate Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#059669',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
EOF

# Test the cleaned structure
npm run dev
```

### ✅ Deliverable
- Clean project structure with organized directories
- Custom styling with restaurant branding
- Professional homepage with project information
- Mobile-optimized responsive design

### 🔧 Verification
```bash
# Verify structure was created correctly
ls -la src/components/
ls -la src/lib/
ls -la src/types/

# Test responsive design
curl -s localhost:3000 | grep "Growplate"
```

---

## **Task F3: Database Schema Setup (15 min)**

### 🎯 Goal
Create complete Supabase database schema with all required tables and sample data.

### 🛠️ Steps

#### 1. Create Database Schema (Supabase SQL Editor)
```sql
-- 🍽️ RESTAURANTS TABLE
CREATE TABLE restaurants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  logo_url TEXT,
  phone VARCHAR(20),
  address TEXT,
  cuisine_type VARCHAR(100),
  opening_hours JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 🪑 TABLES TABLE  
CREATE TABLE tables (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  table_number INTEGER NOT NULL,
  table_name VARCHAR(50),
  qr_code_url TEXT,
  qr_code_data TEXT, -- The actual QR code content
  seats INTEGER DEFAULT 4,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(restaurant_id, table_number)
);

-- 🍕 MENU ITEMS TABLE
CREATE TABLE menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category VARCHAR(100) NOT NULL DEFAULT 'Main',
  dietary_restrictions TEXT[], -- ['vegetarian', 'vegan', 'gluten-free', etc.]
  allergens TEXT[], -- ['nuts', 'dairy', 'shellfish', etc.]
  preparation_time INTEGER, -- in minutes
  calories INTEGER,
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  upsell_items UUID[], -- Array of related menu item IDs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 🛒 ORDERS TABLE
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  table_id UUID REFERENCES tables(id) ON DELETE SET NULL,
  order_number SERIAL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled')),
  items JSONB NOT NULL, -- Array of {menu_item_id, name, price, quantity, special_instructions}
  subtotal DECIMAL(10,2) NOT NULL,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  special_instructions TEXT,
  customer_name VARCHAR(255),
  customer_phone VARCHAR(20),
  estimated_ready_time TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 💳 BILL REQUESTS TABLE
CREATE TABLE bill_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  table_id UUID REFERENCES tables(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'cancelled')),
  requested_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE,
  processed_by VARCHAR(255), -- Staff member name/ID
  notes TEXT
);

-- 👥 STAFF TABLE (for future authentication)
CREATE TABLE staff (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  role VARCHAR(50) DEFAULT 'server' CHECK (role IN ('owner', 'manager', 'server', 'kitchen')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 📊 ORDER ANALYTICS TABLE (for reporting)
CREATE TABLE order_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  hour_of_day INTEGER, -- 0-23
  day_of_week INTEGER, -- 0-6 (Sunday = 0)
  table_number INTEGER,
  items_count INTEGER,
  total_amount DECIMAL(10,2),
  preparation_time INTEGER, -- minutes from order to ready
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_tables_restaurant_id ON tables(restaurant_id);
CREATE INDEX idx_tables_qr_code ON tables(qr_code_data);
CREATE INDEX idx_menu_items_restaurant_id ON menu_items(restaurant_id);
CREATE INDEX idx_menu_items_category ON menu_items(category);
CREATE INDEX idx_menu_items_available ON menu_items(is_available);
CREATE INDEX idx_orders_restaurant_id ON orders(restaurant_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_bill_requests_status ON bill_requests(status);
CREATE INDEX idx_order_analytics_date ON order_analytics(date);
CREATE INDEX idx_order_analytics_restaurant_id ON order_analytics(restaurant_id);

-- Enable Row Level Security (RLS)
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE bill_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (allow all for development - restrict in production)
CREATE POLICY "Allow all operations" ON restaurants FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON tables FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON menu_items FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON orders FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON bill_requests FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON staff FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON order_analytics FOR ALL USING (true);
```

#### 2. Insert Sample Data
```sql
-- Sample Restaurant
INSERT INTO restaurants (name, slug, phone, address, cuisine_type, opening_hours) VALUES (
  'Demo Bistro',
  'demo-bistro', 
  '+61 2 9876 5432',
  '123 Collins Street, Melbourne VIC 3000',
  'Modern Australian',
  '{"monday": "11:00-22:00", "tuesday": "11:00-22:00", "wednesday": "11:00-22:00", "thursday": "11:00-22:00", "friday": "11:00-23:00", "saturday": "10:00-23:00", "sunday": "10:00-21:00"}'::jsonb
);

-- Sample Tables
INSERT INTO tables (restaurant_id, table_number, table_name, seats, qr_code_data) 
SELECT 
  r.id,
  generate_series(1, 12) as table_number,
  'Table ' || generate_series(1, 12) as table_name,
  CASE 
    WHEN generate_series(1, 12) <= 8 THEN 2
    WHEN generate_series(1, 12) <= 10 THEN 4
    ELSE 6
  END as seats,
  'https://growplate.com/table/' || gen_random_uuid()::text as qr_code_data
FROM restaurants r WHERE r.slug = 'demo-bistro';

-- Sample Menu Items
DO $$
DECLARE
  restaurant_uuid UUID;
BEGIN
  SELECT id INTO restaurant_uuid FROM restaurants WHERE slug = 'demo-bistro';

  -- Starters
  INSERT INTO menu_items (restaurant_id, name, description, price, category, preparation_time, is_featured) VALUES
  (restaurant_uuid, 'Truffle Arancini', 'Crispy risotto balls with truffle oil and parmesan', 18.50, 'Starters', 12, true),
  (restaurant_uuid, 'Burrata & Prosciutto', 'Creamy burrata with San Daniele prosciutto and rocket', 22.00, 'Starters', 5, false),
  (restaurant_uuid, 'Oysters Natural', 'Fresh Sydney rock oysters with mignonette', 4.50, 'Starters', 2, false);

  -- Mains  
  INSERT INTO menu_items (restaurant_id, name, description, price, category, preparation_time, is_featured) VALUES
  (restaurant_uuid, 'Wagyu Ribeye', '300g grass-fed wagyu with roasted vegetables', 65.00, 'Mains', 25, true),
  (restaurant_uuid, 'Barramundi Fillet', 'Pan-seared barramundi with lemon myrtle butter', 38.00, 'Mains', 18, false),
  (restaurant_uuid, 'Duck Confit', 'Slow-cooked duck leg with cherry gastrique', 42.00, 'Mains', 20, true),
  (restaurant_uuid, 'Vegetarian Risotto', 'Mushroom and herb risotto with truffle oil', 28.00, 'Mains', 15, false);

  -- Desserts
  INSERT INTO menu_items (restaurant_id, name, description, price, category, preparation_time) VALUES
  (restaurant_uuid, 'Chocolate Fondant', 'Warm chocolate pudding with vanilla ice cream', 16.50, 'Desserts', 12),
  (restaurant_uuid, 'Lemon Tart', 'Classic lemon tart with berry coulis', 14.50, 'Desserts', 3),
  (restaurant_uuid, 'Affogato', 'Vanilla gelato drowned in espresso', 12.00, 'Desserts', 2);

  -- Beverages
  INSERT INTO menu_items (restaurant_id, name, description, price, category, preparation_time) VALUES
  (restaurant_uuid, 'Coffee', 'Single origin espresso', 4.50, 'Beverages', 3),
  (restaurant_uuid, 'Fresh Orange Juice', 'Squeezed to order', 6.50, 'Beverages', 2),
  (restaurant_uuid, 'Sparkling Water', 'San Pellegrino 750ml', 8.00, 'Beverages', 1),
  (restaurant_uuid, 'House Wine Red', 'Shiraz from Barossa Valley', 12.00, 'Beverages', 1),
  (restaurant_uuid, 'House Wine White', 'Sauvignon Blanc from Adelaide Hills', 11.00, 'Beverages', 1);

END $$;

-- Add upsell relationships
UPDATE menu_items SET upsell_items = ARRAY[
  (SELECT id FROM menu_items WHERE name = 'House Wine Red'),
  (SELECT id FROM menu_items WHERE name = 'Truffle Arancini')
] WHERE name = 'Wagyu Ribeye';

UPDATE menu_items SET upsell_items = ARRAY[
  (SELECT id FROM menu_items WHERE name = 'Sparkling Water'),
  (SELECT id FROM menu_items WHERE name = 'House Wine White')
] WHERE name = 'Barramundi Fillet';
```

### ✅ Deliverable
- Complete database schema with all required tables
- Sample restaurant with 12 tables and full menu (15 items)
- Proper indexes and RLS policies configured
- Relationships and upsell data populated

### 🔧 Verification
```sql
-- Test queries to verify data
SELECT COUNT(*) FROM restaurants; -- Should return 1
SELECT COUNT(*) FROM tables; -- Should return 12  
SELECT COUNT(*) FROM menu_items; -- Should return 15
SELECT name, price, category FROM menu_items ORDER BY category, price;
```

---

## **Task F4: Environment Configuration (15 min)**

### 🎯 Goal
Configure environment variables, database connection, and TypeScript types.

### 🛠️ Steps

#### 1. Create Environment Configuration
```bash
# Create environment file (copy from template)
cp ../../PROJECT-MANAGEMENT/API-KEYS-TEMPLATE.md .env.local.template

# Create actual .env.local (fill with your actual keys)
cat > .env.local << 'EOF'
# Database Configuration (Supabase)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Future Services (add when ready)
# TWILIO_ACCOUNT_SID=
# TWILIO_AUTH_TOKEN=
# TWILIO_PHONE_NUMBER=
# NEXT_PUBLIC_SANITY_PROJECT_ID=
# NEXT_PUBLIC_SANITY_DATASET=
EOF

# Secure environment file
chmod 600 .env.local

# Add to .gitignore to prevent committing secrets
echo "# Environment variables
.env.local
.env.production
.env*.local" >> .gitignore
```

#### 2. Create Supabase Client
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // We don't need user authentication for restaurants
    autoRefreshToken: false,
  },
  db: {
    schema: 'public',
  },
  realtime: {
    params: {
      eventsPerSecond: 10, // Throttle for better performance
    },
  },
})

// Helper function for error handling
export const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error)
  return {
    error: error.message || 'An unexpected error occurred',
    details: error.details || null,
  }
}

// Helper function to check connection
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('restaurants').select('count').single()
    if (error) throw error
    return { connected: true, data }
  } catch (error) {
    return { connected: false, error: handleSupabaseError(error) }
  }
}
```

#### 3. Define TypeScript Types
```typescript
// src/types/index.ts

// Restaurant & Business Types
export interface Restaurant {
  id: string
  name: string
  slug: string
  logo_url?: string
  phone?: string
  address?: string
  cuisine_type?: string
  opening_hours?: Record<string, string>
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Table {
  id: string
  restaurant_id: string
  table_number: number
  table_name?: string
  qr_code_url?: string
  qr_code_data?: string
  seats: number
  is_active: boolean
  created_at: string
  updated_at: string
}

// Menu & Ordering Types
export interface MenuItem {
  id: string
  restaurant_id: string
  name: string
  description?: string
  price: number
  image_url?: string
  category: string
  dietary_restrictions?: string[]
  allergens?: string[]
  preparation_time?: number
  calories?: number
  is_available: boolean
  is_featured: boolean
  sort_order: number
  upsell_items?: string[]
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image_url?: string
  special_instructions?: string
  menu_item_id: string
}

export interface Order {
  id: string
  restaurant_id: string
  table_id: string
  order_number: number
  status: OrderStatus
  items: CartItem[]
  subtotal: number
  tax_amount: number
  total_amount: number
  special_instructions?: string
  customer_name?: string
  customer_phone?: string
  estimated_ready_time?: string
  completed_at?: string
  created_at: string
  updated_at: string
  
  // Joined data (when fetched with relations)
  table?: Table
  restaurant?: Restaurant
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'preparing' 
  | 'ready' 
  | 'delivered' 
  | 'cancelled'

export interface BillRequest {
  id: string
  order_id: string
  table_id: string
  status: 'pending' | 'processed' | 'cancelled'
  requested_at: string
  processed_at?: string
  processed_by?: string
  notes?: string
}

// Staff & Authentication Types
export interface Staff {
  id: string
  restaurant_id: string
  name: string
  email?: string
  role: 'owner' | 'manager' | 'server' | 'kitchen'
  is_active: boolean
  created_at: string
}

// UI & Component Types
export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

export interface FilterOptions {
  search?: string
  category?: string
  status?: string
  date_from?: string
  date_to?: string
}

// Real-time Event Types (for WebSocket/Supabase subscriptions)
export interface OrderUpdateEvent {
  eventType: 'INSERT' | 'UPDATE' | 'DELETE'
  new: Order
  old?: Partial<Order>
}

export interface MenuUpdateEvent {
  eventType: 'INSERT' | 'UPDATE' | 'DELETE'
  new: MenuItem
  old?: Partial<MenuItem>
}
```

#### 4. Create Database Connection Test
```typescript
// src/app/test-connection/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase, checkSupabaseConnection } from '@/lib/supabase'
import type { Restaurant, MenuItem } from '@/types'

export default function TestConnectionPage() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Testing...')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    testDatabaseConnection()
  }, [])

  async function testDatabaseConnection() {
    try {
      // Test basic connection
      const connectionTest = await checkSupabaseConnection()
      
      if (!connectionTest.connected) {
        setConnectionStatus('❌ Connection failed')
        setError(connectionTest.error?.error || 'Unknown connection error')
        return
      }

      setConnectionStatus('✅ Database connected')

      // Fetch sample data
      const { data: restaurantData, error: restaurantError } = await supabase
        .from('restaurants')
        .select('*')
        .limit(5)

      if (restaurantError) {
        throw restaurantError
      }

      setRestaurants(restaurantData || [])

      // Fetch menu items for the first restaurant
      if (restaurantData && restaurantData.length > 0) {
        const { data: menuData, error: menuError } = await supabase
          .from('menu_items')
          .select('*')
          .eq('restaurant_id', restaurantData[0].id)
          .limit(10)

        if (menuError) {
          throw menuError
        }

        setMenuItems(menuData || [])
      }

    } catch (err: any) {
      setConnectionStatus('❌ Error occurred')
      setError(err.message || 'Unknown error')
      console.error('Database test error:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Database Connection Test</h1>
          <p className="text-gray-600 mt-2">Verifying Supabase integration</p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          <p className="text-lg">{connectionStatus}</p>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Error:</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}
        </div>

        {restaurants.length > 0 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Restaurants ({restaurants.length})</h2>
            <div className="space-y-2">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="p-3 bg-gray-50 rounded">
                  <h3 className="font-medium">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600">
                    {restaurant.cuisine_type} • {restaurant.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {menuItems.length > 0 && (
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Menu Items ({menuItems.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map(item => (
                <div key={item.id} className="p-3 bg-gray-50 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <span className="text-xs text-gray-500">{item.category}</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Environment Check</h2>
          <div className="space-y-2 text-sm">
            <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Configured' : '❌ Missing'}</p>
            <p>Supabase Anon Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Configured' : '❌ Missing'}</p>
            <p>Site URL: {process.env.NEXT_PUBLIC_SITE_URL || 'Not configured'}</p>
            <p>Node Environment: {process.env.NODE_ENV}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### ✅ Deliverable
- Environment variables properly configured
- Supabase client working and tested
- TypeScript types defined for all data models
- Database connection verified with test page

### 🔧 Verification
```bash
# Start development server and test connection
npm run dev

# Visit test page
open http://localhost:3000/test-connection

# Should show:
# ✅ Database connected
# Restaurant data displayed
# Menu items displayed
# No console errors
```

---

## **Task F5: Create Worktrees (15 min)**

### 🎯 Goal
Set up parallel development environment with 4 worktrees for simultaneous development.

### 🛠️ Steps

#### 1. Commit Foundation Work
```bash
# Ensure all foundation work is committed
git add .
git status # Review what's being committed

git commit -m "Complete foundation setup (F1-F5)

✅ F1: Initialize Next.js project with TypeScript + Tailwind
✅ F2: Clean project structure with restaurant-optimized styling  
✅ F3: Complete database schema with sample data (15 menu items)
✅ F4: Environment configuration with Supabase connection
✅ F5: Worktree setup ready

Foundation deliverables:
- Working Next.js app on localhost:3000
- Complete Supabase database schema  
- TypeScript types for all models
- Database connection tested and verified
- Clean, organized project structure

Ready for parallel development!"

# Push to remote
git push origin foundation
```

#### 2. Run Worktree Setup Script
```bash
# Go back to main repository
cd ../../

# Run the automated worktree setup
./DEVELOPMENT/worktree-commands.sh

# This script will:
# - Create branches: customer-app, server-app, admin-cms  
# - Create worktrees in parallel directories
# - Copy foundation changes to each worktree
# - Set up package.json in each worktree
# - Create helper navigation scripts
# - Push all branches to remote
```

#### 3. Verify Worktree Setup
```bash
# Check worktree status
git worktree list

# Should show:
# growplate                    abc123 [main]
# ../growplate-foundation      def456 [foundation]  
# ../growplate-customer        ghi789 [customer-app]
# ../growplate-server          jkl012 [server-app]
# ../growplate-admin           mno345 [admin-cms]

# Test each worktree
./switch-to-customer.sh   # Should open new shell in customer worktree
cd ../growplate-customer && npm run dev  # Should start on different port

./switch-to-server.sh     # Should open new shell in server worktree  
cd ../growplate-server && npm run dev    # Should start on different port

./switch-to-admin.sh      # Should open new shell in admin worktree
cd ../growplate-admin && npm run dev     # Should start on different port
```

#### 4. Test Parallel Development Environment
```bash
# From main repository, check status across all worktrees
./check-all-worktrees.sh

# Should show status for all 5 repositories:
# Main, Foundation, Customer, Server, Admin

# Verify each worktree has foundation changes
cd ../growplate-customer && ls src/lib/    # Should show supabase.ts
cd ../growplate-server && ls src/types/    # Should show index.ts  
cd ../growplate-admin && ls src/app/       # Should show test-connection/

# Test database connection from each worktree
cd ../growplate-customer && npm run dev   # Port 3000
cd ../growplate-server && npm run dev     # Port 3001  
cd ../growplate-admin && npm run dev      # Port 3002

# Visit each test page:
# http://localhost:3000/test-connection
# http://localhost:3001/test-connection  
# http://localhost:3002/test-connection
```

### ✅ Deliverable
- 4 parallel development environments ready
- All worktrees have foundation code and database access
- Helper scripts for easy navigation between worktrees
- Each worktree can run independently on different ports
- All branches pushed to remote for collaboration

### 🔧 Verification
```bash
# Final verification checklist
./check-all-worktrees.sh  # Shows status of all repositories
git worktree list          # Shows all 4 worktrees
ls -la switch-to-*.sh      # Shows navigation helper scripts

# Each worktree should be able to:
# 1. Start development server (npm run dev)
# 2. Connect to database (test-connection page)
# 3. Build successfully (npm run build)
# 4. Pass linting (npm run lint)
```

---

## 🎉 Foundation Complete!

### 📊 Final Status Check
- ✅ **F1**: Next.js 14 + TypeScript + Tailwind CSS working  
- ✅ **F2**: Clean project structure with restaurant styling
- ✅ **F3**: Complete database schema with sample data
- ✅ **F4**: Environment configured and database tested
- ✅ **F5**: 4 parallel worktrees ready for development

### 🚀 Next Steps
1. **Update task tracker**: Mark F1-F5 as completed in `PROJECT-MANAGEMENT/TASK-TRACKER.md`
2. **Begin parallel development**: Start customer-app (C1-C8), server-app (S1-S8), and admin-cms (A1-A8) tasks
3. **Coordinate progress**: Use main repository for documentation updates and progress tracking

### 📞 Support
- **Worktree issues**: See `PROJECT-MANAGEMENT/WORKTREE-GUIDE.md`
- **Database issues**: Check connection at `/test-connection` page
- **Environment issues**: Verify keys in `PROJECT-MANAGEMENT/API-KEYS-TEMPLATE.md`

---

**Foundation Phase Complete**: Ready for 24 parallel development tasks across 3 worktrees! 🚀