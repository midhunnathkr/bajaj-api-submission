# Deployment Guide

This guide will help you deploy the Bajaj API to various hosting platforms.

## Option 1: Vercel (Recommended - Free & Easy)

### Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### Steps
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Node.js project
   - Click "Deploy"

3. **Your API will be available at**
   ```
   https://your-project-name.vercel.app/bfhl
   ```

## Option 2: Railway

### Prerequisites
- GitHub account
- Railway account (free at [railway.app](https://railway.app))

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Node.js and deploy

3. **Your API will be available at**
   ```
   https://your-project-name.railway.app/bfhl
   ```

## Option 3: Render

### Prerequisites
- GitHub account
- Render account (free at [render.com](https://render.com))

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Click "Create Web Service"

3. **Your API will be available at**
   ```
   https://your-project-name.onrender.com/bfhl
   ```

## Option 4: Heroku

### Prerequisites
- GitHub account
- Heroku account (free tier discontinued, but still popular)

### Steps
1. **Push to GitHub** (same as above)

2. **Deploy to Heroku**
   - Install Heroku CLI
   - Run: `heroku create your-app-name`
   - Run: `git push heroku main`
   - Run: `heroku open`

3. **Your API will be available at**
   ```
   https://your-app-name.herokuapp.com/bfhl
   ```

## Testing Your Deployed API

Once deployed, test your API with:

```bash
curl -X POST https://your-deployed-url/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

## Environment Variables

If you need to set environment variables:
- **Vercel**: Project Settings → Environment Variables
- **Railway**: Variables tab in your project
- **Render**: Environment tab in your service
- **Heroku**: `heroku config:set VARIABLE_NAME=value`

## Important Notes

1. **Free Tier Limitations**
   - Vercel: 100GB bandwidth/month
   - Railway: $5 credit/month
   - Render: 750 hours/month
   - Heroku: No free tier

2. **Auto-deployment**
   - All platforms support auto-deployment from GitHub
   - Push to main branch triggers automatic deployment

3. **Custom Domain**
   - All platforms support custom domains
   - Configure in your platform's dashboard

## Troubleshooting

### Common Issues
1. **Build Failures**
   - Check if all dependencies are in `package.json`
   - Ensure Node.js version compatibility

2. **Runtime Errors**
   - Check platform logs
   - Verify environment variables

3. **CORS Issues**
   - The API includes CORS middleware
   - Should work out of the box

### Getting Help
- Check platform documentation
- Review deployment logs
- Test locally first with `npm start`

## Next Steps

After successful deployment:
1. Update the form with your API endpoint
2. Test all example cases
3. Share your GitHub repository link
4. Ensure your API is publicly accessible

## Repository Structure

Your GitHub repository should contain:
```
bajaj-api/
├── server.js          # Main API server
├── package.json       # Dependencies
├── README.md          # Documentation
├── DEPLOYMENT.md      # This file
├── vercel.json        # Vercel config
├── .gitignore         # Git ignore rules
└── test.js            # Test cases
``` 