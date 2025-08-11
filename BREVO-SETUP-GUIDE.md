# Brevo Email Integration Setup Guide

🚀 **NEW**: Use the [Email Template Viewer](/email-template-viewer.html) for easy copy-paste of all 11 Gmail-compatible templates to Brevo!

This guide walks you through setting up Brevo (formerly SendinBlue) email integration for the DOJJJO hybrid business model with complete email automation for both lead generation and $5K OMVP service delivery.

## 🔧 Quick Setup Steps

### 1. Get Brevo API Key
1. Sign up at [Brevo.com](https://www.brevo.com) (free plan includes 300 emails/day)
2. Go to Settings → API Keys → Create New API Key
3. Copy your API key

### 2. Create Contact Lists
Create these lists in your Brevo dashboard:
- **Worksheet Subscribers** (for 48-hour worksheet leads - W01-W05 sequence)
- **OMVP High Intent** (for $5K service clients - O01-O06 sequence)  
- **General Leads** (optional - for newsletter/updates)

💡 **Pro Tip**: Use the [Email Template Viewer](/email-template-viewer.html) to see exactly which templates belong to which sequences!

### 3. Create Email Templates

🎯 **Quick Setup**: Use the [Email Template Viewer](/email-template-viewer.html) to copy all 11 Gmail-compatible templates with one click!

#### 📝 Worksheet Series (W01-W05) - Lead Generation
- **W01 - Worksheet Delivery**: Your 48-Hour Worksheet Has Arrived ⚡
- **W02 - The Why**: I've Been There. And It Sucks.
- **W03 - The How**: The One Question That Saves You 6 Months
- **W04 - The Offer**: Ready to Skip the Work? Get an Overnight MVP.
- **W05 - Final Push**: Your Competitors Aren't Waiting

#### 🚀 OMVP Series (O01-O06) - $5K Service Delivery
- **O01 - Welcome**: Welcome to Your Overnight MVP Journey 🚀
- **O02 - Onboarding**: Project Kickoff - Your System Architecture 🔧
- **O03 - Week 1 Report**: Week 1 Performance Report - Your MVP is Live 📊
- **O04 - Week 2 Report**: Week 2 Performance Report - Growth Acceleration 📈
- **O05 - Completion**: Project Complete - Your Business System is Optimized ✅
- **O06 - Referral**: Help Others Succeed (And Get Rewarded) 🤝

**Complete template specifications with Gmail compatibility**: [`/omvp/strategy/BREVO-TEMPLATES.md`](/omvp/strategy/BREVO-TEMPLATES.md)

### 4. Update Configuration
Edit `/assets/js/brevo-config.js` with your actual values:

```javascript
const BREVO_CONFIG = {
    // Replace with your actual API key
    API_KEY: 'xkeysib-your-actual-api-key-here',
    
    // Replace with your actual list IDs
    LISTS: {
        WORKSHEET_SUBSCRIBERS: 123,    // Your worksheet list ID
        OMVP_HIGH_INTENT: 456,        // Your OMVP client list ID  
        GENERAL_LEADS: 789             // Your general list ID
    },
    
    // Replace with your actual template IDs (all 11 templates)
    TEMPLATES: {
        // Worksheet Series (W01-W05)
        W01_WORKSHEET_DELIVERY: 101,
        W02_THE_WHY: 102,
        W03_THE_HOW: 103,
        W04_THE_OFFER: 104,
        W05_FINAL_PUSH: 105,
        
        // OMVP Service Series (O01-O06)
        O01_WELCOME: 201,
        O02_ONBOARDING: 202,
        O03_WEEK_1_REPORT: 203,
        O04_WEEK_2_REPORT: 204,
        O05_COMPLETION: 205,
        O06_REFERRAL_UPSELL: 206
    }
};
```

## 📧 Email Flow Overview

### 📝 Worksheet Lead Generation Funnel (W01-W05)
1. User enters email on `/48-hour-worksheet/index.html`
2. **W01** - Worksheet delivery email with access link
3. **W02** - Personal story and credibility building (Day 1)
4. **W03** - Educational content and methodology (Day 3)
5. **W04** - $5K OMVP service offer introduction (Day 5)
6. **W05** - Final urgency push and competitor messaging (Day 7)

### 🚀 OMVP Service Delivery Sequence (O01-O06)
1. Client purchases $5K OMVP Complete service
2. **O01** - Welcome and 48-hour timeline setup
3. **O02** - Project kickoff with technical architecture
4. **O03** - Week 1 performance report and metrics
5. **O04** - Week 2 growth acceleration and insights
6. **O05** - Project completion and deliverables handoff
7. **O06** - Referral program and commission opportunities

### 🎯 Automation Triggers
- **Worksheet signup** → W01-W05 sequence (5 emails over 7 days)
- **OMVP purchase** → O01-O06 sequence (6 emails over project lifecycle)
- **Service completion** → Referral program activation

## 🎯 Advanced Features

### Contact Attributes Captured
- **Email & Basic Info:** Email, first name, timestamp
- **Source Tracking:** Landing page, form type, funnel stage  
- **Intent Level:** Lead generation vs. $5K client purchase
- **Service Details:** Project timeline, deliverables, progress status
- **Behavioral Data:** Email engagement, completion status, referral activity

### Advanced Automation Opportunities
1. **Worksheet Completion Tracking**: Behavioral triggers based on worksheet progress
2. **Service Upsells**: Automatic referral program enrollment for completed clients
3. **Performance-Based Sequences**: Dynamic content based on client results
4. **Cross-Sell Opportunities**: Additional services based on client success metrics
5. **Win-Back Campaigns**: Re-engagement for incomplete worksheet users

## 🔍 Testing Your Setup

### Test Worksheet Sequence
1. Go to `/48-hour-worksheet/index.html`
2. Enter a test email address
3. Check that:
   - Contact appears in "Worksheet Subscribers" list
   - W01 delivery email is sent immediately
   - Worksheet access works correctly
   - Sequence timing follows schedule (W02 day 1, W03 day 3, etc.)

### Test OMVP Service Sequence
1. Simulate client purchase (manual list addition)
2. Trigger O01 welcome email
3. Check that:
   - Contact appears in "OMVP High Intent" list
   - Service delivery sequence timing is correct
   - Template variables populate correctly
   - Progress reports reflect actual project status

## 🚨 Important Notes

### CORS Considerations
- Brevo API allows cross-origin requests
- Forms work directly from browser (no server required)
- Error handling ensures forms work even if Brevo fails

### Privacy Compliance
- Users explicitly opt-in by submitting forms
- Clear value proposition for email capture
- Easy unsubscribe process through Brevo

### Error Handling
- Forms continue to work even if Brevo API fails
- Users are never blocked from accessing content
- Console logging for debugging integration issues

## 📊 Expected Results

### Expected Performance Metrics

#### Lead Generation Funnel (W01-W05)
- **Worksheet Email Capture:** 40-60% on landing page
- **Worksheet Completion:** 20-30% of email subscribers  
- **Email Open Rates:** 60-80% (transactional delivery)
- **OMVP Conversion:** 2-5% of completers → $5K clients

#### Service Delivery Sequence (O01-O06)
- **Client Email Engagement:** 80-90% open rates
- **Progress Report CTR:** 25-40% dashboard access
- **Referral Activation:** 15-25% of completed clients
- **Upsell Opportunities:** Based on project success metrics

#### Revenue Impact
- **Monthly Revenue Target:** $15K (3 clients × $5K)
- **Email ROI:** Automation supports client retention and referrals
- **Lifetime Value:** Enhanced through systematic delivery and follow-up

## 🔧 Troubleshooting

### Common Issues
1. **API Key Invalid:** Double-check key format and permissions
2. **List ID Wrong:** Verify list IDs in Brevo dashboard match config
3. **Template Variables:** Ensure template variable names match exactly
4. **CORS Errors:** Brevo API should work cross-origin, check network tab for details

### Debug Mode
Add this to your console to test Brevo integration:
```javascript
// Test worksheet sequence
sendToBrevo('test@example.com', {SOURCE: 'worksheet_test'}, [BREVO_CONFIG.LISTS.WORKSHEET_SUBSCRIBERS]);
sendBrevoEmail('test@example.com', BREVO_CONFIG.TEMPLATES.W01_WORKSHEET_DELIVERY, {WORKSHEET_URL: '/48-hour-worksheet/worksheet.html'});

// Test OMVP client sequence  
sendToBrevo('client@example.com', {SOURCE: 'omvp_client', STATUS: 'active'}, [BREVO_CONFIG.LISTS.OMVP_HIGH_INTENT]);
sendBrevoEmail('client@example.com', BREVO_CONFIG.TEMPLATES.O01_WELCOME, {DASHBOARD_URL: '/omvp-delivery-dashboard.html'});
```

---

## 🚀 Quick Implementation Checklist

- [ ] **Email Template Viewer**: Use [`/email-template-viewer.html`](/email-template-viewer.html) for easy template setup
- [ ] **Template Creation**: Copy all 11 Gmail-compatible templates to Brevo
- [ ] **API Configuration**: Update `/assets/js/brevo-config.js` with your credentials
- [ ] **List Setup**: Create Worksheet Subscribers and OMVP Client lists
- [ ] **Automation Rules**: Configure timing for W01-W05 and O01-O06 sequences
- [ ] **Testing Protocol**: Test both lead generation and service delivery flows
- [ ] **Analytics**: Monitor open rates, CTR, and conversion metrics

---

**🎯 Bottom Line:** Complete email automation supporting $15K/month hybrid business model - lead generation funnel (W01-W05) captures and nurtures prospects, while service delivery sequence (O01-O06) ensures systematic $5K client experience and referral generation.