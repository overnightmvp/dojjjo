# 🔄 LEAD ROUTING SYSTEM SETUP

## System Overview

**Goal**: Automatically route qualified emergency AC leads from landing page to contracted HVAC companies
**Process**: Form submission → Qualification → Routing → Tracking → Payment

---

## Phase 1: Simple Manual Routing (Week 1)

### Tools Needed:
- **Form Processing**: Formspree (free plan for testing)
- **Email Notifications**: Gmail/Outlook
- **Lead Tracking**: Google Sheets
- **Phone System**: Google Voice number

### Setup Steps:

#### 1. Formspree Configuration
```html
<!-- Update form action in landing page -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="emergency-form">
```

**Formspree Settings**:
- ✅ Email notifications enabled
- ✅ reCAPTCHA enabled (spam protection)
- ✅ Custom thank you page redirect
- ✅ JSON responses for AJAX submission

#### 2. Email Template Setup
**Subject**: 🚨 NEW EMERGENCY AC LEAD - [Urgency Level] - Phoenix

**Body**:
```
NEW EMERGENCY AC REPAIR LEAD
============================

Customer Information:
- Name: [Name]
- Phone: [Phone]  
- Address: [Address]
- Issue: [Issue Description]
- Urgency: [Urgency Level]
- Preferred Contact Time: [Time]

Lead Details:
- Timestamp: [Date/Time]
- Source: Emergency AC Landing Page
- Location: Phoenix Metro Area
- Lead ID: [Auto-generated]

Next Steps:
1. Call customer within 10 minutes
2. Verify service area and availability  
3. Book appointment if qualified
4. Confirm lead details in tracking sheet

CONTRACTOR: [Assigned Company Name]
```

#### 3. Lead Tracking Spreadsheet
**Google Sheets Columns**:
- Date/Time
- Lead ID  
- Customer Name
- Phone Number
- Address/Zip
- Issue Type
- Urgency Level
- Assigned Contractor
- Contact Attempts
- Appointment Booked (Y/N)
- Service Completed (Y/N)
- Lead Fee Charged ($75)
- Notes

---

## Phase 2: Semi-Automated Routing (Week 2-4)

### Tools Addition:
- **Zapier** (Starter plan: $20/month)
- **CallRail** (phone tracking: $45/month)
- **ConvertKit** (email automation: $29/month)

### Enhanced Process:

#### 1. Zapier Automation Flow
```
Trigger: New Formspree Submission
↓
Filter: Verify Phoenix Metro Area
↓
Action 1: Create Google Sheets Row
↓
Action 2: Send Email to Assigned Contractor
↓
Action 3: Send SMS to Contractor (urgent leads)
↓
Action 4: Add to ConvertKit for follow-up
```

#### 2. Contractor Assignment Logic
**Round-Robin System**:
- Contractor A: Monday, Thursday, Sunday
- Contractor B: Tuesday, Friday
- Contractor C: Wednesday, Saturday

**Priority Override**:
- "IMMEDIATE" urgency → Contractor with fastest response time
- Off-hours leads → 24/7 contractor (if available)
- Service area mismatch → Redirect to appropriate contractor

#### 3. Phone Tracking Setup
**CallRail Configuration**:
- Unique tracking number for each contractor
- Call recording enabled (with consent)
- Lead source attribution
- Conversion tracking to landing page

---

## Phase 3: Advanced CRM Integration (Month 2+)

### Tools Addition:
- **HubSpot CRM** (free tier) or **Pipedrive** ($15/month)
- **Twilio** (SMS automation: $5/month)
- **Custom webhook** (developer setup)

### Advanced Features:

#### 1. Lead Scoring Algorithm
```javascript
Lead Score Calculation:
- Urgency "IMMEDIATE": +50 points
- Issue "No cold air": +30 points  
- Preferred time "Right now": +20 points
- Phoenix zip code match: +10 points
- Homeowner status verified: +10 points

Score 100+: Hot lead (immediate routing)
Score 80-99: Warm lead (route within 1 hour)  
Score 60-79: Qualified lead (route within 4 hours)
Score <60: Unqualified (add to nurture sequence)
```

#### 2. Multi-Channel Notifications
**Hot Leads (Score 100+)**:
- Instant SMS to contractor
- Phone call if no response in 5 minutes
- Email backup notification
- WhatsApp message (if contractor prefers)

**Standard Leads**:
- Email notification within 2 minutes
- SMS backup after 10 minutes
- Follow-up email after 1 hour if no response

#### 3. Performance Tracking Dashboard
**Key Metrics**:
- Leads generated per day/week/month
- Response times by contractor
- Conversion rates (lead → appointment → service)
- Revenue per contractor
- Lead quality scores
- Customer satisfaction ratings

---

## Quality Control System

### Lead Qualification Criteria:
✅ **Geographic**: Phoenix metro area (verified by zip code)
✅ **Property Type**: Single-family home or townhome (no apartments)
✅ **Issue Type**: AC completely broken (not maintenance)
✅ **Urgency**: Needs service within 24 hours
✅ **Decision Maker**: Homeowner or spouse (not renter)

### Rejection Criteria:
❌ Outside service area
❌ Rental property maintenance issue
❌ Non-emergency requests (routine maintenance)
❌ Commercial property
❌ Obvious spam/fake submission

### Quality Assurance Process:
1. **Auto-verification**: Zip code, phone format, email format
2. **Manual review**: Unclear issues or edge cases
3. **Contractor feedback**: Quality rating for each lead
4. **Customer follow-up**: Satisfaction survey (optional)

---

## Billing & Payment Automation

### Invoice Generation:
- **Billing Cycle**: Weekly (every Friday)
- **Invoice Items**: Number of qualified leads × $75
- **Payment Terms**: Net 15 days
- **Late Fee**: 1.5% per month after 30 days

### Payment Tracking:
```
Lead ID | Date | Contractor | Amount | Invoice # | Paid Date | Status
L001    | 4/15 | AirZona    | $75    | INV-001   | 4/20      | Paid
L002    | 4/15 | Desert Air | $75    | INV-002   | Pending   | Due 4/30
```

### Automated Billing Tools:
- **QuickBooks Online** ($15/month) for invoicing
- **Stripe** (2.9% per transaction) for payment processing
- **ACH transfers** (0.8% fee) for regular contractors

---

## Backup & Redundancy Systems

### System Failures Planning:
- **Formspree down**: Backup contact form with Netlify Forms
- **Email delivery issues**: SMS notifications as backup
- **Contractor unreachable**: Round-robin to next available
- **Website down**: Google My Business contact form

### Data Backup:
- **Google Sheets**: Auto-backup to Google Drive
- **Customer data**: Export weekly to secure cloud storage
- **System configuration**: Document all integrations and settings

---

## Success Metrics & KPIs

### Operational Metrics:
- **Response Time**: Target <10 minutes for hot leads
- **Lead Quality**: Target 80%+ conversion to appointments
- **System Uptime**: Target 99.5% availability
- **Customer Satisfaction**: Target 4.5+ stars

### Business Metrics:
- **Monthly Leads**: Target 100+ qualified leads
- **Revenue Per Lead**: $75 (fixed)
- **Gross Margin**: Target 65%+ (after ad costs)
- **Contractor Retention**: Target 90%+ monthly retention

### Growth Metrics:
- **Lead Volume Growth**: Target 20% month-over-month
- **New Contractors**: Target 1-2 new partners monthly
- **Market Expansion**: Add Tucson by month 6

**Next Action**: Set up Phase 1 system this week, then iterate based on lead volume and contractor feedback.