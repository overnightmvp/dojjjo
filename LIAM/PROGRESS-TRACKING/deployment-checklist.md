# 🚀 Production Deployment Checklist

## 📋 Pre-Deployment Validation

### ✅ Code Quality & Testing
- [ ] All 32 tasks completed and marked ✅ in `TASK-TRACKER.md`
- [ ] All worktrees merged into main branch successfully
- [ ] No TypeScript errors: `npm run type-check` passes in all worktrees
- [ ] No ESLint warnings: `npm run lint` passes with no issues
- [ ] Production build succeeds: `npm run build` completes without errors
- [ ] All critical user flows tested manually:
  - [ ] QR scan → Menu display → Add to cart → Place order
  - [ ] Server receives real-time order notification  
  - [ ] Order status can be updated through workflow
  - [ ] Bill request notification works
  - [ ] Admin can manage menu items via CMS

### ✅ Database Verification (Supabase Production)  
- [ ] Production Supabase project created and configured
- [ ] All tables created with correct schema (see `DATABASE-SCHEMA.md`)
- [ ] Row Level Security (RLS) policies configured appropriately
- [ ] Sample restaurant and menu data populated for testing
- [ ] Database indexes created for performance
- [ ] Real-time subscriptions enabled and tested
- [ ] Analytics triggers and functions deployed
- [ ] Database backup schedule configured

### ✅ Environment Configuration
- [ ] Production API keys configured in Vercel dashboard:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL` (production instance)
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` (production key)
  - [ ] `SUPABASE_SERVICE_ROLE_KEY` (production service key)
  - [ ] `TWILIO_ACCOUNT_SID` (production account)
  - [ ] `TWILIO_AUTH_TOKEN` (production token)
  - [ ] `TWILIO_PHONE_NUMBER` (production phone number)
  - [ ] `NEXT_PUBLIC_SITE_URL` (production domain)
  - [ ] `NEXTAUTH_SECRET` (generated for production)
- [ ] All environment variables validated and tested
- [ ] CORS settings verified for production domain
- [ ] Rate limiting configured if needed
- [ ] SSL certificate active and valid

### ✅ Content Management (Sanity.io)
- [ ] Production Sanity project configured
- [ ] Menu item schema deployed and tested
- [ ] Sanity Studio deployed and accessible to restaurant owners
- [ ] Sample menu content created and published
- [ ] API tokens configured with appropriate permissions
- [ ] Content delivery optimization enabled

### ✅ Deployment Infrastructure (Vercel)
- [ ] Vercel project linked to GitHub repository  
- [ ] Auto-deployment configured from `main` branch
- [ ] Build settings optimized for production
- [ ] Custom domain connected (if applicable)
- [ ] CDN configuration optimized
- [ ] Analytics and monitoring enabled

---

## 🔄 Deployment Process

### Phase 1: Pre-deployment Testing (30 minutes)
```bash
# 1. Final integration testing in main branch
cd growplate
git checkout main

# Ensure all worktrees are merged
git merge foundation
git merge customer-app  
git merge server-app
git merge admin-cms

# 2. Final build verification
npm install
npm run build
npm run lint  
npm run type-check

# 3. Test database connectivity
# Visit /test-connection page and verify all services

# 4. Manual smoke testing
npm run start  # Test production build locally
# Test complete user journey: QR → Order → Notification → Status Update
```

### Phase 2: Production Deployment (15 minutes)
```bash
# 1. Final commit and push
git add .
git commit -m "🚀 Production deployment

✅ All 32 tasks completed
✅ Full integration testing passed  
✅ Database schema deployed
✅ Environment variables configured
✅ Manual testing completed

Ready for production deployment!"

git push origin main

# 2. Deploy to Vercel production
vercel --prod

# 3. Verify deployment
vercel inspect [deployment-url]
vercel logs --follow
```

### Phase 3: Post-deployment Verification (15 minutes)
```bash
# 1. Test production URL
curl -I [production-url]  # Should return 200 OK
curl [production-url]/api/health  # Should return API status

# 2. Database connectivity test
# Visit [production-url]/test-connection
# Verify database connection and sample data loading

# 3. Complete user journey test
# Use a real QR code → test full ordering flow on actual mobile device

# 4. Real-time functionality test
# Place order from customer app → verify server receives notification
# Update order status → verify real-time updates work

# 5. SMS notification test (if configured)
# Trigger test SMS to verify Twilio integration
```

---

## 🚨 Rollback Procedures

### Emergency Rollback Plan
```bash
# Option 1: Vercel rollback (fastest)
vercel rollback [previous-deployment-id]

# Option 2: Git revert
git revert HEAD
git push origin main
# Wait for auto-deployment

# Option 3: Manual restore
# Redeploy from known-good commit
git checkout [known-good-commit]
vercel --prod
```

### Database Rollback
```sql
-- If database changes need to be reverted
-- Restore from backup (Supabase automatic backups)
-- Or run migration rollback scripts

-- Disable problematic features temporarily
UPDATE menu_items SET is_available = false WHERE [condition];
UPDATE restaurants SET is_active = false WHERE [test-condition];
```

---

## 📊 Performance Monitoring

### Key Metrics to Monitor (First 24 Hours)
- **Page Load Time**: < 2 seconds for menu display
- **API Response Time**: < 500ms for order submission
- **Database Response**: < 100ms for menu queries  
- **Real-time Latency**: < 1 second for order notifications
- **Error Rate**: < 1% for all API endpoints
- **Uptime**: > 99.9% availability

### Monitoring Tools Setup
- [ ] **Vercel Analytics**: Enabled for performance tracking
- [ ] **Supabase Dashboard**: Monitor database performance  
- [ ] **Uptime Monitoring**: Set up external monitoring (UptimeRobot, etc.)
- [ ] **Error Tracking**: Configure Sentry or similar (optional)
- [ ] **Real User Monitoring**: Track actual user performance

### Alert Configuration
- [ ] Database connection failures → Immediate email alert
- [ ] API error rate > 5% → Alert within 5 minutes  
- [ ] Site downtime > 1 minute → Immediate SMS alert
- [ ] Order processing failures → Immediate notification

---

## 🎯 Go-Live Validation Tests

### Critical Path Testing (Must Pass)
1. **QR Code Access**:
   - [ ] Scan QR code → Loads correct restaurant and table
   - [ ] Menu displays correctly with all categories
   - [ ] Images load properly on mobile devices

2. **Order Placement**:
   - [ ] Add items to cart → Cart updates correctly
   - [ ] Modify quantities → Totals recalculate
   - [ ] Submit order → Saves to database with correct data
   - [ ] Order confirmation displays → Correct order details

3. **Staff Notifications**:
   - [ ] Server dashboard receives new order immediately  
   - [ ] Order details display correctly
   - [ ] Status updates work (Pending → Preparing → Ready)
   - [ ] Real-time updates appear without page refresh

4. **Bill Processing**:
   - [ ] Customer requests bill → Server receives notification
   - [ ] Server can mark bill as processed
   - [ ] Process completes without errors

### Performance Testing
- [ ] **Load Test**: 10 concurrent orders process successfully
- [ ] **Mobile Performance**: Fast loading on 3G connection
- [ ] **Database Stress**: Multiple simultaneous menu queries
- [ ] **Real-time Scale**: 5+ connected clients receive updates

### Security Testing
- [ ] **SQL Injection**: API endpoints reject malicious input
- [ ] **XSS Protection**: User inputs are sanitized
- [ ] **Rate Limiting**: Excessive requests are throttled
- [ ] **Environment Secrets**: No secrets exposed in client code

---

## 📞 Go-Live Support Team

### Roles & Responsibilities
- **Technical Lead**: [Name] - Overall deployment coordination
- **Database Admin**: [Name] - Supabase monitoring and optimization  
- **Frontend Developer**: [Name] - Customer app and UI issues
- **Backend Developer**: [Name] - API and server-side issues
- **Restaurant Owner**: [Name] - Business testing and feedback

### Communication Channels
- **Primary**: Slack #deployment-live
- **Emergency**: Phone tree for critical issues
- **Status Updates**: Discord #growplate-status
- **Documentation**: This checklist + GitHub Issues

### Support Schedule (First 48 Hours)
- **Hours 0-8**: Full team on standby
- **Hours 8-24**: Rotating coverage (4-hour shifts)
- **Hours 24-48**: Business hours coverage + on-call

---

## 🔍 Post-Launch Review

### Success Criteria (24-Hour Review)
- [ ] **Uptime**: > 99% availability achieved
- [ ] **User Experience**: No critical user journey failures
- [ ] **Performance**: All key metrics within targets
- [ ] **Error Rate**: < 2% across all endpoints
- [ ] **Customer Feedback**: No major usability complaints
- [ ] **Staff Adoption**: Restaurant staff can operate system independently

### Day 7 Review Metrics
- [ ] **Orders Processed**: Track total successful orders
- [ ] **System Stability**: Monitor error patterns and frequency
- [ ] **Performance Trends**: Identify any degradation over time
- [ ] **User Feedback**: Collect and analyze user experience feedback
- [ ] **Cost Analysis**: Verify infrastructure costs vs projections

### Documentation Updates
- [ ] Update troubleshooting guide with any new issues discovered
- [ ] Document any deployment process improvements
- [ ] Update monitoring and alerting based on real usage patterns
- [ ] Create post-mortem document if any issues occurred

---

## ✅ Final Sign-off

### Technical Sign-off
- [ ] **Lead Developer**: All code quality checks passed ✅
- [ ] **Database Admin**: Production database fully configured ✅  
- [ ] **DevOps**: Deployment pipeline and monitoring active ✅
- [ ] **QA**: All critical paths tested and verified ✅

### Business Sign-off  
- [ ] **Product Owner**: Feature completeness verified ✅
- [ ] **Restaurant Partner**: Live testing completed successfully ✅
- [ ] **Stakeholder**: Ready for customer traffic ✅

### Final Deployment Authorization
**Authorized by**: ___________________  
**Date & Time**: ___________________  
**Deployment URL**: ___________________  
**Rollback Contact**: ___________________  

---

## 🎉 Post-Deployment Success

### Immediate Actions (First Hour)
1. Monitor all alerts and metrics dashboards
2. Test complete user journey one final time
3. Verify real-time functionality is working  
4. Confirm SMS notifications are sending (if configured)
5. Check Vercel deployment logs for any warnings

### Communication
- [ ] Notify all stakeholders of successful deployment
- [ ] Update project status in tracking systems
- [ ] Share production URLs with authorized users
- [ ] Schedule 24-hour check-in meeting

### Next Steps
- [ ] Monitor performance metrics for first 24 hours
- [ ] Collect initial user feedback
- [ ] Plan any immediate optimizations needed
- [ ] Begin planning next iteration features

---

**Deployment Version**: v1.0  
**Checklist Last Updated**: $(date)  
**Estimated Total Deployment Time**: 60 minutes  
**Team Size Required**: 2-3 people  
**Rollback Time**: < 5 minutes if needed  

🚀 **Ready for production deployment!**