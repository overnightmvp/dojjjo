# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 Project Overview

**DOJJJO** is a hybrid business model combining personal brand credibility with template-driven service delivery. The project evolved from scattered personal brand into systematic OMVP template business targeting $15K/month through disciplined execution and scalable client delivery.

### Current Structure
- **Type**: Hybrid business model - Personal brand + Template service delivery system
- **Stack**: Static HTML + CSS + JavaScript (template-ready, no build system required)
- **Design Philosophy**: iOS-inspired design system with customizable brand variables
- **Revenue Model**: $15K/month hybrid (70% service delivery $10K + 30% personal OMVP $5K)
- **Service Offering**: $5K OMVP Complete - Single focused service delivery
- **Status**: ✅ S-tier UI enhancement complete - Email-style sophisticated components implemented across design system

## 🚀 Common Development Commands

### Local Development
```bash
# No build system - static HTML/CSS/JS template system
# Open files directly in browser for testing

# PERSONAL BRAND SYSTEM
open dojjjo-landing.html           # Primary personal landing page (S-tier UI)
open dashboard/DOJJJO-Dashboard.html  # Portfolio case study & analytics

# LEAD MAGNETS (Dual Purpose: Conversion + Portfolio)
open "lead-magnet/diagnosis/diagnosis.html"  # Assessment tool
# Blueprint is markdown: 48-hour-business-blueprint.md

# EMAIL TEMPLATES (Personal nurture sequence)
open "email template/01-welcome.html"
open "email template/02-foundation.html"
open "email template/03-customer-research.html"

# SERVICE DELIVERY SYSTEM
# Service blueprints are markdown: OMVP-SERVICE-BLUEPRINT.md, OMVP-DELIVERY-CHECKLIST.md

# TEMPLATE DEVELOPMENT WORKSPACE
open "lead-magnet/staging/00-client/OMVP-TPO-test/html/index.html"  # Template development
open "lead-magnet/staging/00-client/WIAD-Ramin/ramin-razy-website.html"  # Client example

# PORTFOLIO SHOWCASE (Lead magnet demonstrations)
open "lead-magnet/staging/lead-magnet-mvp-validation-checklist/landing-page.html"
# Additional portfolio pieces in lead-magnet/staging/lead-magnet-*/
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
dojjjo/ (Hybrid Business Model)
├── 🎯 PERSONAL BRAND SYSTEM/
│   ├── dojjjo-landing.html        # Primary personal landing page (S-tier UI)
│   ├── 48-hour-business-blueprint.md  # Core lead magnet
│   ├── studio/lead-magnet-diagnosis/   # Secondary assessment tool
│   └── email template/            # 5-part personal nurture sequence
├── 🏗️ SERVICE DELIVERY SYSTEM/
│   ├── OMVP-SERVICE-BLUEPRINT.md  # Complete client delivery framework
│   ├── OMVP-DELIVERY-CHECKLIST.md # Operational execution guide
│   ├── studio/setup/              # Template generation system
│   ├── studio/lead-magnet-omvp-mdgen/ # Automated client onboarding
│   └── studio/lead-magnet-*/      # Portfolio showcase tools
├── 🛠️ TEMPLATE INFRASTRUCTURE/
│   ├── assets/css/brutal-design-system.css # Email-style sophisticated components
│   ├── assets/js/core.js              # Universal functionality
│   ├── dashboard/DOJJJO-Dashboard.html # Analytics & portfolio case study
│   ├── flowcharts/                    # Process visualization
│   └── success.html                   # Enhanced confirmation page template
└── 📚 DOCUMENTATION/
    ├── CLAUDE.md                  # This file
    ├── ORGANIZATION-GUIDE.md      # Hybrid model structure guide
    └── master-plan.md             # Strategic implementation roadmap
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
- **Primary Lead Magnet**: `48-hour-business-blueprint.md` - Core OMVP methodology
- **Secondary Assessment**: `studio/lead-magnet-diagnosis/diagnosis.html` - Business validation tool
- **Email Sequence**: 5-part automation in `email template/01-05-*.html`
- **Conversion Goal**: Discovery call bookings for $5K-15K OMVP packages

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
- **Primary Revenue**: $10K/month through OMVP service delivery (70% of total)
- **Service Offering**: Single $5K OMVP Complete service
- **Secondary Revenue**: Personal OMVP services ($5K/month, 30% of total)
- **Target Market**: Entrepreneurs needing systematic business transformation
- **Service Delivery**: 7-day client template transformation with quality gates
- **Template System**: S-tier UI components enabling premium client delivery
- **Success Metrics**: 90%+ client satisfaction, 50%+ template efficiency vs custom builds

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

1. **Update @prompts.md**: Document all prompts used in customer journey style with complete methodology
2. **Update @omvp/strategy/master-plan.md**: If changes affect strategic direction or business model  
3. **Update @omvp/flowcharts/**: If changes impact customer journey or system architecture
4. **Quality Gates**: Ensure all updates align with hybrid business model and $15K/month revenue targets

This ensures complete methodology documentation for template replication and team scaling.