#!/bin/bash

# DOJJJO Project Organization Script
# Based on ORGANIZATION-GUIDE.md specifications
# Run this script to ensure proper file organization

echo "🗂️ DOJJJO PROJECT ORGANIZATION SCRIPT"
echo "======================================"
echo ""

# Create archived directory if it doesn't exist
if [ ! -d "archived" ]; then
    mkdir archived
    echo "✅ Created 'archived' directory"
fi

# Move archived files to archived directory (optional - commented out for safety)
echo "📋 FILES TO ARCHIVE (run manually if needed):"
echo "   mv index-OLD-BACKUP.html archived/"
echo "   mv toshio-personal-hub.html archived/"
echo "   mv toshio-landing-long.html archived/"
echo "   mv briefind.md archived/"
echo "   mv prompts.md archived/"
echo "   mv master-plan.md archived/"
echo "   mv templates/ archived/"
echo "   mv md-templates/ archived/"
echo ""

# Display active files structure
echo "✅ ACTIVE FILES STRUCTURE:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo "📁 Core Landing System:"
echo "   ├── index.html (Primary landing)"
echo "   ├── assets/css/design-system.css"
echo "   └── assets/js/core.js"

echo ""
echo "📁 Lead Magnets (2 ONLY):"
echo "   ├── 48-hour-business-blueprint.md"
echo "   ├── studio/lead-magnet-diagnosis/diagnosis.html"
echo "   ├── thank-you-blueprint.html"
echo "   └── thank-you-diagnosis.html"

echo ""
echo "📁 Email Templates (5 sequence):"
echo "   ├── email template/01-welcome.html"
echo "   ├── email template/02-foundation.html"
echo "   ├── email template/03-customer-research.html"
echo "   ├── email template/04-mvp-definition.html"
echo "   └── email template/05-launch-strategy.html"

echo ""
echo "📁 Documentation:"
echo "   ├── CUSTOMER-JOURNEY-OPTIMIZED.md"
echo "   ├── CLAUDE.md"
echo "   └── ORGANIZATION-GUIDE.md"

echo ""
echo "📁 Analytics & Visualization:"
echo "   ├── dashboard/DOJJJO-Dashboard.html"
echo "   ├── flowcharts/customer-journey-flowchart.html"
echo "   └── flowcharts/master-plan-flowchart.html"

echo ""
echo "🗑️ ARCHIVED FILES (moved to archived/):"
echo "   ├── index-OLD-BACKUP.html"
echo "   ├── toshio-personal-hub.html"
echo "   ├── toshio-landing-long.html"
echo "   ├── briefind.md"
echo "   ├── prompts.md"
echo "   ├── master-plan.md"
echo "   ├── templates/"
echo "   └── md-templates/"

echo ""
echo "❌ KILLED LEAD MAGNETS (ignore these):"
echo "   ├── studio/lead-magnet-mvp-validation-checklist/"
echo "   ├── studio/lead-magnet-agent-swarm/"
echo "   ├── studio/lead-magnet-24-hour/"
echo "   ├── studio/lead-magnet-backlog/"
echo "   ├── studio/lead-magnet-brutal-mvp-validation-checklist/"
echo "   └── studio/lead-magnet-omvp-mdgen/"

echo ""
echo "🚨 RULES FOR FUTURE DEVELOPMENT:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "❌ DO NOT ADD:"
echo "   • More landing pages"
echo "   • Additional lead magnets"
echo "   • Complex service tiers"
echo "   • Multi-brand confusion"
echo "   • Bilingual complexity (unless validated)"

echo ""
echo "✅ FOCUS ON:"
echo "   • Single conversion path optimization"
echo "   • Email automation improvement"
echo "   • Booking system enhancement"
echo "   • Payment process streamlining"
echo "   • Testimonial collection"

echo ""
echo "📊 SUCCESS METRICS:"
echo "━━━━━━━━━━━━━━━━━━━"
echo "   • Landing pages: 20%+ email capture rate"
echo "   • Email sequence: 40%+ open rate, 15% booking rate"
echo "   • Discovery calls: 25% close rate"
echo "   • Overall funnel: 1%+ visitor-to-customer conversion"
echo "   • Revenue: $5K average × 4 clients = $20K/month target"

echo ""
echo "🎯 NEXT CRITICAL ACTIONS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Set up email automation (ConvertKit/Mailchimp)"
echo "2. Integrate booking system (Cal.com)"
echo "3. Add payment processing (Stripe)"
echo "4. Configure analytics (GA4 + Hotjar)"
echo "5. Add testimonials to landing page"

echo ""
echo "✅ Organization script complete!"
echo "View your optimized dashboard: open dashboard/DOJJJO-Dashboard.html"