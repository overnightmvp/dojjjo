# 📱 Customer App Tasks (C1-C8) - Complete Walkthrough

## 📋 Overview
Customer app tasks create the QR code ordering interface that customers use on their mobile devices.

**Estimated Time**: 120 minutes (8 × 15-minute tasks)  
**Worktree**: `../growplate-customer`  
**Branch**: `customer-app`  
**URL Pattern**: `/table/[id]` for QR code access

---

## **Task C1: QR Route Setup (15 min)**

### 🎯 Goal
Create dynamic route `/table/[id]` that displays restaurant and table information.

### 🛠️ Steps
```bash
cd ../growplate-customer

# Pull foundation changes
git pull origin foundation
npm install

# Create QR route structure
mkdir -p src/app/table/[id]

# Create table page component
cat > src/app/table/[id]/page.tsx << 'EOF'
'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Table, Restaurant } from '@/types'

export default function TablePage() {
  const params = useParams()
  const [table, setTable] = useState<Table | null>(null)
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (params.id) {
      fetchTableInfo(params.id as string)
    }
  }, [params.id])

  async function fetchTableInfo(tableId: string) {
    try {
      setLoading(true)
      
      const { data: tableData, error: tableError } = await supabase
        .from('tables')
        .select(`
          *,
          restaurants (*)
        `)
        .eq('id', tableId)
        .eq('is_active', true)
        .single()

      if (tableError) {
        throw new Error(`Table not found: ${tableError.message}`)
      }

      if (!tableData) {
        throw new Error('Table not found or inactive')
      }

      setTable(tableData)
      setRestaurant(tableData.restaurants)
    } catch (err: any) {
      console.error('Error fetching table info:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading table information...</p>
        </div>
      </div>
    )
  }

  if (error || !table || !restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Table Not Found</h1>
          <p className="text-gray-600 mb-6">
            {error || 'This table may not exist or is currently inactive.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {restaurant.name}
              </h1>
              <p className="text-gray-600">
                {table.table_name || `Table ${table.table_number}`} • {table.seats} seats
              </p>
            </div>
            {restaurant.logo_url && (
              <img
                src={restaurant.logo_url}
                alt={restaurant.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-4 pb-20">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to {restaurant.name}!
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our menu and place your order directly from your phone
          </p>
          
          {restaurant.cuisine_type && (
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {restaurant.cuisine_type}
            </span>
          )}
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-medium text-gray-900">Your Table</h3>
            <p className="text-sm text-gray-600">
              {table.table_name || `Table ${table.table_number}`}
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-medium text-gray-900">Quick Service</h3>
            <p className="text-sm text-gray-600">
              Average 15-20 min
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
          <h3 className="text-lg font-semibold mb-2">Ready to Order?</h3>
          <p className="text-green-100 mb-4">
            Menu loading... Coming in next task (C2)
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-sm">
              ✨ No need to wait for staff<br/>
              🍕 Browse full menu with photos<br/>
              💳 Pay with our friendly staff
            </p>
          </div>
        </div>
      </main>

      {/* Development Info */}
      <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-3 py-1 rounded text-xs">
        Dev: C1 Complete ✅
      </div>
    </div>
  )
}
EOF

# Test the route
npm run dev
```

### ✅ Deliverable
QR route displaying restaurant and table info with error handling and loading states.

---

## **Task C2: Menu Grid Component (15 min)**

### 🛠️ Steps
```bash
# Create menu components directory
mkdir -p src/components/menu

# Create MenuGrid component
cat > src/components/menu/MenuGrid.tsx << 'EOF'
'use client'
import { MenuItem } from '@/types'
import Image from 'next/image'

interface MenuGridProps {
  items: MenuItem[]
  onItemClick: (item: MenuItem) => void
}

export function MenuGrid({ items, onItemClick }: MenuGridProps) {
  // Group items by category
  const categories = items.reduce((acc, item) => {
    const category = item.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  // Sort categories (featured items first)
  const sortedCategories = Object.keys(categories).sort((a, b) => {
    const categoryOrder = ['Starters', 'Mains', 'Desserts', 'Beverages']
    const aIndex = categoryOrder.indexOf(a)
    const bIndex = categoryOrder.indexOf(b)
    
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    return a.localeCompare(b)
  })

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🍽️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Menu Loading</h3>
        <p className="text-gray-600">Please wait while we prepare the menu...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {sortedCategories.map(category => (
        <div key={category}>
          <div className="sticky top-16 bg-gray-50 py-2 mb-4 -mx-4 px-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="mr-2">
                {category === 'Starters' && '🥗'}
                {category === 'Mains' && '🍽️'}
                {category === 'Desserts' && '🍰'}
                {category === 'Beverages' && '🥤'}
                {!['Starters', 'Mains', 'Desserts', 'Beverages'].includes(category) && '🍴'}
              </span>
              {category}
              <span className="ml-2 text-sm text-gray-500">
                ({categories[category].length})
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories[category]
              .sort((a, b) => {
                // Featured items first, then by sort_order, then by name
                if (a.is_featured && !b.is_featured) return -1
                if (!a.is_featured && b.is_featured) return 1
                if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order
                return a.name.localeCompare(b.name)
              })
              .map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onClick={() => onItemClick(item)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface MenuItemCardProps {
  item: MenuItem
  onClick: () => void
}

function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  return (
    <div
      onClick={onClick}
      className="menu-item group relative overflow-hidden"
    >
      {/* Featured badge */}
      {item.is_featured && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium z-10">
          ⭐ Featured
        </div>
      )}

      {/* Unavailable overlay */}
      {!item.is_available && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
            Sold Out
          </span>
        </div>
      )}

      {/* Image */}
      <div className="w-full h-36 bg-gray-200 rounded-t-lg relative overflow-hidden">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {item.category === 'Starters' && '🥗'}
            {item.category === 'Mains' && '🍽️'}
            {item.category === 'Desserts' && '🍰'}
            {item.category === 'Beverages' && '🥤'}
            {!['Starters', 'Mains', 'Desserts', 'Beverages'].includes(item.category) && '🍴'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
            {item.name}
          </h4>
          <span className="font-semibold text-green-600 ml-2">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {item.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Additional info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            {item.preparation_time && (
              <span className="flex items-center">
                ⏱️ {item.preparation_time}min
              </span>
            )}
            {item.dietary_restrictions && item.dietary_restrictions.length > 0 && (
              <span className="flex items-center">
                🌱 {item.dietary_restrictions[0]}
              </span>
            )}
          </div>
          
          {item.calories && (
            <span>{item.calories} cal</span>
          )}
        </div>
      </div>
    </div>
  )
}
EOF

# Update table page to use MenuGrid
# Replace the previous "Menu loading..." section with actual menu loading
```

### ✅ Deliverable
Menu grid component with categorized items, featured badges, and responsive design.

---

## **Tasks C3-C8: Abbreviated Implementation Guide**

Due to space constraints, here are the key implementations for remaining tasks:

### **C3: Item Detail Modal (15 min)**
- Create `src/components/menu/ItemModal.tsx`
- Modal with item details, quantity selector, special instructions
- "Add to Cart" button with price calculation
- Upsell suggestions section

### **C4: Cart State Management (15 min)**
- Create `src/lib/stores/cartStore.ts` using Zustand
- Functions: `addItem`, `removeItem`, `updateQuantity`, `clearCart`
- Persistent cart state across page reloads
- Create floating cart button component

### **C5: Cart Page/Drawer (15 min)**
- Create cart drawer/modal component
- Item list with quantity controls and remove buttons
- Order summary with subtotal and total
- "Place Order" and "Clear Cart" buttons

### **C6: Upsell Logic (15 min)**
- Add upsell suggestions to ItemModal
- Query related items from `menu_items.upsell_items`
- Fallback to category-based suggestions
- Quick-add buttons for upsell items

### **C7: Order Submission API (15 min)**
- Create `src/app/api/orders/route.ts`
- Validate cart data and calculate totals
- Save order to Supabase with "pending" status
- Return order confirmation data

### **C8: Order Confirmation Page (15 min)**
- Create `src/app/table/[id]/success/page.tsx`
- Display order number and estimated time
- Thank you message with order details
- "Order More" and "Call Staff" buttons

---

## 🎯 Customer App Complete Workflow

### Final Integration Test
```bash
# Test complete customer journey
1. Visit /table/[table-id]
2. Browse menu by categories
3. Click item → modal opens with details
4. Add to cart → floating button appears
5. Open cart → review items
6. Place order → API call succeeds
7. Redirect to success page
8. Order stored in database with "pending" status
```

### ✅ All Tasks Deliverable
- Complete customer ordering flow from QR scan to order confirmation
- Mobile-optimized responsive design
- Error handling and loading states
- Integration with Supabase database
- Ready for server-side order processing

**Customer App Phase Complete**: 8 tasks, 120 minutes, full ordering system! 📱