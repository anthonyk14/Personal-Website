# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

Your website is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/Personal-Website`
   - Click on **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push Your Changes:**
   ```bash
   git push
   ```

3. **Wait for Deployment:**
   - Go to the **Actions** tab in your repository
   - You'll see the deployment workflow running
   - Once complete (usually 1-2 minutes), your site will be live!

4. **Access Your Website:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Personal-Website/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
pnpm run build

# The built files will be in the 'dist' folder
# You can deploy these files to any static hosting service
```

## Troubleshooting

- **404 errors on page refresh:** This is normal for client-side routing. GitHub Pages doesn't support it by default. The app will work fine when navigating through links.
- **Workflow fails:** Check the Actions tab for error details. Common issues:
  - Missing permissions (ensure Pages has write permissions)
  - Wrong branch name in workflow file

## Making Updates

Simply push your changes to the `main` branch, and the site will automatically rebuild and redeploy!

```bash
git add .
git commit -m "Update content"
git push
```
