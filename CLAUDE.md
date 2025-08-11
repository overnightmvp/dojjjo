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
# No build system - open files directly in browser
open "index.html"                       # Main personal brand landing
open "48-hour-worksheet/index.html"     # Lead capture funnel
open "omvp/index.html"                  # $5K OMVP service landing

# Project management
open "cpo-dashboard.html"               # Unified project control dashboard

# Email automation testing (requires Brevo setup)
# See BREVO-SETUP-GUIDE.md for configuration
```

### File Organization
```bash
# HTML validation (if html5validator available)
html5validator --root . --match="*.html"

# Check deployment readiness
./organize-project.sh  # If available for file organization
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

Before every deployment, execute as S-tier product owner:

1. **Update `omvp/strategy/prompts.md`**: Document all prompts in customer journey style
2. **Update `omvp/strategy/OMVP-master-plan.md`**: If changes affect strategic direction
3. **Update flowcharts**: If changes impact customer journey or system architecture
4. **Update `cpo-dashboard.html`**: Reflect any new metrics or service accounts
5. **Quality Gates**: Ensure alignment with hybrid business model and $15K/month targets

This ensures complete methodology documentation for template replication and team scaling.

## 🔧 Key Integration Points

### CPO Dashboard (`/cpo-dashboard.html`)
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