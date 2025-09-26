# Pull Request: [Task IDs] - [Brief Description]

## 📋 Task Summary
**Completed Tasks**: [e.g. C1, C2, C3]  
**Worktree**: [e.g. customer-app]  
**Total Time**: [e.g. 45 minutes (3 × 15min tasks)]  

## ✅ Deliverables Completed
- [ ] **[Task ID]**: [Specific deliverable achieved]
- [ ] **[Task ID]**: [Specific deliverable achieved]  
- [ ] **[Task ID]**: [Specific deliverable achieved]

## 🧪 Testing Completed
- [ ] Build passes (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] TypeScript validation passes (`npm run type-check`)
- [ ] Database connection tested (if applicable)
- [ ] Manual testing of user flow completed
- [ ] Mobile responsiveness verified (if UI changes)

## 🔄 Integration Notes
**Merge Target**: `main`  
**Depends On**: [e.g. foundation branch must be merged first]  
**Conflicts Expected**: [None/Describe potential conflicts]  

## 🛠️ Technical Changes
### New Files
- `src/components/[component-name].tsx`
- `src/lib/[utility-name].ts`
- `src/app/[route-name]/page.tsx`

### Modified Files  
- `src/types/index.ts` - Added new interfaces
- `package.json` - Added dependencies (if any)
- Database schema - [Describe any DB changes]

### Dependencies Added
- [package-name@version] - [Reason for addition]

## 📱 User Experience Impact
**Customer App Changes**:
- [Describe user-facing changes]

**Server App Changes**: 
- [Describe staff-facing changes]

**Admin Changes**:
- [Describe admin-facing changes]

## 🚨 Breaking Changes
- [ ] No breaking changes
- [ ] Breaking changes (describe below):

[If breaking changes, describe migration path]

## 🔧 Environment Requirements
- [ ] No new environment variables required
- [ ] New environment variables needed:
  - `NEW_ENV_VAR` - [Description and where to get it]

## 📸 Screenshots (if UI changes)
**Before**:
[Screenshot or N/A]

**After**: 
[Screenshot or N/A]

**Mobile**:
[Mobile screenshot or N/A]

## ✅ Deployment Readiness
- [ ] Code is ready for production deployment
- [ ] Database changes are backward compatible  
- [ ] No manual migration steps required
- [ ] Environment variables documented in API-KEYS-TEMPLATE.md

## 👥 Review Requests
**Requested Reviewers**: [Tag team members]  
**Focus Areas**: [What to pay special attention to during review]  
**Testing Instructions**: [How reviewer should test the changes]

## 📚 Documentation Updates
- [ ] Task tracker updated (`TASK-TRACKER.md`)
- [ ] API documentation updated (if API changes)
- [ ] README updated (if setup process changed)
- [ ] Database schema docs updated (if DB changes)

## 🎯 Success Criteria
This PR is ready to merge when:
- [ ] All automated checks pass
- [ ] Manual testing completed successfully  
- [ ] Code review approved
- [ ] Integration testing with other worktrees verified
- [ ] Task deliverables confirmed complete

## 🔗 Related Issues
Closes #[issue-number]  
Related to #[issue-number]  

---

**⚠️ Merge Instructions**: 
After approval, merge using **"Squash and merge"** to keep commit history clean.

**🚀 Post-Merge**: 
Remember to update `TASK-TRACKER.md` to mark tasks as ✅ Completed.