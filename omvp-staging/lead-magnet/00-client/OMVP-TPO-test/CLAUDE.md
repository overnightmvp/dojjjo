# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚡ Quick Reference (Use These Daily)

### 🚀 Development Workflow
```bash
# This is a documentation repository - no build system
# Files are organized as templates and planning documents

# Status check
git status

# View HTML files locally (no server needed)
open html/index.html
open html/success.html
open "html/lead magnet/mvp-validation-checklist.html"

# Test bilingual and dark mode functionality
# All HTML files support language toggle (FR/EN) and theme switching

# Commit pattern
git add . && git commit -m "type: description" && git push
```

### 📊 Project Status
- **Type**: The Pitch Office - B2B Tender Consulting Platform (transformed from MVP validation)
- **Stack**: Markdown documentation + Interactive HTML templates with bilingual support
- **Live Example**: https://overnightmvp.netlify.app (original) → The Pitch Office transformation
- **Status**: ✅ Complete transformation with dark mode and bilingual functionality

## 🏗️ Repository Architecture
```
OMVP-TPO-test/
├── master-plan.md              # Sequential generation order guide
├── md-templates/               # Complete documentation templates
│   ├── product_brain.md        # Core product definition
│   ├── customer_journey_blueprint.md  # User experience mapping
│   ├── mvp-validation-checklist.md    # Tender Assessment Framework (8-sprint implementation)
│   ├── README.md               # Project overview
│   ├── setup-guide.md          # Technical setup instructions
│   ├── PROJECT-STATUS.md       # Health dashboard
│   ├── master-plan-flowchart.md # Mermaid.js visualization of generation process
│   ├── customer-journey-flowchart.md # Mermaid.js visualization of user experience
│   └── [other templates]       # Additional strategic documents
├── html/                       # Professional web interfaces and email templates
│   ├── assets/                 # Shared CSS and JS resources
│   │   ├── css/design-system.css    # Brand colors and design tokens
│   │   └── js/                      # Core functionality scripts
│   ├── index.html              # The Pitch Office landing page (bilingual, dark mode)
│   ├── success.html            # Audit booking confirmation (bilingual, dark mode)
│   ├── email template/         # Professional B2B consultation email sequences
│   ├── flowcharts/             # Process visualization HTML files
│   │   ├── master-plan-flowchart.html
│   │   └── customer-journey-flowchart.html
│   └── lead magnet/            # Interactive assessment tools
│       ├── mvp-validation-checklist.html  # Interactive Tender Audit Tool (bilingual, dark mode)
│       └── mvp-validation-checklist.md    # Tender Assessment Framework markdown
├── setup/                      # Configuration and onboarding resources
│   ├── templates/              # Transformation brief templates
│   ├── generated/              # Generated transformation briefs
│   └── examples/               # Reference implementations
├── prompts.md                  # Customer journey of all prompts used
└── CLAUDE.md                   # This file
```

## 🎯 Common Tasks

### Documentation Generation
Follow the sequential order in `master-plan.md`:
1. **product_brain.md** - The Pitch Office Methodology (bilingual core product definition)
2. **customer_journey_blueprint.md** - Client Acquisition Blueprint (bilingual user experience)
3. **mvp-validation-checklist.md** - Tender Assessment Framework (8-sprint implementation)
4. **setup-guide.md** - Strategic Consultation Process (technical setup)

### File Organization
- All strategic documents are in `md-templates/` (transformed to The Pitch Office)
- Professional HTML interfaces are in `html/` (index.html, success.html)
- B2B consultation email templates are in `html/email template/`
- Interactive tools are in `html/lead magnet/` (bilingual tender audit)
- Flowcharts are in `html/flowcharts/` (HTML) and `md-templates/` (Markdown)
- Follow the master plan sequence for any new documentation

### Content Standards
- **Professional B2B Focus**: Sophisticated tender consulting methodology
- **Bilingual Implementation**: Full French/English support across all materials
- **Brutal Honesty**: Focus on practical implementation over theory
- **Specific Metrics**: Include success criteria and performance indicators
- **Expert Positioning**: Audrey's 15+ years expertise, 85% success rate
- **Modern UX**: Dark mode support, responsive design, accessibility standards

### Prompt Engineering
- **See `prompts.md`** for complete customer journey of all 9 prompts used in this project
- **Role-Based Quality**: Use "act as s-tier [role] and brutally honest [expertise]" for consistent high-quality output
- **Progressive Context Building**: Each prompt builds systematically on previous work and decisions
- **Brand Transformation**: Complete system transformation from MVP validation to B2B consulting
- **Technical Excellence**: Frontend debugging, dark mode implementation, bilingual systems
- **User Experience Focus**: Language toggles, theme switching, cross-platform consistency
- **Methodology Documentation**: Document the complete prompt engineering journey for replication
- **Efficiency Focus**: Minimal impact changes that maximize user experience improvements

## 📊 System Context

### Purpose
This is a complete transformation from a 7-Day MVP Validation System to **The Pitch Office** - a sophisticated B2B tender consulting platform. The system evolved from startup education to enterprise consulting, targeting French B2B market with bilingual functionality and dark mode design.

### Key Components
- **Strategic Foundation**: `product_brain.md` - The Pitch Office Methodology (bilingual)
- **Customer Experience**: `customer_journey_blueprint.md` - Client Acquisition Blueprint (bilingual)
- **Assessment Framework**: `mvp-validation-checklist.md` - Tender Assessment Framework
- **Interactive Audit Tool**: `html/lead magnet/mvp-validation-checklist.html` - Bilingual 8-phase tender audit with dark mode
- **Professional Interfaces**: `html/index.html` and `html/success.html` - Bilingual landing and confirmation pages
- **Strategic Consultation**: `setup-guide.md` - B2B consultation process and service delivery

### Business Model Evolution
- **Original**: $497 MVP validation course → 100+ customers, $50k+ revenue
- **Transformed**: €2,500-15,000 B2B consultation tiers with Audrey's 15+ years expertise
- **Target Market**: French B2B companies seeking tender optimization
- **Success Rate**: 85%+ tender win rate with strategic methodology
- **Expected Impact**: 25-40% conversion improvement through professional positioning

### Technical Implementation
- **Design System**: Brand color #F200FF with professional B2B aesthetics
- **Bilingual Support**: Complete French/English toggle with localStorage persistence
- **Dark Mode**: Full theme switching with accessibility standards
- **Responsive Design**: Mobile-first approach with cross-device consistency
- **User Experience**: Seamless language switching, theme persistence, professional interactions
- **Frontend Architecture**: Vanilla JavaScript with CSS custom properties, no build system required
- **Mermaid.js Integration**: ES module imports for flowchart visualization
- **Email Templates**: 5 professional B2B consultation sequences in html/email template/

## 📚 Documentation Index

### Core Templates (md-templates/)
- **[product_brain.md](md-templates/product_brain.md)** - The Pitch Office Methodology (bilingual product definition)
- **[customer_journey_blueprint.md](md-templates/customer_journey_blueprint.md)** - Client Acquisition Blueprint (bilingual user experience)
- **[mvp-validation-checklist.md](md-templates/mvp-validation-checklist.md)** - Tender Assessment Framework (8-sprint implementation)
- **[setup-guide.md](md-templates/setup-guide.md)** - Strategic Consultation Process (B2B service delivery)
- **[PROJECT-STATUS.md](md-templates/PROJECT-STATUS.md)** - Health monitoring dashboard
- **[README.md](md-templates/README.md)** - The Pitch Office overview and quick start

### Planning Documents
- **[master-plan.md](master-plan.md)** - Sequential generation order for all documentation
- **[linkedin_strategy.md](md-templates/linkedin_strategy.md)** - Content marketing approach
- **[prd-strategy.md](md-templates/prd-strategy.md)** - Product requirements methodology

### Implementation Resources
- **[html/index.html](html/index.html)** - The Pitch Office landing page (bilingual, dark mode)
- **[html/success.html](html/success.html)** - Audit booking confirmation page (bilingual, dark mode)
- **[html/email template/](html/email%20template/)** - Professional B2B consultation email sequences
- **[lead magnet/mvp-validation-checklist.html](lead%20magnet/mvp-validation-checklist.html)** - Interactive Tender Audit Tool (bilingual, dark mode)
- **[flowcharts/](flowcharts/)** - Process visualization and user journey maps
- **[master-plan-flowchart.md](master-plan-flowchart.md)** - Mermaid.js visualization of generation process
- **[customer-journey-flowchart.md](customer-journey-flowchart.md)** - Mermaid.js visualization of user experience
- **[prompts.md](prompts.md)** - Complete 9-prompt engineering journey documentation

---

## 🎯 Working with This Repository

### Key Principles
- **Follow the Master Plan**: Use `master-plan.md` for sequential document generation
- **Professional B2B Focus**: The Pitch Office methodology for sophisticated tender consulting
- **Bilingual Excellence**: Complete French/English support across all materials
- **Modern UX Standards**: Dark mode, responsive design, accessibility compliance
- **Brutal Honesty**: Focus on practical implementation over perfection
- **Include Metrics**: Every document should have specific success criteria (85% success rate)
- **Expert Positioning**: Leverage Audrey's 15+ years expertise in all communications
- **Progressive Context Building**: Each deliverable should build systematically on previous work

### When Making Changes
1. Review the relevant template in `md-templates/` (transformed to The Pitch Office)
2. Understand the dependency chain from `master-plan.md`
3. Check visual flowcharts in `md-templates/master-plan-flowchart.md` and `md-templates/customer-journey-flowchart.md`
4. Follow the 9-prompt engineering methodology documented in `prompts.md`
5. Reference HTML touchpoints in `html/flowcharts/` for visual implementation
6. Maintain bilingual support (French/English) across all changes
7. Preserve dark mode and responsive design standards
8. Update cross-references between documents as needed
9. Test language toggle and theme switching functionality
10. Ensure HTML touchpoint links open in new tabs (target="_blank")

### Documentation Standards
- **Professional B2B Language**: Sophisticated, expert-level communication
- **Bilingual Consistency**: Maintain quality across French and English versions
- **Specific Metrics**: Include Audrey's expertise, 85% success rate, €2.5k-15k pricing
- **Technical Excellence**: Modern CSS variables, JavaScript functionality, accessibility
- **Strategic Context**: Position as sophisticated consulting vs. generic validation
- **Actionable Implementation**: Clear tactical steps with professional execution standards

---

## 📊 Latest Updates (Current Session - Figma Plugin Development)

### Figma Prototype Documentation Suite
- **Complete Design System**: Generated comprehensive Figma recreation documentation
- **figma-prototype-guide.md**: Customer journey flow, page specifications, business context
- **figma-components-library.md**: Full component library with foundation elements, responsive specs
- **wireframes-ascii.md**: Visual layout documentation for desktop/mobile with interaction flows

### Plugin Development Planning
- **Technical Architecture**: Evaluated 3 approaches for automated Figma prototype generation
- **Strategic Decision**: Selected custom plugin development (Option 3) for maximum long-term value
- **Automation Pipeline**: MD Documentation → Parser → Figma API → Live Prototype
- **ROI Analysis**: Investment in game-changing automation vs immediate manual recreation

### Documentation Standards Enhanced
- **Prompt Engineering**: Complete customer journey methodology documented in `prompts.md`
- **S-tier Quality**: Maintained brutal honesty and strategic thinking throughout analysis
- **Business Focus**: €50k+ validated model positioning with 85% success rate integration
- **Technical Precision**: Accurate assessment of Figma Plugin API capabilities and limitations

### Project Restructuring (In Progress)
- **Plugin Project**: Moving relevant files to `~/Projects/OMVP-figma-plugin/`
- **MVP Planning**: Ruthlessly prioritized backlog for Claude Code execution
- **Execution Optimization**: Structured for efficient development with best practices

---

*This documentation suite represents a complete transformation from MVP validation to sophisticated B2B tender consulting. The system evolved from a $50k+ revenue-generating framework to The Pitch Office - a professional consultation platform targeting €2.5k-15k B2B engagements with bilingual support, dark mode functionality, and expert positioning. All flowcharts now feature integrated HTML touchpoints and maintain 100% brand consistency across the platform. Treat this as a proven business model transformation with systematic technical implementation.*