# 🎯 The Pitch Office - Figma Prototype Guide
*S-tier Product Designer Documentation for Customer Journey Prototype*

## 📋 Executive Summary

**Project**: The Pitch Office B2B Tender Consulting Platform  
**Goal**: Create working Figma prototype showing complete customer journey  
**Pages**: 3 core journey pages + 5 email sequences + 2 flowcharts  
**Brand**: #F200FF accent, bilingual (FR/EN), dark mode support  
**Success Metrics**: 85% success rate, €2.5k-15k pricing tiers

---

## 🚀 Customer Journey Flow

### **Primary User Path** (High-Fidelity Prototype)
```
Landing Page → Lead Magnet → Success Page
(index.html) → (mvp-validation-checklist.html) → (success.html)
```

### **Supporting Journey Elements**
- **Email Sequences**: 5 consultation nurture emails
- **Process Visualization**: 2 interactive flowcharts
- **Language Toggle**: Complete FR/EN bilingual support
- **Theme Switching**: Light/dark mode functionality

---

## 📱 Page Analysis & Specifications

### **1. Landing Page** (`index.html`)
**Purpose**: Convert visitors to audit bookings  
**CTA**: "Réserver Audit Gratuit" / "Book Free Audit"

**Key Components**:
- Hero section with 85% success rate positioning
- Expert positioning (Audrey, 15+ years experience)
- Social proof and case studies
- Email capture form (initially hidden)
- Language toggle (FR/EN)
- Dark mode toggle
- Pricing tiers: €2.5k-15k consultation packages

**Brand Elements**:
- Primary color: #F200FF (The Pitch Office brand)
- Typography: Inter font system
- Shadows: `0 4px 12px rgba(0,0,0,0.15)`
- Border radius: 8px standard

### **2. Lead Magnet** (`mvp-validation-checklist.html`)
**Purpose**: Interactive 8-phase tender audit tool  
**Functionality**: Progressive assessment with scoring

**Key Components**:
- Sticky phase navigation (8 phases)
- Interactive checklist items
- Progress tracking
- Score calculation
- Recommendation engine
- Bilingual content support
- Expert commentary

**Technical Features**:
- Phase-based content switching
- Local storage for progress
- Dynamic scoring algorithm
- Responsive mobile design

### **3. Success Page** (`success.html`)
**Purpose**: Confirm audit booking and next steps  
**Style**: Celebration + clear next actions

**Key Components**:
- Animated success confirmation
- Access to lead magnet tool
- Next steps guidance
- Email confirmation details
- Direct booking calendar link

**Visual Design**:
- Gradient background: #F200FF to #B8860B
- Bouncing success icon animation
- Professional confirmation messaging

---

## 🎨 Design System Documentation

### **Color Palette**
```css
/* Brand Identity */
--brand-primary: #F200FF      /* The Pitch Office signature */
--primary-black: #000000      /* High contrast text */
--clean-white: #FFFFFF        /* Clean backgrounds */
--success-gold: #B8860B       /* Success states */
--strategic-blue: #1E3A8A     /* Professional accents */
--subtle-green: #059669       /* Positive feedback */
--professional-gray: #6B7280  /* Secondary text */
--light-gray: #F3F4F6         /* Background variations */
```

### **Typography System**
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Font Weights */
--font-weight-normal: 500
--font-weight-bold: 700
--font-weight-black: 900

/* Font Sizes (Responsive) */
h1: clamp(2.2rem, 5vw, 3.5rem)
h2: clamp(1.6rem, 4vw, 2.4rem)
h3: clamp(1.2rem, 3vw, 1.6rem)
```

### **Spacing System**
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 20px
--spacing-lg: 32px
--spacing-xl: 48px
--spacing-2xl: 64px
```

### **Component Library**

#### **Primary Button**
- Background: #F200FF
- Text: White
- Padding: 12px 24px
- Border radius: 8px
- Shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Hover: Transform translateY(-2px)

#### **Language Toggle**
- FR/EN buttons
- Active state: #F200FF background
- Inactive state: Gray border
- Click: Switch all `[data-lang]` elements

#### **Theme Toggle**
- Light/Dark mode switch
- CSS custom properties flip
- Local storage persistence
- Smooth transitions: 0.3s ease

#### **Form Components**
- Email inputs with validation
- Progressive disclosure (hidden → revealed)
- Success states with green confirmation
- Error handling with clear messaging

---

## 📧 Email Sequence Integration

### **B2B Consultation Funnel** (5 emails)
1. **Welcome** - Introduction to methodology
2. **Foundation** - Audit preparation guidance
3. **Customer Research** - Market analysis approach
4. **Methodology** - Complete strategic framework
5. **Ongoing Support** - Continuous consultation offering

**Design Consistency**:
- Same brand colors and typography
- Professional B2B language
- €2.5k-15k pricing integration
- Expert positioning throughout

---

## 🔄 Interactive Prototype Requirements

### **Core Interactions**
1. **Language Switching**: FR ↔ EN toggle with content replacement
2. **Theme Switching**: Light ↔ Dark mode with CSS variable updates
3. **Form Progression**: Hidden → Revealed → Submitted → Success
4. **Phase Navigation**: 8-phase assessment with progress tracking
5. **Page Transitions**: Landing → Lead Magnet → Success flow

### **Mobile Responsiveness**
- Breakpoints: 320px, 768px, 1024px, 1200px
- Touch-friendly buttons (44px minimum)
- Collapsible navigation
- Optimized typography scaling

### **Accessibility Standards**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- High contrast ratios (4.5:1 minimum)

---

## 🛠️ Figma Implementation Steps

### **Phase 1: Setup & Assets**
1. Create brand color styles (#F200FF system)
2. Import Inter font family
3. Set up 1200px desktop frame
4. Create mobile 375px frame
5. Establish component library

### **Phase 2: Page Creation**
1. Build landing page layout
2. Create lead magnet assessment tool
3. Design success confirmation page
4. Add bilingual content variations
5. Implement dark mode variants

### **Phase 3: Interactive Prototyping**
1. Wire page-to-page navigation
2. Add language toggle interactions
3. Create form reveal animations
4. Build phase navigation system
5. Add success confirmations

### **Phase 4: Mobile Optimization**
1. Create responsive breakpoints
2. Optimize touch interactions
3. Test accessibility features
4. Validate user flow completeness

---

## 📊 Business Context Integration

### **Revenue Model**
- **Audit Tier**: Free strategic assessment
- **Consultation Tier**: €2,500 tactical consultation
- **Implementation Tier**: €15,000 full methodology delivery

### **Success Metrics**
- **Expert Authority**: 15+ years Audrey's experience
- **Win Rate**: 85%+ tender success rate
- **Market Focus**: French B2B SME/mid-market
- **Conversion Goal**: 25-40% improvement in tender wins

### **Competitive Positioning**
- "On ne répond pas aux appels d'offres. On les gagne. Systématiquement."
- Brutal honesty over generic consulting
- Proven methodology with specific metrics
- Premium positioning with premium results

---

## 🎯 Prototype Success Criteria

### **User Experience Goals**
1. **Clear Value Proposition**: Immediate understanding of 85% success rate
2. **Seamless Bilingual**: Effortless FR/EN switching
3. **Progressive Engagement**: Landing → Assessment → Booking flow
4. **Professional Credibility**: Expert positioning throughout
5. **Mobile Excellence**: Full functionality on all devices

### **Technical Requirements**
1. **Performance**: <3s page load simulation
2. **Interactions**: Smooth 60fps animations
3. **Accessibility**: Full keyboard navigation
4. **Responsiveness**: Perfect mobile/desktop adaptation
5. **Brand Consistency**: #F200FF integration everywhere

---

## 🔗 Asset References

### **Live HTML Files** (for reference)
- Landing: `/html/index.html`
- Assessment: `/html/lead magnet/mvp-validation-checklist.html`
- Success: `/html/success.html`
- CSS System: `/html/assets/css/design-system.css`
- Core JS: `/html/assets/js/core.js`

### **Documentation**
- Customer Journey: `/md-templates/customer_journey_blueprint.md`
- Product Strategy: `/md-templates/product_brain.md`
- Master Plan: `/master-plan.md`

---

*This prototype represents a €50k+ validated business model transformation from MVP validation to sophisticated B2B tender consulting. The Figma implementation should reflect the professional, results-driven positioning that generates €2.5k-15k client engagements through systematic tender optimization.*