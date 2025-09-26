#!/bin/bash
# 🌲 Automated Worktree Setup Script for Growplate
# Sets up parallel development environment with 4 worktrees

set -e

echo "🚀 Setting up Growplate development environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not in a git repository${NC}"
    echo "Please run this script from the growplate repository root"
    exit 1
fi

# Check if we're in the main branch
current_branch=$(git branch --show-current)
if [[ "$current_branch" != "main" ]]; then
    echo -e "${YELLOW}⚠️  Warning: You're on branch '$current_branch', not 'main'${NC}"
    echo "Switching to main branch..."
    git checkout main || {
        echo -e "${RED}❌ Failed to switch to main branch${NC}"
        exit 1
    }
fi

echo -e "${BLUE}📋 Current repository status:${NC}"
echo "Repository: $(git remote get-url origin 2>/dev/null || echo 'No remote configured')"
echo "Branch: $(git branch --show-current)"
echo "Commit: $(git log --oneline -1)"
echo ""

# Create branches
echo -e "${YELLOW}🌿 Creating development branches...${NC}"
branches=("foundation" "customer-app" "server-app" "admin-cms")

for branch in "${branches[@]}"; do
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✓ Branch '$branch' already exists"
    else
        git branch $branch
        echo -e "  ${GREEN}✓ Created branch '$branch'${NC}"
    fi
done

# Create worktrees
echo -e "${YELLOW}🌲 Creating worktrees in parallel directories...${NC}"

worktrees=(
    "../growplate-foundation:foundation"
    "../growplate-customer:customer-app"  
    "../growplate-server:server-app"
    "../growplate-admin:admin-cms"
)

for worktree_config in "${worktrees[@]}"; do
    IFS=':' read -r path branch <<< "$worktree_config"
    
    if [[ -d "$path" ]]; then
        echo "  ℹ️  Directory '$path' already exists"
        if git worktree list | grep -q "$path"; then
            echo "  ✓ Worktree already configured"
        else
            echo -e "${YELLOW}  🔄 Adding existing directory as worktree...${NC}"
            git worktree add "$path" "$branch" 2>/dev/null || echo "    ⚠️  Failed to add worktree (directory may not be empty)"
        fi
    else
        git worktree add "$path" "$branch"
        echo -e "  ${GREEN}✓ Created worktree '$path' on branch '$branch'${NC}"
    fi
done

# Display worktree status
echo -e "${GREEN}🎯 Worktree setup complete!${NC}"
echo ""
git worktree list

# Create package.json in each worktree for development
echo -e "${YELLOW}📦 Setting up development environment in worktrees...${NC}"

# Basic package.json template
cat > /tmp/package-template.json << 'EOF'
{
  "name": "growplate",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/supabase-js": "^2.38.0",
    "zustand": "^4.4.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "14.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
EOF

# Copy package.json template to worktrees (only if they don't have package.json)
for worktree_config in "${worktrees[@]}"; do
    IFS=':' read -r path branch <<< "$worktree_config"
    if [[ -d "$path" && ! -f "$path/package.json" ]]; then
        cp /tmp/package-template.json "$path/package.json"
        echo "  ✓ Added package.json to $path"
    fi
done

rm /tmp/package-template.json

# Create helper commands
echo -e "${YELLOW}🛠️  Creating navigation helper scripts...${NC}"

helper_scripts=(
    "switch-to-foundation.sh:../growplate-foundation:Foundation (F1-F5 tasks)"
    "switch-to-customer.sh:../growplate-customer:Customer App (C1-C8 tasks)"
    "switch-to-server.sh:../growplate-server:Server Dashboard (S1-S8 tasks)"
    "switch-to-admin.sh:../growplate-admin:Admin CMS (A1-A8 tasks)"
)

for script_config in "${helper_scripts[@]}"; do
    IFS=':' read -r script_name target_dir description <<< "$script_config"
    
    cat > "$script_name" << EOF
#!/bin/bash
# 🚀 Switch to $description
if [[ -d "$target_dir" ]]; then
    cd "$target_dir"
    echo -e "\\033[0;32m✓ Switched to $description\\033[0m"
    echo "Directory: \$(pwd)"
    echo "Branch: \$(git branch --show-current)"
    echo ""
    echo "💡 Quick commands:"
    echo "  npm run dev        # Start development server"
    echo "  npm run build      # Build for production"
    echo "  git status         # Check git status"
    echo ""
    exec \$SHELL
else
    echo -e "\\033[0;31m❌ Directory '$target_dir' not found\\033[0m"
    echo "Run ./DEVELOPMENT/worktree-commands.sh to set up worktrees"
    exit 1
fi
EOF

    chmod +x "$script_name"
    echo "  ✓ Created $script_name"
done

# Create all-in-one status checker
cat > check-all-worktrees.sh << 'EOF'
#!/bin/bash
# 📊 Check status across all worktrees

echo "🌲 Growplate Worktree Status Report"
echo "=================================="

worktrees=(
    "Main:.:main"
    "Foundation:../growplate-foundation:foundation"
    "Customer:../growplate-customer:customer-app"
    "Server:../growplate-server:server-app"
    "Admin:../growplate-admin:admin-cms"
)

for worktree_config in "${worktrees[@]}"; do
    IFS=':' read -r name path branch <<< "$worktree_config"
    
    echo ""
    echo "📁 $name ($path)"
    
    if [[ -d "$path" ]]; then
        cd "$path"
        echo "   Branch: $(git branch --show-current)"
        echo "   Status: $(git status --porcelain | wc -l | xargs) files changed"
        echo "   Latest: $(git log --oneline -1)"
        cd - > /dev/null
    else
        echo "   ❌ Directory not found"
    fi
done

echo ""
echo "📋 Task Progress:"
if [[ -f "PROJECT-MANAGEMENT/TASK-TRACKER.md" ]]; then
    completed=$(grep -c "✅" PROJECT-MANAGEMENT/TASK-TRACKER.md || echo 0)
    in_progress=$(grep -c "🔄" PROJECT-MANAGEMENT/TASK-TRACKER.md || echo 0)  
    blocked=$(grep -c "❌" PROJECT-MANAGEMENT/TASK-TRACKER.md || echo 0)
    echo "   ✅ Completed: $completed"
    echo "   🔄 In Progress: $in_progress"
    echo "   ❌ Blocked: $blocked"
else
    echo "   📋 Task tracker not found"
fi
EOF

chmod +x check-all-worktrees.sh
echo "  ✓ Created check-all-worktrees.sh"

# Push all branches to remote (if remote exists)
if git remote get-url origin &>/dev/null; then
    echo -e "${YELLOW}🚀 Pushing branches to remote repository...${NC}"
    for branch in "${branches[@]}"; do
        git push origin "$branch" 2>/dev/null && echo "  ✓ Pushed $branch" || echo "  ⚠️  Failed to push $branch (may already exist)"
    done
else
    echo -e "${YELLOW}ℹ️  No remote repository configured - skipping push${NC}"
fi

# Final instructions
echo ""
echo -e "${GREEN}🎉 Setup Complete! Your parallel development environment is ready.${NC}"
echo ""
echo -e "${BLUE}📁 Directory Structure:${NC}"
echo "  growplate/                    # 📋 Main repo (documentation)"
echo "  growplate-foundation/         # 🏗️ Foundation setup (F1-F5)"
echo "  growplate-customer/          # 📱 Customer app (C1-C8)"
echo "  growplate-server/            # 🖥️ Server dashboard (S1-S8)"
echo "  growplate-admin/             # ⚙️ Admin CMS (A1-A8)"
echo ""
echo -e "${BLUE}🚀 Quick Start Commands:${NC}"
echo "  ./switch-to-foundation.sh     # Start with foundation tasks"
echo "  ./switch-to-customer.sh       # Work on customer app"
echo "  ./switch-to-server.sh         # Work on server dashboard"
echo "  ./switch-to-admin.sh          # Work on admin CMS"
echo "  ./check-all-worktrees.sh      # Check status of all worktrees"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Check API keys: PROJECT-MANAGEMENT/API-KEYS-TEMPLATE.md"
echo "2. Start with foundation: ./switch-to-foundation.sh"
echo "3. Follow tasks in: PROJECT-MANAGEMENT/TASK-TRACKER.md"
echo "4. Update progress every 15 minutes"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"