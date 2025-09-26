# 🚀 Growplate - Restaurant QR Ordering System

## ⚡ Quick Start (5 minutes)
1. **Clone**: `git clone https://github.com/overnightmvp/growplate.git`
2. **Setup**: Follow `PROJECT-MANAGEMENT/SETUP-GUIDE.md`
3. **Develop**: Use `PROJECT-MANAGEMENT/WORKTREE-GUIDE.md` for parallel development
4. **Track**: Update `PROJECT-MANAGEMENT/TASK-TRACKER.md` every 15 minutes

## 🎯 Project Status
- **Current Phase**: Foundation Setup (Week 1)
- **Completed Tasks**: 0/32
- **Active Worktrees**: 0/4
- **Estimated Completion**: 4 days

## 🏗️ Architecture
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Database**: Supabase (PostgreSQL + Real-time)
- **CMS**: Sanity.io (Menu Management)
- **Deployment**: Vercel
- **Notifications**: Twilio SMS

## 🎬 Project Vision
**Growplate** transforms restaurant ordering with a commission-free QR code system that:
- **Customers**: Scan QR → Browse Menu → Order → Pay with Staff
- **Servers**: Receive real-time notifications → Manage orders → Update status
- **Owners**: Manage menus via CMS → Track analytics → Save on fees

## 💰 Business Model
- **Target**: Small-medium restaurants frustrated with high commission fees
- **Pricing**: Flat $500 AUD/month (vs 1.6-2.6% transaction fees)
- **Value Prop**: Eliminate commissions + increase order value via automated upsells

## 🚀 MVP Scope (32 Tasks × 15 Minutes)
### Phase 1: Foundation (5 tasks)
- F1: Initialize Next.js project
- F2: Clean project structure  
- F3: Database schema setup
- F4: Environment configuration
- F5: Create worktrees

### Phase 2: Parallel Development (24 tasks)
- **Customer App** (C1-C8): QR ordering interface
- **Server App** (S1-S8): Staff order dashboard  
- **Admin CMS** (A1-A8): Menu management system

### Phase 3: Integration (8 tasks)
- I1-I8: Merge worktrees + deployment + testing

## 🔗 Quick Links
- [Setup Guide](PROJECT-MANAGEMENT/SETUP-GUIDE.md)
- [Task Breakdown](DOCUMENTATION/02-DEVELOPMENT-GUIDES/)
- [API Keys Required](PROJECT-MANAGEMENT/API-KEYS-TEMPLATE.md)
- [Deployment Checklist](PROGRESS-TRACKING/deployment-checklist.md)
- [Worktree Workflow](PROJECT-MANAGEMENT/WORKTREE-GUIDE.md)

## 🛠️ Development Commands
```bash
# Quick setup
chmod +x DEVELOPMENT/worktree-commands.sh
./DEVELOPMENT/worktree-commands.sh

# Start development
cd ../growplate-[foundation|customer|server|admin]
npm run dev

# Track progress
# Update TASK-TRACKER.md every 15 minutes
```

## 🏆 Success Criteria
- **Technical**: Complete order flow from QR scan to kitchen notification
- **Business**: Demonstrate 30%+ cost savings vs commission-based systems  
- **User Experience**: Sub-30 second ordering time, 99% uptime
- **Timeline**: Production-ready MVP in 4 days

## 📞 Team & Support
- **Technical Lead**: [Your Name]
- **Repository**: https://github.com/overnightmvp/growplate
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Documentation**: All guides in `/DOCUMENTATION/` directory

---

**Last Updated**: $(date)  
**Version**: v0.1.0-alpha  
**Status**: 🚧 Under Development