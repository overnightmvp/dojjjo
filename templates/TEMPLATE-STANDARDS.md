# DOJJJO Template Standards
*LLM-friendly template system for consistent project replication*

## 🎯 **Single Design System**
- **Main CSS**: `assets/css/brutal-design-system.css` (ONLY design system)
- **No iOS variables** - All iOS/other design systems removed
- **Template variables**: Use `--template-primary`, `--template-secondary`, etc. for customization

## 📁 **Path Resolution Standards**

### Root Level Files
```html
<link rel="stylesheet" href="assets/css/brutal-design-system.css">
<script src="assets/js/brand-config.js"></script>
<script src="assets/js/core.js"></script>
```

### One Level Deep (omvp/, toshioj/)
```html
<link rel="stylesheet" href="../assets/css/brutal-design-system.css">
<script src="../assets/js/brand-config.js"></script>
<script src="../assets/js/core.js"></script>
```

### Three Levels Deep (omvp/lead-magnet/48-hour-business-blueprint/)
```html
<link rel="stylesheet" href="../../../assets/css/brutal-design-system.css">
<script src="../../../assets/js/brand-config.js"></script>
<script src="../../../assets/js/core.js"></script>
```

## 🚨 **DEPRECATED PATTERNS** 
❌ `./assets/css/design-system.css` (wrong file + wrong path)
❌ `assets/css/omvp-design-system.css` (deleted file)
❌ iOS variables (`--ios-black`, `--ios-white`, etc.)
❌ Inline `<style>` blocks for button sizing
❌ Multiple tracking script copies

## ✅ **STANDARDIZED COMPONENTS**

### Button Sizing System
```css
.btn-lg    /* 20px 40px padding, 1.2rem font */
.btn-md    /* 16px 32px padding, 1rem font */  
.btn-sm    /* 12px 24px padding, 0.9rem font */
```

### Text Shadow System
```css
/* Enhanced shadows built into headings */
h1, h2, h3 { text-shadow: 2px 2px 0px + 4px 4px blur }
/* White headings get black shadows, dark headings get red */
```

### Hero Component
```html
<section class="hero-standard">
    <!-- Standardized hero with gradient background -->
</section>
```

### Template Customization Points
```css
/* TEMPLATE: Customize these for each project */
--template-primary: #ef4444;    /* Main brand color */
--template-secondary: #f97316;  /* Secondary brand color */
--template-accent: #111827;     /* Accent color */
--template-success: #10b981;    /* Success/CTA color */
```

## 🔧 **LLM Customization Comments**

### HTML Structure
```html
<!-- TEMPLATE: Update title and description for each page -->
<title>{{PAGE_TITLE}} | DOJJJO</title>
<meta name="description" content="{{PAGE_DESCRIPTION}}">

<!-- TEMPLATE: Page-specific styles go here -->
<style>{{PAGE_STYLES}}</style>
```

### CSS Components
```css
/* TEMPLATE: Base button - customize via --template-* variables */
.btn { /* component definition */ }

/* TEMPLATE: Enhanced text shadows - 2px solid + 4px blur for impact */
text-shadow: 2px 2px 0px var(--brutal-black), 4px 4px 8px rgba(0, 0, 0, 0.3);
```

## 📊 **File Status**

### ✅ CLEANED UP
- `dojjjo-landing.html` - Inline styles removed
- `omvp/lead-magnet/48-hour-business-blueprint/48-hour-business-blueprint-landing.html` - Cleaned
- `assets/css/brutal-design-system.css` - Enhanced with template variables

### 🔧 NEEDS FIXING  
- All staging files with `./assets/css/design-system.css`
- Email templates with iOS variables
- Files with broken relative paths

### 🗑️ TO DELETE/ARCHIVE
- `assets/css/omvp-design-system.css` (if exists)
- Files with duplicate design systems
- Staging files with wrong references

## 🚀 **Template Usage**

### For New Projects
1. Copy `templates/master-template.html`
2. Replace `{{PAGE_TITLE}}`, `{{PAGE_DESCRIPTION}}`, etc.
3. Customize `--template-*` variables in CSS
4. Use standardized components (.btn-lg, .hero-standard, etc.)

### For LLM Agents
- Look for `<!-- TEMPLATE: -->` comments for customization points
- Use `--template-*` CSS variables for brand customization
- Follow path resolution patterns based on file depth
- Never add inline styles - extend design system instead

*Keep it brutally simple. One design system. Clear patterns. LLM-friendly comments.*