# Hostinger Deployment Guide - Brux Studio
**Complete step-by-step guide for deploying Next.js static export to Hostinger**

---

## 📋 Pre-Deployment Requirements

### 1. Hostinger Account Setup
- [ ] Active Hostinger hosting plan (Premium or Business recommended)
- [ ] Domain `bruxstudio.it` registered and connected
- [ ] Access to hPanel (Hostinger control panel)
- [ ] FTP credentials (if using FTP method)

### 2. Local Environment Ready
- [ ] All critical fixes completed (see `CRITICAL_FIXES_GUIDE.md`)
- [ ] Node.js v18+ installed
- [ ] npm dependencies installed
- [ ] Production environment variables configured

### 3. Files Prepared
- [ ] Favicons generated and in `/public`
- [ ] Images optimized (< 300KB each)
- [ ] OG image resized to 1200x630px
- [ ] `.htaccess` file in `/public`
- [ ] `.env.production` created with real values

---

## 🚀 Step 1: Build the Static Site

### 1.1 Create Production Environment File

```bash
cd /home/user/bruxStudio

# Create .env.production from example
cp .env.example .env.production

# Edit with real values
nano .env.production
```

**Required values:**
```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-BQZ1CFXVVJ

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GT-55K84496

# Facebook Pixel
NEXT_PUBLIC_FB_PIXEL_ID=1906274670771473

# Site URL (IMPORTANT: No trailing slash)
NEXT_PUBLIC_SITE_URL=https://bruxstudio.it

# Optional: Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=

# Optional: Hotjar
NEXT_PUBLIC_HOTJAR_ID=
```

### 1.2 Install Dependencies

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Verify no vulnerabilities
npm audit
```

### 1.3 Build for Production

```bash
# Build static export
npm run build

# This creates an /out directory with static files
```

**Expected output:**
```
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                   X kB          XX kB
├ ○ /about                              X kB          XX kB
├ ○ /contact                            X kB          XX kB
├ ○ /methodology                        X kB          XX kB
└ ○ /portfolio                          X kB          XX kB

○  (Static) prerendered as static content

Export successful. Files written to /home/user/bruxStudio/out
```

### 1.4 Verify Build Output

```bash
# Check output directory
ls -lh out/

# Check total size (should be < 5MB)
du -sh out/

# Verify all pages exist
ls out/*/index.html

# Expected files:
# out/index.html (homepage)
# out/about/index.html
# out/portfolio/index.html
# out/contact/index.html
# out/methodology/index.html
# out/_next/ (Next.js assets)
# out/images/ (your images)
```

### 1.5 Test Locally (Optional)

```bash
# Install serve globally
npm install -g serve

# Serve the /out directory
serve out

# Visit http://localhost:3000
# Test all pages and functionality
```

---

## 📤 Step 2: Deploy to Hostinger

### Method A: File Manager (Recommended for First-Time)

#### 2.1 Access Hostinger File Manager

1. Log in to **Hostinger hPanel**: https://hpanel.hostinger.com/
2. Select your **bruxstudio.it** website
3. Click **File Manager** in the sidebar
4. Navigate to **public_html** directory

#### 2.2 Backup Existing Files (if any)

```
1. Select all files in public_html
2. Click "Compress"
3. Create: backup_[date].zip
4. Download backup to your computer
```

#### 2.3 Clean public_html Directory

```
1. Select all existing files (except backup.zip)
2. Click "Delete"
3. Confirm deletion
```

#### 2.4 Upload Static Files

**Upload /out directory contents (NOT the /out folder itself):**

1. Click **Upload** button in File Manager
2. Select files from `/home/user/bruxStudio/out/`:
   - index.html
   - 404.html (if exists)
   - _next/ folder
   - images/ folder
   - All other files/folders

3. **Important:** Upload contents, not the "out" folder
   ```
   ✅ Correct:
   public_html/
   ├── index.html
   ├── _next/
   └── images/

   ❌ Wrong:
   public_html/
   └── out/
       ├── index.html
       └── ...
   ```

#### 2.5 Upload .htaccess

1. Go back to local project: `/home/user/bruxStudio/public/`
2. Upload `.htaccess` to `public_html/` root
3. Verify file is present: `public_html/.htaccess`

#### 2.6 Set File Permissions

```
1. Select .htaccess file
2. Click "Permissions"
3. Set to: 644 (rw-r--r--)
4. Click "Save"
```

### Method B: FTP Deployment (Faster for Large Files)

#### 2.1 Get FTP Credentials

1. In hPanel, go to **File** → **FTP Accounts**
2. Note down:
   - **Hostname:** ftp.bruxstudio.it (or IP)
   - **Username:** (usually your Hostinger username)
   - **Port:** 21
3. Create new FTP password if needed

#### 2.2 Connect with FTP Client

**Using FileZilla (Recommended):**

1. Download FileZilla: https://filezilla-project.org/
2. Open FileZilla
3. Enter connection details:
   ```
   Host: ftp.bruxstudio.it
   Username: your_ftp_username
   Password: your_ftp_password
   Port: 21
   ```
4. Click **Quickconnect**

**Using Command Line (Linux/Mac):**

```bash
# Connect via FTP
ftp ftp.bruxstudio.it

# Login with credentials
# Navigate to public_html
cd public_html

# Upload entire /out directory contents
lcd /home/user/bruxStudio/out
mput *
```

#### 2.3 Upload Files via FileZilla

1. **Local site** (left): Navigate to `/home/user/bruxStudio/out/`
2. **Remote site** (right): Navigate to `/public_html/`
3. **Select all files** in out/ directory
4. **Right-click** → **Upload**
5. Wait for upload to complete

**Upload checklist:**
- [ ] index.html (homepage)
- [ ] All subdirectories (about/, portfolio/, etc.)
- [ ] _next/ folder (contains JS/CSS)
- [ ] images/ folder
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] manifest.json
- [ ] og-image.jpg
- [ ] All favicon files (*.png, *.ico)

6. Upload `.htaccess` from `/public/` to `/public_html/`

---

## 🔒 Step 3: Configure SSL/HTTPS

### 3.1 Enable SSL Certificate

1. In hPanel, go to **Advanced** → **SSL**
2. Select **bruxstudio.it**
3. Click **Install SSL**
4. Choose **Free SSL (Let's Encrypt)**
5. Click **Install**
6. Wait for installation (1-5 minutes)

### 3.2 Force HTTPS Redirect

**Method 1: Via hPanel (Easy)**

1. In hPanel, go to **Advanced** → **Force HTTPS**
2. Toggle **ON** for bruxstudio.it
3. Click **Save**

**Method 2: Via .htaccess (Already configured)**

Your `.htaccess` already includes:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 3.3 Verify SSL

1. Visit: https://bruxstudio.it
2. Check for **🔒 padlock** in browser
3. Click padlock → **Certificate is valid**

**Test SSL quality:**
- https://www.ssllabs.com/ssltest/analyze.html?d=bruxstudio.it
- Target: **A or A+** rating

---

## 🌍 Step 4: Domain Configuration

### 4.1 Verify DNS Settings

1. In hPanel, go to **Domains** → **DNS / Nameservers**
2. Verify A record points to Hostinger:
   ```
   Type: A
   Name: @
   Points to: [Hostinger IP - usually auto-configured]
   TTL: 14400
   ```

3. Verify www subdomain:
   ```
   Type: CNAME
   Name: www
   Points to: bruxstudio.it
   TTL: 14400
   ```

### 4.2 Test Domain Redirects

Verify these redirects work:

```bash
# Test 1: www to non-www
curl -I https://www.bruxstudio.it
# Should show: Location: https://bruxstudio.it

# Test 2: HTTP to HTTPS
curl -I http://bruxstudio.it
# Should show: Location: https://bruxstudio.it

# Test 3: Final URL
curl -I https://bruxstudio.it
# Should show: 200 OK
```

---

## ⚙️ Step 5: Configure Performance Settings

### 5.1 Enable Gzip Compression

1. In hPanel, go to **Advanced** → **htaccess Editor**
2. Verify compression directives exist (from your .htaccess)
3. Test: https://giftofspeed.com/gzip-test/

### 5.2 Browser Caching

Already configured in your `.htaccess`:
- Images: 1 year cache
- CSS/JS: 1 month cache
- HTML: No cache (always fresh)

### 5.3 Configure PHP Settings (if needed)

1. Go to **Advanced** → **PHP Configuration**
2. Recommended settings:
   ```
   memory_limit = 256M
   upload_max_filesize = 64M
   post_max_size = 64M
   max_execution_time = 300
   ```

---

## 🧪 Step 6: Post-Deployment Testing

### 6.1 Functionality Tests

**Homepage:**
- [ ] Page loads correctly
- [ ] Navigation works
- [ ] Images display
- [ ] CTAs clickable
- [ ] Stats visible

**All Pages:**
- [ ] About page: `/about/`
- [ ] Portfolio page: `/portfolio/`
- [ ] Contact page: `/contact/`
- [ ] Methodology page: `/methodology/`

**Mobile Test:**
- [ ] Responsive on mobile (Chrome DevTools)
- [ ] Touch targets work
- [ ] Images scale properly

### 6.2 SEO Tests

**1. Robots.txt:**
```
Visit: https://bruxstudio.it/robots.txt
Should show: your robots.txt content
```

**2. Sitemap:**
```
Visit: https://bruxstudio.it/sitemap.xml
Should show: XML sitemap with 5 URLs
```

**3. Structured Data:**
- https://search.google.com/test/rich-results
- Enter: https://bruxstudio.it
- Should detect: LocalBusiness, Organization schemas

**4. Mobile-Friendly:**
- https://search.google.com/test/mobile-friendly
- Enter: https://bruxstudio.it
- Should show: "Page is mobile-friendly"

### 6.3 Performance Tests

**1. Google PageSpeed Insights:**
- https://pagespeed.web.dev/
- Enter: https://bruxstudio.it
- **Target:**
  - Mobile: 90+
  - Desktop: 95+

**2. Core Web Vitals:**
- LCP: < 2.5s ✅
- FID: < 100ms ✅
- CLS: < 0.1 ✅

**3. GTmetrix:**
- https://gtmetrix.com/
- Enter: https://bruxstudio.it
- Target: Grade A, < 2s load time

### 6.4 Security Tests

**1. Security Headers:**
- https://securityheaders.com/
- Enter: https://bruxstudio.it
- **Target: A or A+ grade**

Expected headers:
```
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Content-Security-Policy: [configured]
```

**2. SSL Test:**
- https://www.ssllabs.com/ssltest/
- Enter: bruxstudio.it
- **Target: A or A+ rating**

### 6.5 Analytics Verification

**1. Google Analytics:**
```javascript
// Open browser console on https://bruxstudio.it
console.log(window.dataLayer)
// Should show: Array with gtag events

// Check Network tab for:
https://www.google-analytics.com/g/collect
```

**2. Google Tag Manager:**
```javascript
console.log(window.google_tag_manager)
// Should show: GTM container loaded
```

**3. Facebook Pixel:**
```javascript
console.log(window.fbq)
// Should show: function fbq()

// Check Network tab for:
https://connect.facebook.net/en_US/fbevents.js
```

### 6.6 Social Media Preview Tests

**1. Facebook Debugger:**
- https://developers.facebook.com/tools/debug/
- Enter: https://bruxstudio.it
- Check: Image shows 1200x630px, title, description

**2. Twitter Card Validator:**
- https://cards-dev.twitter.com/validator
- Enter: https://bruxstudio.it
- Check: summary_large_image card displays correctly

**3. LinkedIn Post Inspector:**
- https://www.linkedin.com/post-inspector/
- Enter: https://bruxstudio.it
- Check: Preview displays correctly

---

## 🔍 Step 7: Search Console Setup

### 7.1 Google Search Console

**Add Property:**
1. Go to: https://search.google.com/search-console
2. Click **Add Property**
3. Choose **Domain** property type
4. Enter: `bruxstudio.it`

**Verify Ownership (Method 1 - HTML Tag):**
1. Copy verification meta tag
2. Edit `/home/user/bruxStudio/app/layout.tsx`
3. Update line 74:
   ```typescript
   verification: {
     google: 'paste-verification-code-here',
   ```
4. Rebuild and redeploy
5. Click **Verify** in Search Console

**Verify Ownership (Method 2 - DNS):**
1. Copy TXT record value
2. Go to Hostinger **DNS / Nameservers**
3. Add TXT record:
   ```
   Type: TXT
   Name: @
   Value: google-site-verification=XXXXXXXXXXXXX
   ```
4. Wait 10-15 minutes
5. Click **Verify** in Search Console

**Submit Sitemap:**
1. In Search Console, go to **Sitemaps**
2. Enter: `https://bruxstudio.it/sitemap.xml`
3. Click **Submit**
4. Wait 24-48 hours for indexing

**Set Preferences:**
- Target country: **Italy**
- Default language: **Italian**

### 7.2 Bing Webmaster Tools

**Add Site:**
1. Go to: https://www.bing.com/webmasters
2. Click **Add Site**
3. Enter: `https://bruxstudio.it`

**Verify Ownership:**
Already configured in layout.tsx:
```typescript
other: {
  'msvalidate.01': '338202CE7361FCB8951F217B7AA01171',
}
```

**Submit Sitemap:**
1. Go to **Sitemaps**
2. Submit: `https://bruxstudio.it/sitemap.xml`

---

## 🎯 Step 8: Optional Enhancements

### 8.1 Cloudflare CDN (Recommended)

**Benefits:**
- DDoS protection
- CDN acceleration
- Additional caching
- Analytics
- Free SSL

**Setup:**
1. Create account: https://www.cloudflare.com/
2. Add site: bruxstudio.it
3. Update nameservers in Hostinger to Cloudflare's
4. Enable **Proxy** (orange cloud)
5. Configure page rules for caching

### 8.2 Google My Business

1. Create listing: https://www.google.com/business/
2. Enter business details:
   - Name: Brux Studio
   - Category: Web Design Service
   - Address: Carpi (MO), Italy
   - Phone: +39 370 306 2285
   - Website: https://bruxstudio.it

### 8.3 Submit to Directories

**Italian Directories:**
- PagineGialle.it
- Virgilio.it
- MisterImprese.it

**International:**
- Google My Business ✅
- Bing Places
- Apple Maps

---

## 🐛 Troubleshooting

### Issue: 404 Error on All Pages

**Cause:** .htaccess not working

**Fix:**
```bash
# Check if mod_rewrite is enabled
# Contact Hostinger support to enable if needed

# Verify .htaccess location
ls -la public_html/.htaccess

# Check file permissions
chmod 644 public_html/.htaccess
```

### Issue: Images Not Loading

**Cause:** Incorrect path or permissions

**Fix:**
```bash
# Check images directory exists
ls public_html/images/

# Set permissions
chmod 755 public_html/images/
chmod 644 public_html/images/*
```

### Issue: Slow Load Times

**Causes & Fixes:**
1. Images not optimized → Run image optimization script
2. Gzip not working → Check .htaccess compression
3. No browser caching → Verify .htaccess cache headers
4. No CDN → Consider Cloudflare

### Issue: SSL Certificate Error

**Fix:**
```bash
# Reinstall SSL via hPanel
Advanced → SSL → Reinstall

# Clear browser cache and test
```

### Issue: Analytics Not Tracking

**Fix:**
1. Check Network tab for:
   - google-analytics.com requests
   - facebook.net requests
2. Verify production environment
3. Check console for errors
4. Verify IDs in .env.production

---

## 📊 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Search Console for errors
- [ ] Review Google Analytics traffic
- [ ] Monitor uptime (Hostinger hPanel)
- [ ] Check backup status

### Monthly Tasks
- [ ] Update npm dependencies
- [ ] Review performance metrics
- [ ] Check for broken links
- [ ] Update content/portfolio

### Quarterly Tasks
- [ ] Full security audit
- [ ] Performance optimization review
- [ ] SEO ranking analysis
- [ ] User feedback review

---

## 📞 Support Contacts

### Hostinger Support
- **Live Chat:** Available 24/7 in hPanel
- **Email:** support@hostinger.com
- **Phone:** Check your hPanel for local number
- **Knowledge Base:** https://support.hostinger.com/

### Emergency Contacts
- **SSL Issues:** Hostinger SSL support
- **Domain Issues:** Hostinger domain support
- **Server Downtime:** Hostinger technical support

---

## ✅ Final Deployment Checklist

### Pre-Deployment
- [ ] All critical fixes completed
- [ ] Images optimized (< 300KB each)
- [ ] Favicons generated
- [ ] OG image 1200x630px
- [ ] .env.production configured
- [ ] Local build successful
- [ ] All tests passed locally

### Deployment
- [ ] Files uploaded to public_html
- [ ] .htaccess uploaded and configured
- [ ] File permissions set (644 for files, 755 for dirs)
- [ ] SSL certificate installed
- [ ] HTTPS forced
- [ ] Domain redirects working

### Post-Deployment
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Navigation working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] SEO tests passed
- [ ] Performance tests passed
- [ ] Security tests passed
- [ ] Analytics tracking
- [ ] Search Console verified
- [ ] Sitemap submitted

---

## 🎉 Success!

Your Brux Studio website should now be live at:
**https://bruxstudio.it**

**Next Steps:**
1. Monitor traffic in Google Analytics
2. Check Search Console daily for first week
3. Share on social media
4. Update portfolio regularly
5. Gather client testimonials

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Hostinger Plan:** _____________
**SSL Certificate:** Let's Encrypt
**CDN:** Cloudflare (optional)

**Notes:**
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

Good luck with your website! 🚀
