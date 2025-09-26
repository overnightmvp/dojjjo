# 🌲 GitHub Worktrees Parallel Development Guide

## 🚀 Quick Setup Commands
```bash
# 1. Clone main repository
git clone https://github.com/overnightmvp/growplate.git
cd growplate

# 2. Run automated setup
chmod +x DEVELOPMENT/worktree-commands.sh
./DEVELOPMENT/worktree-commands.sh

# 3. Verify setup
git worktree list
```

## 📁 Directory Structure After Setup
```
your-workspace/
├── growplate/                  # 📋 Main repo (documentation + coordination)
├── growplate-foundation/       # 🏗️ Foundation setup (F1-F5)
├── growplate-customer/         # 📱 Customer ordering app (C1-C8)
├── growplate-server/          # 🖥️ Server dashboard (S1-S8)
└── growplate-admin/           # ⚙️ Admin CMS (A1-A8)
```

## 🎯 Development Workflow

### Phase 1: Foundation (Sequential) 🏗️
```bash
# Work in foundation worktree only
cd growplate-foundation

# Complete tasks F1-F5 one by one
# F1: Initialize Next.js project (15 min)
# F2: Clean project structure (15 min)  
# F3: Database schema setup (15 min)
# F4: Environment configuration (15 min)
# F5: Create worktrees (15 min)

# After each task:
git add . && git commit -m "Complete task F1: Initialize Next.js project"
git push origin foundation
```

### Phase 2: Parallel Development 🚀
```bash
# Terminal 1: Customer App
cd growplate-customer
git pull origin foundation  # Get foundation changes
npm install                 # Install dependencies
npm run dev                 # Start dev server on :3000

# Work on C1-C8 tasks
git add . && git commit -m "Complete task C1: QR route setup"

# Terminal 2: Server App  
cd growplate-server
git pull origin foundation  # Get foundation changes
npm install
npm run dev                 # Different port (auto-assigned)

# Work on S1-S8 tasks
git add . && git commit -m "Complete task S1: Server dashboard layout"

# Terminal 3: Admin CMS
cd growplate-admin
git pull origin foundation  # Get foundation changes
npm install
npm run dev                 # Different port (auto-assigned)

# Work on A1-A8 tasks
git add . && git commit -m "Complete task A1: Sanity.io setup"

# Terminal 4: Main repo (coordination)
cd growplate
# Update TASK-TRACKER.md
# Monitor progress across all worktrees
# Handle integration planning
```

## 🔄 Integration Workflow (Phase 3)
```bash
# 1. Switch to main repository
cd growplate

# 2. Merge foundation changes first
git checkout main
git merge foundation

# 3. Test foundation integration
npm install
npm run build

# 4. Merge feature branches (resolve conflicts carefully)
git merge customer-app
# Resolve any conflicts, test integration
git merge server-app  
# Resolve any conflicts, test integration
git merge admin-cms
# Resolve any conflicts, test integration

# 5. Final integration testing
npm run build
npm run lint
npm run type-check
# Run end-to-end tests

# 6. Deploy to production
vercel --prod
```

## ✅ Best Practices

### 🔄 Commit Strategy
```bash
# Commit every 15 minutes after task completion
git add .
git commit -m "Complete task [ID]: [Brief description]

- [Specific deliverable achieved]
- [Any notes or blockers resolved]
- [Testing status]

Refs: TASK-TRACKER.md"

git push origin [branch-name]
```

### 📋 Task Management
1. **Before starting**: Update TASK-TRACKER.md status to "🔄 In Progress"
2. **During work**: Document any blockers or discoveries in TASK-TRACKER.md
3. **After completion**: Update status to "✅ Completed" and verify deliverable
4. **If blocked**: Update status to "❌ Blocked" and create GitHub issue

### 🛠️ Development Environment
```bash
# Each worktree runs independently
cd growplate-customer && npm run dev    # Port 3000
cd growplate-server && npm run dev      # Port 3001  
cd growplate-admin && npm run dev       # Port 3002

# Database connections share same Supabase instance
# All worktrees use same .env.local configuration
```

## 🚨 Common Issues & Solutions

### ❌ "Branch already exists"
```bash
git branch -d [branch-name]        # Delete local branch
git push origin --delete [branch-name]  # Delete remote branch
# Then recreate branch and worktree
```

### ❌ "Worktree already exists"  
```bash
git worktree remove ../growplate-[name]  # Remove existing worktree
rm -rf ../growplate-[name]              # Clean up directory
# Then recreate worktree
```

### ❌ Merge conflicts during integration
```bash
# 1. Identify conflicting files
git status

# 2. Edit files to resolve conflicts (look for <<<< ==== >>>> markers)
# 3. Test the resolution
npm run build

# 4. Mark conflicts as resolved
git add [resolved-files]
git commit -m "Resolve merge conflicts between [branch1] and [branch2]"
```

### ❌ Port conflicts during development
```bash
# Kill process on specific port
lsof -ti:3000 | xargs kill -9

# Or specify different port
npm run dev -- --port 3001
```

## 🛠️ Useful Commands
```bash
# Worktree Management
git worktree list                    # Show all worktrees with status
git worktree list --porcelain        # Machine-readable format
git worktree remove ../name          # Remove worktree
git worktree prune                   # Clean up deleted worktrees

# Branch Management  
git branch -a                       # Show all branches (local + remote)
git branch -vv                      # Show tracking information
git push origin [branch]            # Push branch to remote
git branch -d [branch]              # Delete local branch

# Status Across Worktrees
cd growplate && git status           # Main repo status
cd ../growplate-foundation && git status
cd ../growplate-customer && git status  
cd ../growplate-server && git status
cd ../growplate-admin && git status

# Quick worktree switching (use helper scripts)
./switch-to-foundation.sh
./switch-to-customer.sh
./switch-to-server.sh  
./switch-to-admin.sh
```

## 📊 Progress Monitoring
```bash
# Check progress across all worktrees
git worktree list

# View recent commits across branches
git log --oneline --all --graph

# Check which tasks are complete
grep -E "(✅|🔄|❌)" PROJECT-MANAGEMENT/TASK-TRACKER.md
```

## 🎯 Success Metrics
- **Setup Time**: < 5 minutes from clone to first commit
- **Parallel Efficiency**: 3 developers can work simultaneously without conflicts  
- **Integration Success**: Clean merges with < 10 conflicts total
- **Task Completion**: All 32 tasks completed within 4 days
- **Code Quality**: All builds pass, no TypeScript errors, no ESLint warnings

---

**Pro Tip**: Use the automated worktree setup script for fastest onboarding. The parallel development approach can reduce total development time from 8 days (sequential) to 4 days (parallel).

**Last Updated**: $(date)  
**Workflow Version**: v1.0