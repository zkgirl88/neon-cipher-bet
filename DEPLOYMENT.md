# Vercel Deployment Guide for Neon Cipher Bet

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **Environment Variables**: Prepare the required environment variables

## Step-by-Step Deployment

### Step 1: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository: `zkgirl88/neon-cipher-bet`
4. Click **"Import"**

### Step 2: Configure Project Settings

1. **Project Name**: `neon-cipher-bet` (or your preferred name)
2. **Framework Preset**: Select **"Vite"**
3. **Root Directory**: Leave as default (`.`)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the Vercel dashboard, go to **Settings** → **Environment Variables** and add:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
```

**Note**: Replace `your_wallet_connect_project_id` and `your_infura_api_key` with your actual credentials.

**Important**: Make sure to set these for all environments (Production, Preview, Development).

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### Step 5: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for SSL certificate to be issued

## Build Configuration

The project uses the following build configuration:

- **Framework**: Vite + React
- **Node.js Version**: 18.x (recommended)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Environment Variables Reference

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Ethereum Sepolia testnet chain ID |
| `NEXT_PUBLIC_RPC_URL` | `https://1rpc.io/sepolia` | RPC endpoint for Sepolia |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `your_project_id` | WalletConnect project ID |
| `NEXT_PUBLIC_INFURA_API_KEY` | `your_api_key` | Infura API key for additional RPC |

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are properly installed
2. **Environment Variables Not Working**: Ensure they are set for all environments
3. **Wallet Connection Issues**: Verify the WalletConnect project ID is correct
4. **Network Issues**: Make sure the RPC URL is accessible

### Build Logs

If deployment fails, check the build logs in the Vercel dashboard:
1. Go to **Deployments**
2. Click on the failed deployment
3. Check the **Build Logs** tab for error details

## Post-Deployment

After successful deployment:

1. **Test the Application**: Visit your Vercel URL and test all features
2. **Wallet Connection**: Test connecting with different wallet providers
3. **Network Switching**: Ensure users can switch to Sepolia testnet
4. **Mobile Testing**: Test on mobile devices for responsive design

## Continuous Deployment

Vercel automatically deploys when you push to the main branch:
- **Production**: Deploys from `main` branch
- **Preview**: Deploys from pull requests and other branches

## Performance Optimization

1. **Enable Analytics**: Go to **Analytics** tab in Vercel dashboard
2. **Monitor Performance**: Use Vercel's built-in performance monitoring
3. **Optimize Images**: Use Vercel's image optimization features
4. **Edge Functions**: Consider using Vercel Edge Functions for better performance

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to the repository
2. **HTTPS**: Vercel automatically provides HTTPS certificates
3. **CORS**: Configure CORS settings if needed for API calls
4. **Rate Limiting**: Consider implementing rate limiting for API endpoints

## Support

For deployment issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Contact Vercel support through their dashboard
3. Check GitHub issues for project-specific problems

## Deployment URL

Once deployed, your application will be available at:
- **Production**: `https://neon-cipher-bet.vercel.app` (or your custom domain)
- **Preview**: `https://neon-cipher-bet-git-[branch].vercel.app`

## Next Steps

After successful deployment:
1. Test all wallet connections
2. Verify smart contract interactions
3. Test on different devices and browsers
4. Set up monitoring and analytics
5. Consider setting up a custom domain
