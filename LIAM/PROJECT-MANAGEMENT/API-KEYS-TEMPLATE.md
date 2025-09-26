# 🔐 Required API Keys & Configuration Checklist

## ✅ Setup Checklist

### 1. Database (Supabase) 🗄️
- [ ] Supabase project created at [supabase.com](https://supabase.com)
- [ ] **Project URL**: `https://[your-project].supabase.co`
- [ ] **Anon Key**: `eyJ0eXAiOiJKV1Qi...` (from Settings > API)
- [ ] **Service Role Key**: `eyJ0eXAiOiJKV1Qi...` (for admin operations)
- [ ] Row Level Security (RLS) enabled on all tables
- [ ] Database tables created (see `DOCUMENTATION/04-API-REFERENCE/DATABASE-SCHEMA.md`)
- [ ] Sample restaurant data populated for testing

### 2. Content Management (Sanity.io) 📝  
- [ ] Sanity.io project created at [sanity.io](https://sanity.io)
- [ ] **Project ID**: `abc123def` (from project settings)
- [ ] **Dataset**: `production` (or `development` for testing)
- [ ] **Read Token**: `sk...` (from Settings > API tokens)
- [ ] **Write Token**: `sk...` (from Settings > API tokens)
- [ ] Studio deployed and accessible
- [ ] Menu item schema configured

### 3. Deployment (Vercel) 🚀
- [ ] Vercel account connected to GitHub at [vercel.com](https://vercel.com)
- [ ] **Vercel Token**: `abc123...` (from Settings > Tokens)
- [ ] Custom domain configured (optional)
- [ ] Environment variables configured in Vercel dashboard
- [ ] Auto-deployment enabled from `main` branch

### 4. Notifications (Twilio) 📱
- [ ] Twilio account created at [twilio.com](https://twilio.com)
- [ ] **Account SID**: `AC123...` (from Console Dashboard)  
- [ ] **Auth Token**: `abc123...` (from Console Dashboard)
- [ ] **Phone Number**: `+1234567890` (purchased Twilio number)
- [ ] SMS service configured for restaurant notifications
- [ ] Test SMS sent successfully

### 5. Optional Services 🎛️
- [ ] **Google Analytics**: `NEXT_PUBLIC_GA_ID`: `G-ABC123`
- [ ] **Clerk Auth**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
- [ ] **SendGrid Email**: `SENDGRID_API_KEY` (for email notifications)
- [ ] **Sentry Error Tracking**: `SENTRY_DSN` (for production monitoring)

## 🔧 Environment File Template

### Development (.env.local)
```bash
# Copy this template to .env.local in your project root
# NEVER commit this file to git!

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1Qi...
SUPABASE_SERVICE_ROLE_KEY=eyJ0eXAiOiJKV1Qi...

# Sanity.io Configuration  
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk...
SANITY_API_WRITE_TOKEN=sk...

# Twilio SMS Configuration
TWILIO_ACCOUNT_SID=AC123...
TWILIO_AUTH_TOKEN=abc123...
TWILIO_PHONE_NUMBER=+1234567890

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-ABC123

# Error Tracking (Optional)
SENTRY_DSN=https://abc123@sentry.io/123456

# Authentication (Optional - Clerk)
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...

# Email Service (Optional - SendGrid)
SENDGRID_API_KEY=SG.abc123...
SENDGRID_FROM_EMAIL=orders@yourrestaurant.com
```

### Production (Vercel Environment Variables)
```bash
# Configure these in Vercel Dashboard > Settings > Environment Variables
# Use PRODUCTION values, not development ones!

NEXT_PUBLIC_SUPABASE_URL=https://your-prod-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1Qi... # Production key
SUPABASE_SERVICE_ROLE_KEY=eyJ0eXAiOiJKV1Qi...     # Production service key

NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
NEXT_PUBLIC_SANITY_DATASET=production              # Use 'production' dataset
SANITY_API_READ_TOKEN=sk...                        # Production read token
SANITY_API_WRITE_TOKEN=sk...                       # Production write token

TWILIO_ACCOUNT_SID=AC123...                        # Production Twilio
TWILIO_AUTH_TOKEN=abc123...                        # Production auth token  
TWILIO_PHONE_NUMBER=+1234567890                    # Production phone number

NEXT_PUBLIC_SITE_URL=https://yourrestaurant.com    # Production domain
NEXTAUTH_SECRET=your-generated-production-secret
NEXTAUTH_URL=https://yourrestaurant.com

NEXT_PUBLIC_GA_ID=G-PROD123                       # Production GA
SENTRY_DSN=https://prod123@sentry.io/456789       # Production Sentry
```

## 🎯 Service Setup Walkthroughs

### Supabase Setup (5 minutes)
1. Go to [supabase.com](https://supabase.com) → "New Project"
2. Choose organization, enter project name: "growplate-[environment]"
3. Choose region closest to your users
4. Generate strong database password
5. Wait for project to provision (~2 minutes)
6. Go to Settings → API → Copy URL and anon key
7. Go to SQL Editor → Run schema from `DATABASE-SCHEMA.md`

### Sanity.io Setup (3 minutes)  
1. Go to [sanity.io](https://sanity.io) → "Create new project"
2. Choose project name: "growplate-cms-[environment]"
3. Choose dataset: "production" for prod, "development" for dev
4. Go to Settings → API → Generate read and write tokens
5. Copy project ID from URL or project settings

### Twilio Setup (5 minutes)
1. Go to [twilio.com](https://twilio.com) → Sign up/Login
2. Go to Console Dashboard → Copy Account SID
3. Go to Settings → Auth Tokens → Copy Primary Token
4. Go to Phone Numbers → Buy a number → Choose SMS-capable number
5. Test SMS: Send test message to your phone

### Vercel Setup (2 minutes)
1. Go to [vercel.com](https://vercel.com) → Connect GitHub
2. Import growplate repository  
3. Configure environment variables from template above
4. Deploy → Copy production URL
5. Configure custom domain if needed

## 🚨 Security Guidelines

### ✅ DO
- Use different API keys for development vs production
- Store production keys only in Vercel environment variables
- Rotate keys regularly (every 90 days minimum)
- Use read-only tokens where possible (Sanity read token for frontend)
- Enable 2FA on all service accounts
- Monitor API usage for unusual activity

### ❌ DON'T  
- Never commit `.env.local` or `.env.production` to git
- Don't use production keys in development
- Don't share API keys in Slack, email, or documentation
- Don't use generic passwords like "password123"
- Don't give write access to frontend applications
- Don't use root/admin tokens for application access

## 🔍 Testing Your Configuration

### Quick Test Script
```bash
# Run this after setting up .env.local
npm run dev
curl http://localhost:3000/api/health

# Test database connection
npm run test:db

# Test SMS sending  
npm run test:sms

# Test CMS connection
npm run test:cms
```

### Manual Testing Checklist
- [ ] Next.js app starts without errors
- [ ] Database connection works (check browser network tab)
- [ ] Can fetch menu items from Supabase
- [ ] Can create/update menu items via Sanity Studio
- [ ] SMS sends successfully to your phone
- [ ] Production deployment builds without errors

## 🆘 Troubleshooting

### "Invalid API key" errors
1. Double-check key copied completely (no extra spaces)
2. Verify you're using the correct environment keys
3. Check service account permissions
4. Try regenerating the key

### Database connection failures
1. Verify Supabase project is not paused
2. Check your IP isn't blocked (Supabase has IP restrictions)
3. Verify database URL includes correct project reference
4. Check RLS policies allow your operations

### SMS not sending
1. Verify Twilio account has sufficient balance
2. Check phone number is SMS-capable
3. Verify phone number format includes country code (+1...)
4. Test with a different destination number

### Deployment issues
1. Check all environment variables are set in Vercel
2. Verify no build errors in Vercel deployment logs
3. Check that secrets match production services
4. Test production API endpoints manually

## 📞 Support Contacts

- **Supabase Support**: [supabase.com/support](https://supabase.com/support)  
- **Sanity.io Help**: [sanity.io/help](https://sanity.io/help)
- **Twilio Support**: [twilio.com/help](https://twilio.com/help)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Security Note**: This checklist contains sensitive information. Store completed version securely and never commit to public repositories.

**Last Updated**: $(date)  
**Configuration Version**: v1.0