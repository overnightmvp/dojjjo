# 🎨 The Pitch Office - Figma Component Library
*Complete UI Component Documentation for Prototype Creation*

## 🏗️ Component Architecture

### **Design System Hierarchy**
```
Design System
├── Foundation
│   ├── Colors (Brand palette)
│   ├── Typography (Inter font system)
│   ├── Spacing (8px grid)
│   └── Effects (Shadows, transitions)
├── Components
│   ├── Buttons (Primary, secondary, language toggles)
│   ├── Forms (Email capture, progressive disclosure)
│   ├── Navigation (Phase tabs, sticky nav)
│   └── Cards (Content sections, testimonials)
└── Patterns
    ├── Hero Sections (Landing page headers)
    ├── Assessment Tools (Interactive checklists)
    └── Success States (Confirmation pages)
```

---

## 🎯 Foundation Elements

### **Color Styles**
```
Brand Primary: #F200FF
├── Primary 100: #F200FF (Main brand)
├── Primary 80: #F233FF (Hover states)
├── Primary 60: #F566FF (Disabled states)
└── Primary 20: #FCCFFF (Background tints)

Neutrals:
├── Black: #000000 (High contrast text)
├── White: #FFFFFF (Clean backgrounds)
├── Gray 700: #6B7280 (Secondary text)
├── Gray 300: #F3F4F6 (Light backgrounds)
└── Gray 100: #F9FAFB (Subtle sections)

Semantic Colors:
├── Success Gold: #B8860B (Achievement states)
├── Strategic Blue: #1E3A8A (Professional accents)
├── Subtle Green: #059669 (Positive feedback)
└── Alert Red: #DC2626 (Error states)
```

### **Typography Styles**
```
Display Large:
├── Font: Inter Bold 900
├── Size: clamp(2.2rem, 5vw, 3.5rem)
├── Line Height: 1.2
└── Use: Hero headlines

Heading 1:
├── Font: Inter Bold 700
├── Size: clamp(1.6rem, 4vw, 2.4rem)
├── Line Height: 1.3
└── Use: Section titles

Heading 2:
├── Font: Inter Bold 700
├── Size: clamp(1.2rem, 3vw, 1.6rem)
├── Line Height: 1.3
└── Use: Subsection titles

Body Large:
├── Font: Inter Medium 500
├── Size: 1.1rem
├── Line Height: 1.6
└── Use: Important body text

Body Regular:
├── Font: Inter Medium 500
├── Size: 1rem
├── Line Height: 1.6
└── Use: Standard body text

Caption:
├── Font: Inter Medium 500
├── Size: 0.875rem
├── Line Height: 1.4
└── Use: Supporting text, labels
```

### **Spacing System** (8px Grid)
```
XS: 8px    - Icon spacing, tight elements
SM: 12px   - Button padding, form fields
MD: 20px   - Section gaps, card padding
LG: 32px   - Major sections, content blocks
XL: 48px   - Page sections, hero spacing
2XL: 64px  - Page margins, major breaks
```

### **Effects & Shadows**
```
Pitch Shadow:
├── Blur: 12px
├── Offset: 0, 4px
├── Color: rgba(0,0,0,0.15)
└── Use: Cards, buttons, modals

Deep Shadow:
├── Offset: 4px, 4px
├── Color: #000000
├── Blur: 0
└── Use: High emphasis elements

Subtle Shadow:
├── Blur: 6px
├── Offset: 0, 2px
├── Color: rgba(0,0,0,0.1)
└── Use: Form fields, subtle elevation
```

---

## 🔘 Button Components

### **Primary Button**
```
Default State:
├── Background: #F200FF
├── Text: White, Inter Bold 700, 1rem
├── Padding: 12px 24px
├── Border Radius: 8px
├── Shadow: Pitch Shadow
└── Cursor: Pointer

Hover State:
├── Background: #F233FF
├── Transform: translateY(-2px)
├── Shadow: Enhanced depth
└── Transition: 0.2s ease

Disabled State:
├── Background: #F566FF
├── Opacity: 0.6
├── Cursor: not-allowed
└── No hover effects

Sizes:
├── Small: 8px 16px, 0.875rem text
├── Medium: 12px 24px, 1rem text (default)
└── Large: 16px 32px, 1.1rem text
```

### **Secondary Button**
```
Default State:
├── Background: Transparent
├── Text: #F200FF, Inter Bold 700
├── Border: 2px solid #F200FF
├── Padding: 10px 22px (accounts for border)
├── Border Radius: 8px
└── Transition: 0.2s ease

Hover State:
├── Background: #F200FF
├── Text: White
├── Transform: translateY(-1px)
└── Shadow: Subtle Shadow
```

### **Language Toggle Buttons**
```
Container:
├── Display: Flex gap 4px
├── Background: #F3F4F6
├── Border Radius: 6px
├── Padding: 4px
└── Border: 1px solid #6B7280

Button (Inactive):
├── Background: Transparent
├── Text: #6B7280, Inter Medium 500
├── Padding: 6px 12px
├── Border Radius: 4px
└── Cursor: Pointer

Button (Active):
├── Background: #F200FF
├── Text: White, Inter Bold 700
├── Shadow: 0 1px 2px rgba(0,0,0,0.1)
└── Transform: None

Interaction:
├── Hover: Background tint
├── Click: Immediate active state
└── Transition: 0.15s ease
```

---

## 📝 Form Components

### **Email Input Field**
```
Container:
├── Width: 100%
├── Position: Relative
└── Margin Bottom: 16px

Input Field:
├── Width: 100%
├── Padding: 12px 16px
├── Border: 2px solid #6B7280
├── Border Radius: 8px
├── Font: Inter Medium 500, 1rem
├── Background: White
└── Transition: border-color 0.2s ease

Focus State:
├── Border: 2px solid #F200FF
├── Outline: None
├── Shadow: 0 0 0 3px rgba(242,0,255,0.1)
└── Background: White

Error State:
├── Border: 2px solid #DC2626
├── Background: #FEF2F2
└── Text Color: #DC2626

Placeholder:
├── Color: #9CA3AF
├── Font: Inter Regular 400
└── Opacity: 1
```

### **Progressive Form Reveal**
```
Hidden State:
├── Display: None
├── Transform: translateY(20px)
├── Opacity: 0
└── Pointer Events: None

Reveal Animation:
├── Display: Block
├── Transform: translateY(0)
├── Opacity: 1
├── Duration: 0.3s ease-out
└── Pointer Events: Auto

Container:
├── Background: White
├── Border: 2px solid #F200FF
├── Border Radius: 8px
├── Padding: 24px
├── Shadow: Pitch Shadow
└── Max Width: 400px
```

---

## 🧭 Navigation Components

### **Phase Navigation (Sticky)**
```
Container:
├── Position: Sticky, top: 0
├── Background: White
├── Border Bottom: 2px solid #E5E7EB
├── Padding: 16px 0
├── Z-Index: 100
└── Backdrop Filter: blur(8px)

Tab Container:
├── Display: Flex, center, wrap
├── Gap: 8px
├── Max Width: 1200px
├── Margin: 0 auto
└── Padding: 0 20px

Phase Tab (Inactive):
├── Background: #F3F4F6
├── Border: 1px solid #D1D5DB
├── Border Radius: 6px
├── Padding: 8px 16px
├── Font: Inter Bold 700, 0.875rem
├── Color: #6B7280
├── Cursor: Pointer
└── Transition: all 0.2s ease

Phase Tab (Active):
├── Background: #F200FF
├── Border: 1px solid #F200FF
├── Color: White
├── Shadow: Pitch Shadow
└── Transform: none

Phase Tab (Hover):
├── Background: #F200FF
├── Color: White
├── Transform: translateY(-2px)
└── Shadow: Enhanced depth
```

### **Theme Toggle Switch**
```
Container:
├── Width: 60px
├── Height: 32px
├── Background: #D1D5DB
├── Border Radius: 16px
├── Position: Relative
├── Cursor: Pointer
└── Transition: background 0.3s ease

Toggle (Light Mode):
├── Background: #D1D5DB
├── Knob: Left position
└── Icon: Sun (yellow)

Toggle (Dark Mode):
├── Background: #F200FF
├── Knob: Right position
└── Icon: Moon (white)

Knob:
├── Width: 28px
├── Height: 28px
├── Background: White
├── Border Radius: 50%
├── Position: Absolute
├── Top: 2px
├── Shadow: 0 2px 4px rgba(0,0,0,0.2)
├── Transition: transform 0.3s ease
└── Transform: translateX(2px or 30px)
```

---

## 🃏 Card Components

### **Content Card**
```
Container:
├── Background: White
├── Border: 1px solid #E5E7EB
├── Border Radius: 8px
├── Padding: 24px
├── Shadow: Subtle Shadow
├── Transition: shadow 0.2s ease
└── Overflow: Hidden

Hover State:
├── Shadow: Pitch Shadow
├── Transform: translateY(-2px)
└── Transition: all 0.2s ease

Header:
├── Margin Bottom: 16px
├── Padding Bottom: 16px
├── Border Bottom: 1px solid #E5E7EB
└── Color: #1F2937

Content:
├── Line Height: 1.6
├── Color: #6B7280
└── Font: Inter Medium 500
```

### **Testimonial Card**
```
Container:
├── Background: Linear gradient #F200FF to #B8860B
├── Color: White
├── Border Radius: 12px
├── Padding: 32px
├── Position: Relative
├── Shadow: Deep Shadow
└── Overflow: Hidden

Quote Icon:
├── Position: Absolute, top: 16px, right: 16px
├── Font Size: 2rem
├── Color: rgba(255,255,255,0.3)
└── Font Family: Georgia, serif

Quote Text:
├── Font: Inter Medium 500, 1.1rem
├── Line Height: 1.6
├── Margin Bottom: 20px
├── Color: White
└── Text Shadow: 1px 1px 2px rgba(0,0,0,0.3)

Author:
├── Font: Inter Bold 700, 0.875rem
├── Color: rgba(255,255,255,0.9)
├── Text Transform: Uppercase
├── Letter Spacing: 0.5px
└── Margin Top: Auto
```

### **Statistic Card**
```
Container:
├── Text Align: Center
├── Background: White
├── Border: 2px solid #F200FF
├── Border Radius: 8px
├── Padding: 24px 16px
├── Shadow: Pitch Shadow
└── Transition: transform 0.2s ease

Hover State:
├── Transform: scale(1.05)
└── Shadow: Enhanced depth

Number:
├── Font: Inter Black 900, 2.5rem
├── Color: #F200FF
├── Line Height: 1
├── Margin Bottom: 8px
└── Display: Block

Label:
├── Font: Inter Bold 700, 0.875rem
├── Color: #6B7280
├── Text Transform: Uppercase
├── Letter Spacing: 0.5px
└── Line Height: 1.2
```

---

## 🎨 Pattern Components

### **Hero Section**
```
Container:
├── Background: Linear gradient 135deg, #F200FF 0%, #B8860B 100%
├── Color: White
├── Padding: 80px 0
├── Text Align: Center
├── Position: Relative
└── Overflow: Hidden

Background Pattern:
├── Position: Absolute
├── Opacity: 0.1
├── Transform: rotate(-45deg)
└── Pointer Events: None

Content Container:
├── Max Width: 800px
├── Margin: 0 auto
├── Padding: 0 20px
├── Position: Relative
└── Z-Index: 10

Headline:
├── Font: Inter Black 900
├── Size: clamp(2.2rem, 5vw, 3.5rem)
├── Line Height: 1.2
├── Margin Bottom: 24px
├── Text Shadow: 2px 2px 4px rgba(0,0,0,0.3)
└── Color: White

Subheadline:
├── Font: Inter Medium 500, 1.2rem
├── Line Height: 1.5
├── Margin Bottom: 32px
├── Color: rgba(255,255,255,0.9)
└── Max Width: 600px, center

CTA Container:
├── Display: Flex, center, wrap
├── Gap: 16px
├── Justify Content: Center
└── Margin Top: 32px
```

### **Assessment Tool Interface**
```
Phase Content:
├── Display: None (initially)
├── Padding: 32px
├── Max Width: 800px
├── Margin: 0 auto
└── Animation: fadeIn 0.3s ease

Phase Content (Active):
├── Display: Block
├── Animation: slideInUp 0.3s ease
└── Transform: translateY(0)

Checklist Item:
├── Display: Flex, align-start
├── Gap: 12px
├── Padding: 16px
├── Border: 1px solid #E5E7EB
├── Border Radius: 8px
├── Margin Bottom: 12px
├── Background: White
├── Transition: all 0.2s ease
└── Cursor: Pointer

Checklist Item (Checked):
├── Background: #F0FDF4
├── Border: 1px solid #059669
├── Transform: scale(1.02)
└── Shadow: 0 2px 8px rgba(5,150,105,0.1)

Checkbox:
├── Width: 20px
├── Height: 20px
├── Border: 2px solid #D1D5DB
├── Border Radius: 4px
├── Background: White
├── Position: Relative
└── Transition: all 0.2s ease

Checkbox (Checked):
├── Background: #059669
├── Border: 2px solid #059669
└── Check icon: White, centered

Progress Bar:
├── Height: 8px
├── Background: #E5E7EB
├── Border Radius: 4px
├── Overflow: Hidden
├── Margin: 20px 0
└── Position: Relative

Progress Fill:
├── Height: 100%
├── Background: Linear gradient #F200FF to #B8860B
├── Width: Dynamic (0-100%)
├── Transition: width 0.3s ease
└── Border Radius: 4px
```

### **Success Confirmation**
```
Container:
├── Background: Linear gradient 135deg, #F200FF 0%, #B8860B 100%
├── Min Height: 100vh
├── Display: Flex, center
├── Align Items: Center
├── Position: Relative
└── Overflow: Hidden

Success Card:
├── Max Width: 600px
├── Margin: 20px
├── Background: White
├── Border Radius: 8px
├── Border: 1px solid #000000
├── Shadow: Deep Shadow
├── Overflow: Hidden
├── Text Align: Center
└── Position: Relative, z-index: 10

Success Header:
├── Background: Linear gradient 135deg, #B8860B, #1E3A8A
├── Padding: 40px 30px
├── Position: Relative
└── Border Bottom: 2px solid #000000

Success Icon:
├── Font Size: 4rem
├── Margin Bottom: 20px
├── Animation: bounce 2s ease-in-out infinite
└── Text Shadow: 2px 2px 4px rgba(0,0,0,0.3)

Success Animation (Bounce):
├── 0%, 100%: translateY(0)
├── 50%: translateY(-10px)
└── Duration: 2s, infinite
```

---

## 📱 Responsive Breakpoints

### **Mobile First Approach**
```
Mobile (320px+):
├── Container padding: 16px
├── Font sizes: Minimum clamp values
├── Button padding: 10px 20px
├── Card padding: 20px
└── Stack all flex layouts

Tablet (768px+):
├── Container padding: 24px
├── Two-column layouts
├── Larger touch targets
├── Side-by-side forms
└── Expanded navigation

Desktop (1024px+):
├── Container padding: 32px
├── Full multi-column layouts
├── Hover states active
├── Larger spacing values
└── Complex interactions

Large Desktop (1200px+):
├── Max container width: 1200px
├── Maximum font sizes
├── Full feature set
├── Enhanced animations
└── Optimal spacing
```

---

## 🎯 Implementation Priority

### **Phase 1: Foundation** (Essential)
1. Color styles and typography
2. Basic button components
3. Form input components
4. Container layouts

### **Phase 2: Navigation** (Core Experience)
1. Language toggle system
2. Theme switching interface
3. Phase navigation tabs
4. Mobile menu patterns

### **Phase 3: Content** (User Journey)
1. Hero section patterns
2. Card component library
3. Assessment tool interface
4. Success confirmation patterns

### **Phase 4: Enhancement** (Polish)
1. Animation states
2. Hover interactions
3. Loading states
4. Error handling patterns

---

*This component library provides everything needed to recreate The Pitch Office customer journey in Figma with pixel-perfect accuracy and complete interactive functionality. Each component is designed for the €2.5k-15k B2B consultation positioning with 85% success rate credibility.*