# Path Reference Guide
*Correct relative paths for DOJJJO template system*

## 📁 **File Locations**
```
dojjjo/
├── assets/css/brutal-design-system.css    ← MAIN DESIGN SYSTEM
├── assets/js/brand-config.js               ← MAIN JS CONFIG  
├── assets/js/core.js                       ← MAIN FUNCTIONALITY
├── index.html                              ← ROOT LEVEL
├── dojjjo-landing.html                     ← ROOT LEVEL
├── omvp/
│   ├── index.html                          ← 1 LEVEL DEEP
│   └── lead-magnet/48-hour-business-blueprint/
│       ├── 48-hour-business-blueprint.html ← 3 LEVELS DEEP
│       └── success.html                    ← 3 LEVELS DEEP
└── templates/
    └── master-template.html                ← TEMPLATE BASE
```

## ✅ **Correct Patterns**

### Root Level (`index.html`, `dojjjo-landing.html`)
```html
<link rel="stylesheet" href="assets/css/brutal-design-system.css">
<script src="assets/js/brand-config.js"></script>
<script src="assets/js/core.js"></script>
```

### 1 Level Deep (`omvp/index.html`)  
```html
<link rel="stylesheet" href="../assets/css/brutal-design-system.css">
<script src="../assets/js/brand-config.js"></script>
<script src="../assets/js/core.js"></script>
```

### 3 Levels Deep (`omvp/lead-magnet/48-hour-business-blueprint/*.html`)
```html
<link rel="stylesheet" href="../../../assets/css/brutal-design-system.css">
<script src="../../../assets/js/brand-config.js"></script>
<script src="../../../assets/js/core.js"></script>
```

## 🚨 **Common Mistakes**

### ❌ Wrong File Names
```html
<!-- WRONG - old iOS system -->
<link rel="stylesheet" href="assets/css/design-system.css">

<!-- WRONG - deleted file -->  
<link rel="stylesheet" href="assets/css/omvp-design-system.css">

<!-- WRONG - doesn't exist -->
<link rel="stylesheet" href="./assets/css/design-system.css">
```

### ❌ Wrong Relative Paths
```html
<!-- WRONG - relative to current dir instead of file location -->
<link rel="stylesheet" href="./assets/css/brutal-design-system.css">

<!-- WRONG - too many ../  -->
<link rel="stylesheet" href="../../../../assets/css/brutal-design-system.css">

<!-- WRONG - not enough ../ -->
<link rel="stylesheet" href="assets/css/brutal-design-system.css"> 
```

## 🔧 **Quick Fix Formula**

1. **Count directory levels** from your HTML file to root:
   - Root level = `assets/`
   - 1 level = `../assets/`  
   - 2 levels = `../../assets/`
   - 3 levels = `../../../assets/`

2. **Always use**: `brutal-design-system.css` (not design-system.css)

3. **Standard triplet**:
   ```html
   <link rel="stylesheet" href="{{LEVELS}}assets/css/brutal-design-system.css">
   <script src="{{LEVELS}}assets/js/brand-config.js"></script>
   <script src="{{LEVELS}}assets/js/core.js"></script>
   ```

## 📊 **Files Needing Fixes**

### High Priority (Production)
- ✅ `dojjjo-landing.html` - FIXED
- ✅ `omvp/index.html` - FIXED  
- ✅ `omvp/lead-magnet/48-hour-business-blueprint/*.html` - FIXED

### Low Priority (Staging/Archive)
- `omvp/lead-magnet/staging/**/*.html` - 13 files with wrong paths
- `archive/*.html` - Archive files (consider deletion)

*Use this reference when fixing path issues or creating new templates.*