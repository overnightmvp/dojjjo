# Brevo Email Integration Setup Guide

This guide walks you through setting up Brevo (formerly SendinBlue) email integration for the DOJJJO brutal consultant funnel.

## 🔧 Quick Setup Steps

### 1. Get Brevo API Key
1. Sign up at [Brevo.com](https://www.brevo.com) (free plan includes 300 emails/day)
2. Go to Settings → API Keys → Create New API Key
3. Copy your API key

### 2. Create Contact Lists
Create these lists in your Brevo dashboard:
- **Worksheet Subscribers** (for 48-hour worksheet leads)
- **OMVP High Intent** (for $5K submission form leads)
- **General Leads** (optional - for newsletter/updates)

### 3. Create Email Templates
Create these transactional email templates:

#### Template 1: Worksheet Delivery
**Subject:** Your 48-Hour Worksheet Has Arrived ⚡
**Content:** Welcome email with worksheet access link
**Variables:** WORKSHEET_URL

#### Template 2: OMVP Submission Confirmation
**Subject:** Your OMVP Submission Received - Next Steps
**Content:** Confirmation email with handoff call scheduling
**Variables:** BREAKING_POINT, COMPETITORS, TIMELINE, CONTACT_INFO

#### Template 3: Handoff Call Scheduled (Optional)
**Subject:** Your 15-Minute Handoff Call Is Scheduled
**Content:** Calendar reminder and preparation instructions

### 4. Update Configuration
Edit `/assets/js/brevo-config.js` with your actual values:

```javascript
const BREVO_CONFIG = {
    // Replace with your actual API key
    API_KEY: 'xkeysib-your-actual-api-key-here',
    
    // Replace with your actual list IDs
    LISTS: {
        WORKSHEET_SUBSCRIBERS: 123,    // Your worksheet list ID
        OMVP_HIGH_INTENT: 456,        // Your OMVP list ID  
        GENERAL_LEADS: 789             // Your general list ID
    },
    
    // Replace with your actual template IDs
    TEMPLATES: {
        WORKSHEET_DELIVERY: 101,       // Your worksheet template ID
        OMVP_SUBMISSION_CONFIRM: 102,  // Your OMVP confirmation template ID
        HANDOFF_CALL_SCHEDULED: 103    // Your handoff template ID
    }
};
```

## 📧 Email Flow Overview

### Worksheet Funnel
1. User enters email on 48-hour worksheet landing page
2. Contact added to "Worksheet Subscribers" list
3. Transactional email sent with worksheet access
4. User completes worksheet
5. If they submit for OMVP, moved to "High Intent" list

### OMVP Submission Funnel
1. User submits completed worksheet + $5K form
2. Contact added to "OMVP High Intent" list with detailed attributes
3. Confirmation email sent with next steps
4. Manual follow-up for handoff call scheduling

## 🎯 Advanced Features

### Contact Attributes Captured
- **Email & Basic Info:** Email, first name, timestamp
- **Source Tracking:** Landing page, form type, funnel stage
- **Intent Level:** Worksheet request vs. high-value submission
- **OMVP Details:** Breaking point, competitors, timeline, budget
- **Behavioral Data:** Completion status, engagement level

### Automation Opportunities
1. **Worksheet Follow-up Sequence:** If user doesn't complete worksheet in 48 hours
2. **OMVP Nurture Sequence:** For high-intent leads who don't immediately book calls
3. **Segmented Content:** Different emails based on completion status
4. **Re-engagement Campaigns:** Win back inactive subscribers

## 🔍 Testing Your Setup

### Test Worksheet Form
1. Go to your 48-hour worksheet landing page
2. Enter a test email address
3. Check that:
   - Contact appears in Brevo dashboard
   - Welcome email is delivered
   - User can access worksheet

### Test OMVP Submission
1. Complete the worksheet process
2. Submit the OMVP form with test data
3. Check that:
   - Contact appears in high-intent list
   - Confirmation email is sent
   - All form data is captured in contact attributes

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

### Conversion Rates
- **Worksheet Email Capture:** 40-60% (industry benchmark for valuable lead magnets)
- **Worksheet Completion:** 20-30% (complex forms typically see lower completion)
- **OMVP Submission:** 2-5% of worksheet completers (high-intent, high-value conversion)

### Email Performance
- **Welcome Email Open Rate:** 60-80% (transactional emails perform well)
- **Click-Through Rate:** 15-25% (depends on worksheet accessibility)
- **OMVP Confirmation:** 80-90% open rate (high-intent, immediate follow-up)

## 🔧 Troubleshooting

### Common Issues
1. **API Key Invalid:** Double-check key format and permissions
2. **List ID Wrong:** Verify list IDs in Brevo dashboard match config
3. **Template Variables:** Ensure template variable names match exactly
4. **CORS Errors:** Brevo API should work cross-origin, check network tab for details

### Debug Mode
Add this to your console to test Brevo integration:
```javascript
// Test contact creation
sendToBrevo('test@example.com', {SOURCE: 'test'}, [BREVO_CONFIG.LISTS.WORKSHEET_SUBSCRIBERS]);

// Test email sending
sendBrevoEmail('test@example.com', BREVO_CONFIG.TEMPLATES.WORKSHEET_DELIVERY, {WORKSHEET_URL: 'test'});
```

---

**🎯 Bottom Line:** This setup captures every lead, segments by intent level, and automates immediate follow-up for maximum conversion. The brutal consultant funnel now has professional email automation backing it up.