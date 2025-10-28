# Brux Studio Website

This is a code bundle for Brux Studio Website. The original project is available at https://www.figma.com/design/K8Qia3ivziOTy3SxkoWwMz/Brux-Studio-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-BQZ1CFXVVJ

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GT-55K84496

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=1906274670771473

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://bruxstudio.it
```

## Analytics & Tracking

The website includes the following analytics and tracking integrations:

- **Google Analytics (GA4)**: Tracks page views and user interactions
- **Google Tag Manager**: Manages all marketing tags in one place
- **Meta Pixel (Facebook)**: Tracks conversions and builds audiences for Facebook ads
- **Bing Webmaster Tools**: Verified for Bing search engine indexing

All tracking codes are configured in `app/layout.tsx` and only load in production mode.
