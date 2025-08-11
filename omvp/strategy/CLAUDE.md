# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 Project Overview

**DOJJJO** is a working hybrid business model combining personal brand credibility with template-driven service delivery. The project evolved from scattered personal brand into systematic OMVP service business targeting $15K/month through disciplined execution and scalable client delivery.

### Current Structure
- **Type**: Hybrid business model - Personal brand + Template service delivery system
- **Stack**: Static HTML + CSS + JavaScript (template-ready, no build system required)
- **Design Philosophy**: iOS-inspired design system with customizable brand variables
- **Revenue Model**: $15K/month (3 clients × $5K OMVP Complete)
- **Service Offering**: $5K OMVP Complete - Single focused service delivery
- **Status**: ✅ Working System - All documentation consolidated in `/omvp/strategy/` with CPO dashboard for project management
- **Management**: CPO Dashboard at `/cpo-dashboard.html` for unified project control

## 🚀 Common Development Commands

### Local Development
```bash
# No build system - static HTML/CSS/JS template system
# Open files directly in browser for testing

# PROJECT MANAGEMENT
open "cpo-dashboard.html"               # CPO Dashboard - unified project control

# MAIN SYSTEM (Production)
open "index.html"                       # Main personal brand landing page
open "omvp/index.html"                  # $5K OMVP service landing page
open "omvp/submit.html"                 # Service inquiry form
open "omvp/success.html"                # Confirmation + next steps

# LEAD MAGNETS & CONVERSION SYSTEM
open "48-hour-worksheet/index.html"     # Email capture landing with timer psychology
open "48-hour-worksheet/success.html"   # Worksheet delivery + urgency messaging
open "48-hour-worksheet/worksheet.html" # Interactive business validation system

# EMAIL AUTOMATION SYSTEM
open "48-hour-worksheet/delivery/"      # 5 worksheet nurture emails
open "omvp/delivery/"                   # 6 OMVP high-intent emails

# STRATEGY & DOCUMENTATION
open "omvp/strategy/"                   # All consolidated strategy documents (25+ files)
open "omvp/strategy/OMVP-SERVICE-BLUEPRINT.md"    # Client delivery framework
open "omvp/strategy/OMVP-CONTENT-GOVERNANCE.md"   # Content consistency rules

# DESIGN SYSTEM & ASSETS
open "design-system/index.html"         # Design system documentation
open "assets/js/brevo-config.js"        # Email automation configuration
open "assets/js/analytics-enhanced.js"  # Conversion tracking system
```

### Project Organization
```bash
# Run organization script to structure files correctly
./organize-project.sh

# Check current file organization status
ls -la
```

### File Validation
```bash
# HTML validation (requires html5validator)
html5validator --root . --match="*.html"

# CSS validation using online tools or browser dev tools
# JavaScript validation via browser console
```

## 🏗️ Repository Architecture

### Core Structure
```
dojjjo/ (Working Hybrid Business Model)
├── 🖥️ PROJECT MANAGEMENT/
│   └── cpo-dashboard.html         # CPO Dashboard - unified project control
├── 🎯 PERSONAL BRAND SYSTEM/
│   ├── index.html                 # Primary personal brand landing page
│   ├── 48-hour-worksheet/         # Lead capture funnel with timer psychology
│   └── design-system/             # iOS-inspired design system documentation
├── 🏗️ SERVICE DELIVERY SYSTEM/
│   ├── omvp/index.html            # $5K OMVP service landing page
│   ├── omvp/submit.html           # Service inquiry form
│   ├── omvp/delivery/             # 6 OMVP high-intent emails
│   ├── omvp/lead-magnet/          # Portfolio showcase tools
│   └── omvp/flowcharts/           # Process visualization
├── 📚 STRATEGY & DOCUMENTATION/ (CONSOLIDATED)
│   └── omvp/strategy/             # ALL 25+ strategy documents in one location
│       ├── OMVP-SERVICE-BLUEPRINT.md      # Client delivery framework
│       ├── OMVP-DELIVERY-CHECKLIST.md     # Operational execution guide
│       ├── OMVP-CUSTOMER-JOURNEY-OPTIMIZED.md # 5-stage funnel
│       ├── OMVP-CONTENT-GOVERNANCE.md     # Content consistency rules
│       ├── OMVP-48-hour-business-blueprint.md # Primary lead magnet
│       ├── OMVP-ORGANIZATION-GUIDE.md     # File structure guide
│       ├── OMVP-backlog.md               # Strategic priorities
│       ├── OMVP-master-plan.md           # Business evolution roadmap
│       ├── CLAUDE.md                     # This file
│       ├── BREVO-TEMPLATES.md            # Email automation setup
│       ├── prompts.md                    # Complete prompt engineering
│       ├── README.md                     # Project overview
│       └── [18+ other strategy files]    # Support documentation
└── 🛠️ TEMPLATE INFRASTRUCTURE/
    ├── assets/css/brutal-design-system.css # iOS-inspired design system
    ├── assets/js/core.js              # Universal functionality
    └── assets/js/brevo-config.js      # Email automation configuration
```

### Key Patterns
- **Hybrid Business Model** - Personal brand credibility + Template service delivery
- **Template-Ready System** - All components customizable for client delivery
- **Static files only** - No build process, direct browser loading for easy deployment
- **iOS-Inspired Design** - Professional aesthetics with customizable brand variables
- **Dual-Purpose Lead Magnets** - Personal conversion + Portfolio showcase for service credibility
- **Systematic Delivery** - 7-day client template transformation with quality gates

## 🎨 Design System

### Core Identity
- **Color System**: iOS-inspired with customizable brand variables (`--template-primary`, `--template-secondary`)
- **Typography**: SF Pro Display/Text system fonts with iOS text scales
- **Visual Style**: Native iOS aesthetics with conversion-focused elements
- **Dark Mode**: Automatic theme switching based on system preference

### Key Design Components
```css
/* Button Size System */
.btn-lg            # Large buttons (20px 40px padding, 1.2rem font)
.btn-md            # Medium buttons (16px 32px padding, 1rem font)
.btn               # Standard button component with brutal aesthetics

/* Enhanced Text Shadow System */
h1, h2, h3         # Layered text shadows (2px solid + 4px blur)
/* White headings get black shadows, dark headings get red shadows */

/* Dynamic Components */
#countdown-timer   # Fear-based countdown timer (48-hour urgency)
.warning-box       # Time-sensitive urgency messaging

/* Email-Style Step System */
.step-container    # Container for step-based content
.step-item         # Individual step with icon and content
.step-icon         # Circular numbered/icon step indicator

/* Enhanced Card Variants */
.card-insight      # Key insight highlighting
.card-warning      # Warning/urgency messaging
.card-success      # Success/completion states
.card-code         # Code/prompt display blocks

/* Sophisticated Badge System */
.badge-accent      # Primary accent badges
.badge-day         # Day/time-specific badges
.badge-success     # Success state badges

/* Email-Quality Content Blocks */
.framework-section # Structured framework content
.assignment-box    # Action assignment blocks
.quote-block       # Testimonial/quote styling
.timeline-content  # Sequential timeline layouts
```

## ⚙️ JavaScript Architecture

### Core Functionality (assets/js/core.js)
- **Theme Management**: Auto dark mode detection with manual override
- **Form Handling**: Lead magnet forms with validation
- **Mobile Menu**: Touch-friendly navigation interactions
- **Analytics Integration**: Event tracking for conversion optimization
- **Countdown Timers**: Dynamic 48-hour urgency timers for conversion psychology
- **No Dependencies**: Pure vanilla JavaScript implementation

### Brand Configuration (assets/js/brand-config.js)
- **Multi-brand Support**: Template system for client customization
- **Color Variables**: iOS system colors with custom brand overrides
- **Language Switching**: Bilingual content management (archived feature)
- **Theme Persistence**: localStorage-based preference storage

## 📋 Content Strategy

### Lead Generation Funnel
- **Primary Lead Magnet**: `omvp/strategy/OMVP-48-hour-business-blueprint.md` - Core OMVP methodology
- **Secondary Assessment**: `omvp/lead-magnet/staging/diagnosis/diagnosis.html` - Business validation tool
- **Email Sequence**: 5-part automation in `omvp/email template/01-05-*.html`
- **Conversion Goal**: Discovery call bookings for $5K OMVP Complete service

### Content Philosophy
- **Brutal Honesty**: Direct, no-bullshit communication style
- **Conversion Focus**: Every element optimized for lead generation
- **Pattern Interruption**: Visual and psychological elements for attention
- **Credibility Building**: 15 years experience + failures + 1 exit story

## 🚨 Development Guidelines

### File Organization Rules
**HYBRID MODEL STRUCTURE:**
- **Personal Brand**: 2 core lead magnets (blueprint + diagnosis) for conversion
- **Service Portfolio**: All lead magnets serve dual purpose (conversion + client credibility)
- **Template System**: All components customizable for client delivery
- **Clear Separation**: Personal brand vs service delivery systems organized distinctly

**DO NOT ADD:**
- ❌ Additional personal brand landing pages (current one optimized)
- ❌ Lead magnets without strategic purpose (conversion or portfolio value)
- ❌ Service complexity that confuses template delivery process
- ❌ Multi-brand confusion or unnecessary bilingual features

**FOCUS ON:**
- ✅ Template system optimization for client delivery
- ✅ Service delivery process refinement and quality gates
- ✅ Personal brand conversion optimization for both personal and service leads
- ✅ Operational excellence enabling team scaling and concurrent client delivery

## 🎯 Business Context

### Hybrid Revenue Model
- **Revenue Target**: $15K/month (3 clients × $5K OMVP Complete)
- **Service Offering**: Single $5K OMVP Complete service (no tiers - focused execution)
- **Target Market**: Entrepreneurs needing systematic business transformation
- **Service Delivery**: 7-day client template transformation with quality gates
- **Template System**: iOS-inspired design system enabling premium client delivery
- **Success Metrics**: 90%+ client satisfaction, 50%+ template efficiency vs custom builds
- **Management**: CPO Dashboard for tracking development progress and service delivery

### Business Evolution Story
- **Credibility Foundation**: 15 years experience + 5 documented failures + 1 exit
- **Transformation Journey**: From $560/month BJJ coaching to $15K/month hybrid business
- **Template Innovation**: Personal brand success becomes systematic client delivery framework
- **UI Excellence**: S-tier design system with email-quality components for premium positioning
- **Philosophy**: Brutal honesty + martial arts discipline + systematic template execution
- **Scaling Vision**: Team-delivered consistent results with minimal founder dependency
- **Location Freedom**: Bangkok-based with global template delivery capability

## 🚀 Pre-Deployment Protocol
Before every deployment (git push), act as S-tier product owner and execute:

1. **Update @omvp/strategy/prompts.md**: Document all prompts used in customer journey style with complete methodology
2. **Update @omvp/strategy/OMVP-master-plan.md**: If changes affect strategic direction or business model  
3. **Update @omvp/flowcharts/**: If changes impact customer journey or system architecture
4. **Update @cpo-dashboard.html**: Reflect any new metrics or service accounts added
5. **Quality Gates**: Ensure all updates align with hybrid business model and $15K/month revenue targets

This ensures complete methodology documentation for template replication and team scaling.

## 🖥️ CPO Dashboard Management
Access unified project control via `/cpo-dashboard.html`:
- **Core Business Docs**: Direct access to all OMVP- prefixed strategy files
- **Service Accounts**: One-click access to GitHub, Claude, Gmail, Brevo, Analytics, Netlify, Gemini
- **Quick Navigation**: Fast access to all landing pages and system components
- **Project Health**: Real-time metrics and development progress tracking