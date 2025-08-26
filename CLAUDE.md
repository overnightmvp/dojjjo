# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 Project Overview

**DOJJJO** is a hybrid business model combining personal brand credibility with template-driven service delivery, targeting $15K/month through systematic OMVP (Overnight MVP) service business.

### Core Architecture
- **Type**: Static HTML + CSS + JavaScript (no build system)
- **Revenue Model**: $15K/month (3 clients × $5K OMVP Complete)  
- **Service**: Single $5K OMVP Complete offering
- **Status**: Production-ready brutal consultant funnel with email automation
- **Design System**: iOS-inspired brutal aesthetics with customizable variables

## 🚀 Development Commands

### Local Development
```bash
# No build system - static HTML/CSS/JS files open directly in browser

# PROJECT MANAGEMENT (Start here)
open "dojjjo-dashboard.html"            # Project Dashboard - unified project control

# MAIN PRODUCTION PAGES
open "index.html"                       # Main personal brand landing
open "48-hour-worksheet/index.html"     # Lead capture funnel with timer psychology
open "omvp/index.html"                  # $5K OMVP service landing

# SERVICE DELIVERY SYSTEM
open "omvp/submit.html"                 # High-intent form + file upload
open "omvp/success.html"                # Confirmation + next steps
open "omvp/omvp-delivery-dashboard.html"     # Client project dashboard

# EMAIL AUTOMATION SYSTEM
open "omvp/omvp-email-template-viewer.html"       # Copy templates to Brevo
open "48-hour-worksheet/delivery/"      # 5 worksheet nurture emails
open "omvp/delivery/"                   # 6 OMVP high-intent emails

# STRATEGY & DOCUMENTATION (25+ files)
open "omvp/strategy/"                   # All consolidated strategy documents
open "omvp/strategy/OMVP-master-plan.md" # Business evolution roadmap
open "omvp/strategy/prompts.md"         # Complete methodology prompts

# DESIGN SYSTEM
open "design-system/index.html"         # Design system documentation
```

### Quality Assurance
```bash
# HTML validation (if html5validator available)
html5validator --root . --match="*.html"

# Check file organization
ls -la omvp/strategy/                   # Verify all strategy docs consolidated
ls -la assets/css/                      # Verify design system integrity

# Test email integration
open "assets/js/brevo-config.js"        # Check Brevo configuration
# See BREVO-SETUP-GUIDE.md for testing procedures

# Test analytics
open "assets/js/analytics-enhanced.js"  # Check GA4 tracking setup
# See ANALYTICS-SETUP-GUIDE.md for verification
```

### Deployment Commands
```bash
# Git status and deployment readiness
git status                              # Check for uncommitted changes
git add .                               # Stage changes
git commit -m "Description"             # Commit with meaningful message
git push origin main                    # Deploy to Netlify (auto-deployment)

# Netlify deployment verification (via netlify.toml)
# No build process - static site deploys directly from root
```

## 🏗️ Repository Architecture

### Primary Structure
```
dojjjo/
├── 🎯 PERSONAL BRAND FUNNEL/
│   ├── index.html                      # Main landing page
│   └── 48-hour-worksheet/              # Email capture + worksheet
│       ├── index.html                  # Timer psychology landing
│       ├── success.html                # Delivery + urgency messaging
│       ├── worksheet.html              # Interactive validation system
│       └── delivery/                   # 5-email nurture sequence
├── 💼 SERVICE DELIVERY FUNNEL/
│   └── omvp/                          # $5K OMVP Complete service
│       ├── index.html                  # Service landing page
│       ├── submit.html                 # High-intent form + file upload
│       ├── success.html                # Confirmation + next steps
│       └── delivery/                   # 6-email high-intent sequence
├── 📚 STRATEGY & DOCUMENTATION/
│   └── omvp/strategy/                  # 25+ consolidated strategy files
│       ├── OMVP-SERVICE-BLUEPRINT.md   # Client delivery framework
│       ├── OMVP-DELIVERY-CHECKLIST.md  # Operational execution
│       ├── CLAUDE.md                   # Extended project guidance
│       └── [22+ other strategy files]  # Complete methodology
└── 🛠️ CORE INFRASTRUCTURE/
    ├── assets/css/brutal-design-system.css # iOS-inspired design system
    ├── assets/js/core.js               # Universal functionality
    ├── assets/js/brevo-config.js       # Email automation
    ├── assets/js/analytics-enhanced.js # Conversion tracking
    ├── netlify.toml                    # Static site deployment config
    └── cpo-dashboard.html              # Project management interface
```

### Key Architectural Patterns
- **Hybrid Model**: Personal brand credibility + template service delivery
- **Static First**: No build process, direct browser loading for easy deployment
- **Dual-Purpose Lead Magnets**: Personal conversion + portfolio showcase
- **Template System**: All components customizable for client delivery
- **Psychology-Driven**: 48-hour urgency timers, brutal honesty messaging

## 🎨 Design System Architecture

### Core Design Philosophy
- **iOS-Inspired**: SF Pro fonts, native color system, layered shadows
- **Brutal Aesthetics**: Pattern interruption messaging with professional UX
- **Conversion Focused**: Every element optimized for lead generation
- **Template Ready**: Customizable brand variables for client delivery

### CSS Architecture (`assets/css/brutal-design-system.css`)
```css
/* Core Identity */
--template-primary, --template-secondary  /* Customizable brand colors */
SF Pro Display/Text system fonts         /* iOS typography scale */

/* Key Components */
.btn-lg, .btn-md, .btn                  /* Button size system */
#countdown-timer                        /* 48-hour urgency psychology */
.card-insight, .card-warning            /* Enhanced card variants */
.step-container, .step-item             /* Email-style step system */
```

### JavaScript Architecture
- **Core Functions** (`assets/js/core.js`): Theme management, form handling, mobile menu
- **Brand Config** (`assets/js/brand-config.js`): Multi-brand template system
- **Analytics** (`assets/js/analytics-enhanced.js`): 9-stage funnel tracking with $5000 conversion values
- **Email Integration** (`assets/js/brevo-config.js`): Segmented list management

## 📊 Conversion Funnel System

### Email Automation (Brevo Integration)
- **Segmented Lists**: Worksheet leads vs high-intent OMVP leads
- **Transactional Flow**: Instant delivery + confirmation emails
- **Nurture Sequences**: 5 worksheet emails + 6 OMVP emails
- **Configuration**: See `BREVO-SETUP-GUIDE.md`

### Analytics Tracking (GA4)
- **9-Stage Funnel**: Landing → Email ($50) → Worksheet ($200) → OMVP Submission ($5000)
- **Enhanced Events**: Form interactions, file uploads, timer engagement
- **Attribution**: UTM parameters, referrer tracking, user journey mapping
- **Configuration**: See `ANALYTICS-SETUP-GUIDE.md`

## 🚨 Development Guidelines

### File Organization Rules
**MAINTAIN HYBRID STRUCTURE:**
- Personal brand: 2 core lead magnets (worksheet + diagnosis) for conversion
- Service portfolio: All lead magnets serve dual purpose (conversion + credibility)
- Template system: All components customizable for client delivery
- Clear separation: Personal brand vs service delivery systems

**DO NOT ADD:**
- Additional personal brand landing pages (current one optimized)
- Lead magnets without strategic purpose (conversion or portfolio value)
- Service complexity that confuses template delivery process
- Multi-brand confusion or unnecessary bilingual features

**FOCUS ON:**
- Template system optimization for client delivery
- Service delivery process refinement and quality gates
- Personal brand conversion optimization
- Operational excellence enabling team scaling

### Business Context Requirements
- **Revenue Target**: $15K/month through 3 clients × $5K OMVP Complete
- **Service Delivery**: 7-day client template transformation with quality gates
- **Success Metrics**: 90%+ client satisfaction, 50%+ template efficiency vs custom builds
- **Management**: CPO Dashboard for tracking development and service delivery progress

## 📋 Pre-Deployment Protocol

Before every deployment (git push), execute as S-tier product owner:

1. **Update `omvp/strategy/prompts.md`**: Document all prompts in customer journey style with complete methodology
2. **Update `omvp/strategy/OMVP-master-plan.md`**: If changes affect strategic direction or business model  
3. **Update `omvp/flowcharts/`**: If changes impact customer journey or system architecture
4. **Update `dojjjo-dashboard.html`**: Reflect any new metrics or service accounts added
5. **Quality Gates**: Ensure all updates align with hybrid business model and $15K/month targets

### Pre-Deployment Checklist
```bash
# Verify core functionality
open "index.html"                       # Test main landing page
open "48-hour-worksheet/index.html"     # Test lead capture funnel
open "omvp/index.html"                  # Test service landing page
open "dojjjo-dashboard.html"            # Verify dashboard links work

# Check strategy documentation integrity
ls omvp/strategy/ | wc -l              # Should show 25+ strategy files
grep -r "TODO\|FIXME" omvp/strategy/   # Check for incomplete documentation

# Verify deployment readiness
git status                              # Check uncommitted changes
html5validator --root . --match="*.html" # Validate HTML (if available)
```

This ensures complete methodology documentation for template replication and team scaling.

## 🔧 Key Integration Points

### Project Dashboard (`/dojjjo-dashboard.html`)
- Unified project control with direct access to all OMVP strategy files
- One-click service account access (GitHub, Claude, Gmail, Brevo, Analytics, Netlify)
- Real-time project health metrics and development progress tracking

### Netlify Deployment (`netlify.toml`)
- Clean URL routing for professional funnel navigation
- Security headers and performance optimization
- Static site publishing from root directory

### File Upload System
- High-intent behavior validation through worksheet file uploads
- Integration with OMVP submission flow for $5K service qualification
- Error handling and fallback tracking for conversion optimization

### Extended Strategy Documentation
- **Primary CLAUDE.md**: This file - main project guidance
- **Extended CLAUDE.md**: `/omvp/strategy/CLAUDE.md` - detailed client delivery guidance
- **Complete Strategy Suite**: 25+ files in `/omvp/strategy/` covering all aspects
- **Methodology Prompts**: `/omvp/strategy/prompts.md` - complete LLM prompt engineering

### Testing & Validation Commands
```bash
# Test critical user journeys
open "index.html"                       # Main landing → worksheet funnel
open "48-hour-worksheet/worksheet.html" # Worksheet completion flow
open "omvp/submit.html"                 # High-intent service submission

# Validate email automation
open "omvp/omvp-email-template-viewer.html"       # Email template preview system
open "assets/js/brevo-config.js"        # Email integration configuration

# Check analytics implementation
open "assets/js/analytics-enhanced.js"  # GA4 conversion tracking
# Expected events: email_captured ($50), worksheet_completed ($200), omvp_submitted ($5000)
```