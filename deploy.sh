#!/bin/bash

# Check for a commit message
if [ -z "$1" ]; then
  echo "Error: Please provide a commit message."
  echo "Usage: ./deploy.sh \"Your commit message\""
  exit 1
fi

# GitHub repository SSH URL
REPO_URL="git@github.com:seefeldmaxwell/cyberalamo.git"  # Replace USERNAME and REPO_NAME

# Set up git if not initialized
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
  git remote add origin "$REPO_URL"
fi

# Stage all changes
echo "Staging all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "$1"

# Push changes to GitHub
echo "Pushing to GitHub via SSH..."
git push -u origin main


echo "Deployment to GitHub complete!"
