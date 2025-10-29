# Critical Fixes Guide - Brux Studio
**Priority:** IMMEDIATE - Fix before deployment

---

## 🚨 Issue #1: Missing Favicon Files

### Problem
All favicon files referenced in `app/layout.tsx` and `public/manifest.json` are missing.

### Quick Fix Steps

#### Option A: Use Online Generator (Recommended - 10 minutes)

1. **Go to:** https://realfavicongenerator.net/

2. **Upload:** `/public/images/logo.png`

3. **Configure:**
   - iOS: Use your logo with padding
   - Android: Use your logo with padding
   - Windows: Choose accent color #030213
   - macOS Safari: Use monochrome version

4. **Download** the favicon package

5. **Extract** and copy these files to `/public/`:
   ```
   favicon-16x16.png
   favicon-32x32.png
   apple-touch-icon.png (180x180)
   safari-pinned-tab.svg
   icon-192x192.png
   icon-512x512.png
   favicon.ico
   ```

6. **Verify** all files are in place:
   ```bash
   ls -lh /public/*.png /public/*.ico /public/*.svg
   ```

#### Option B: Use ImageMagick (5 minutes)

```bash
cd /home/user/bruxStudio/public

# Install ImageMagick (if not installed)
# apt-get install imagemagick -y

# Generate all favicon sizes from logo.png
convert images/logo.png -resize 16x16 favicon-16x16.png
convert images/logo.png -resize 32x32 favicon-32x32.png
convert images/logo.png -resize 180x180 apple-touch-icon.png
convert images/logo.png -resize 192x192 icon-192x192.png
convert images/logo.png -resize 512x512 icon-512x512.png

# Create ICO file (multi-size)
convert images/logo.png -define icon:auto-resize=16,32,48,64,256 favicon.ico

# Create SVG (manual - or use logo if already SVG)
# For now, use PNG as fallback
cp images/logo.png safari-pinned-tab.svg
```

#### Option C: Use Node Script (Automated)

Create `scripts/generate-favicons.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' },
];

const inputPath = path.join(__dirname, '../public/images/logo.png');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  for (const { size, name } of sizes) {
    try {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 3, g: 2, b: 19, alpha: 1 } // #030213
        })
        .toFile(path.join(outputDir, name));
      console.log(`✅ Generated: ${name}`);
    } catch (error) {
      console.error(`❌ Error generating ${name}:`, error);
    }
  }
}

generateFavicons();
```

Run with:
```bash
node scripts/generate-favicons.js
```

---

## 🚨 Issue #2: Optimize Portfolio Images

### Problem
Portfolio images are 1.3MB - 2.0MB each (total 8MB). Should be < 300KB each.

### Quick Fix Steps

#### Option A: Use Squoosh (Manual - 30 minutes)

1. **Go to:** https://squoosh.app/
2. **Upload each image** one by one
3. **Settings:**
   - Format: WebP
   - Quality: 80-85
   - Resize: Max width 1920px
4. **Download** and replace in `/public/images/`
5. **Rename** to keep `.png` extension (Next.js handles WebP)

#### Option B: Use ImageMagick (Batch - 5 minutes)

```bash
cd /home/user/bruxStudio/public/images

# Backup originals
mkdir -p originals
cp *.png originals/

# Optimize all portfolio images
for img in Maison_elegant.png sakura.png termo.png ubunye.png; do
  echo "Optimizing $img..."
  convert "$img" \
    -resize 1920x1920\> \
    -quality 85 \
    -strip \
    "optimized_$img"

  # Check size reduction
  original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img")
  new_size=$(stat -f%z "optimized_$img" 2>/dev/null || stat -c%s "optimized_$img")
  reduction=$((100 - (new_size * 100 / original_size)))
  echo "  Reduced by $reduction%"

  # Replace original
  mv "optimized_$img" "$img"
done

# Optimize logo and profile pic
convert logo.png -resize 800x800\> -quality 85 -strip logo_optimized.png
mv logo_optimized.png logo.png

convert io.png -resize 1200x1600\> -quality 85 -strip io_optimized.png
mv io_optimized.png io.png

echo "✅ All images optimized!"
```

#### Option C: Use Sharp (Node Script - Automated)

Create `scripts/optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const largeImages = [
  'Maison_elegant.png',
  'sakura.png',
  'termo.png',
  'ubunye.png',
  'logo.png',
  'io.png'
];

async function optimizeImage(filename, maxWidth = 1920, quality = 85) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(imagesDir, `optimized_${filename}`);

  try {
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);

    const newStats = await fs.stat(outputPath);
    const newSize = newStats.size;
    const reduction = Math.round((1 - newSize / originalSize) * 100);

    console.log(`✅ ${filename}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (-${reduction}%)`);

    // Replace original
    await fs.rename(outputPath, inputPath.replace('.png', '.webp'));

  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const filename of largeImages) {
    await optimizeImage(filename);
  }

  console.log('\n✅ All images optimized!');
}

main();
```

Run with:
```bash
npm install sharp
node scripts/optimize-images.js
```

---

## 🚨 Issue #3: Fix OG Image Dimensions

### Problem
Current: 1024x1024px (square)
Required: 1200x630px (landscape)

### Quick Fix Steps

#### Option A: Online Tool (5 minutes)

1. **Go to:** https://www.canva.com/
2. **Create** custom size: 1200 x 630 px
3. **Upload** logo.png
4. **Center** and add branding text
5. **Export** as JPG (< 300KB)
6. **Save** as `/public/og-image.jpg`

#### Option B: ImageMagick (1 minute)

```bash
cd /home/user/bruxStudio/public

# Create 1200x630 canvas with brand color
convert -size 1200x630 xc:#030213 bg.jpg

# Add logo centered
convert bg.jpg images/logo.png \
  -gravity center \
  -geometry 600x600 \
  -composite \
  og-image-new.jpg

# Optimize
convert og-image-new.jpg -quality 85 -strip og-image.jpg

# Verify size
ls -lh og-image.jpg
```

#### Option C: Figma (Professional - 15 minutes)

1. **Create frame:** 1200 x 630 px
2. **Add background:** #030213
3. **Add logo:** Centered
4. **Add text:** "Brux Studio | Web Agency Carpi"
5. **Export:** JPG 85% quality
6. **Save** as `/public/og-image.jpg`

---

## 🚨 Issue #4: Fix Social Media URLs

### Problem
URLs contain spaces: `"https://facebook.com/brux Studio"`

### Quick Fix (2 minutes)

```bash
# Open layout.tsx
nano app/layout.tsx

# Find line 153, replace:
"https://facebook.com/brux Studio"
# With:
"https://facebook.com/bruxstudio"

# Find line 59 in app/page.tsx, same fix
nano app/page.tsx
```

Or use sed:
```bash
cd /home/user/bruxStudio

# Fix in layout.tsx
sed -i 's|facebook.com/brux Studio|facebook.com/bruxstudio|g' app/layout.tsx

# Fix in page.tsx
sed -i 's|facebook.com/brux Studio|facebook.com/bruxstudio|g' app/page.tsx

echo "✅ Facebook URLs fixed!"
```

---

## 🚨 Issue #5: Add Methodology Metadata

### Problem
`app/methodology/page.tsx` is missing metadata export.

### Quick Fix (5 minutes)

Create a wrapper component or add metadata to parent layout.

**Option A: Create Server Component Wrapper**

```typescript
// app/methodology/page.tsx
import { Metadata } from 'next'
import { MethodologyClient } from './MethodologyClient'

export const metadata: Metadata = {
  title: 'Metodologia BRUX - Framework Strategico per Progetti Web',
  description: 'Scopri il framework BRUX: Brief, Research, Uncover, eXecution. Un approccio strutturato e partnership-based per garantire il successo dei progetti web.',
  keywords: ['metodologia brux', 'framework sviluppo web', 'brief research uncover execution', 'metodologia agile', 'partnership web development'],
  alternates: {
    canonical: 'https://bruxstudio.it/methodology',
  },
  openGraph: {
    title: 'Metodologia BRUX - Brux Studio',
    description: 'Framework strategico per lo sviluppo di progetti web di successo',
    url: 'https://bruxstudio.it/methodology',
    type: 'website',
  },
}

export default function MethodologyPage() {
  return <MethodologyClient />
}
```

Then rename current component to `MethodologyClient.tsx`.

---

## 🚨 Issue #6: Update Sitemap Dates

### Quick Fix (1 minute)

```bash
cd /home/user/bruxStudio/public

# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

# Update sitemap
sed -i "s|2025-10-27|$CURRENT_DATE|g" sitemap.xml

echo "✅ Sitemap dates updated to $CURRENT_DATE"
```

---

## 📋 Complete Quick Fix Script

Save as `scripts/quick-fix.sh`:

```bash
#!/bin/bash

echo "🚀 Brux Studio - Critical Fixes Script"
echo "========================================"
echo ""

# Change to project root
cd /home/user/bruxStudio

# Fix 1: Social Media URLs
echo "🔧 Fixing social media URLs..."
sed -i 's|facebook.com/brux Studio|facebook.com/bruxstudio|g' app/layout.tsx
sed -i 's|facebook.com/brux Studio|facebook.com/bruxstudio|g' app/page.tsx
echo "✅ Social media URLs fixed"
echo ""

# Fix 2: Update Sitemap Dates
echo "🔧 Updating sitemap dates..."
CURRENT_DATE=$(date +%Y-%m-%d)
sed -i "s|2025-10-27|$CURRENT_DATE|g" public/sitemap.xml
echo "✅ Sitemap dates updated to $CURRENT_DATE"
echo ""

# Fix 3: Optimize Images (requires ImageMagick)
if command -v convert &> /dev/null; then
  echo "🔧 Optimizing images..."
  cd public/images

  for img in Maison_elegant.png sakura.png termo.png ubunye.png; do
    if [ -f "$img" ]; then
      echo "  Optimizing $img..."
      convert "$img" -resize 1920x1920\> -quality 85 -strip "temp_$img"
      mv "temp_$img" "$img"
    fi
  done

  echo "✅ Images optimized"
  cd ../..
else
  echo "⚠️  ImageMagick not installed - skipping image optimization"
  echo "   Install with: apt-get install imagemagick"
fi
echo ""

# Fix 4: Generate Basic Favicons (requires ImageMagick)
if command -v convert &> /dev/null; then
  echo "🔧 Generating favicons..."
  cd public

  convert images/logo.png -resize 16x16 favicon-16x16.png
  convert images/logo.png -resize 32x32 favicon-32x32.png
  convert images/logo.png -resize 180x180 apple-touch-icon.png
  convert images/logo.png -resize 192x192 icon-192x192.png
  convert images/logo.png -resize 512x512 icon-512x512.png

  echo "✅ Favicons generated"
  cd ..
else
  echo "⚠️  ImageMagick not installed - skipping favicon generation"
fi
echo ""

echo "=========================================="
echo "✅ Quick fixes complete!"
echo ""
echo "⚠️  Manual steps still required:"
echo "   1. Create proper OG image (1200x630px)"
echo "   2. Add Google/Yandex verification codes"
echo "   3. Add methodology metadata"
echo "   4. Test build: npm run build"
echo ""
```

Make executable and run:
```bash
chmod +x scripts/quick-fix.sh
./scripts/quick-fix.sh
```

---

## 🎯 Verification Checklist

After running fixes, verify:

```bash
# 1. Check favicons exist
ls -lh public/*.png public/*.ico

# 2. Check image sizes
du -sh public/images/*.png

# 3. Check OG image dimensions
file public/og-image.jpg

# 4. Verify no spaces in URLs
grep -r "brux Studio" app/

# 5. Check sitemap date
grep "lastmod" public/sitemap.xml

# 6. Test build
npm run build
```

Expected output:
- ✅ All favicon files present (6-8 files)
- ✅ All images < 500KB (except maybe logo)
- ✅ OG image: 1200x630px
- ✅ No "brux Studio" found
- ✅ Sitemap has current date
- ✅ Build completes successfully

---

## ⏱️ Estimated Time

- **Automated fixes:** 5 minutes
- **Manual image optimization:** 30 minutes
- **OG image creation:** 15 minutes
- **Favicon generation:** 10 minutes
- **Testing:** 10 minutes

**Total: ~70 minutes**

---

## 🆘 Need Help?

If you encounter issues:

1. **Check dependencies:**
   ```bash
   npm install
   ```

2. **Check ImageMagick:**
   ```bash
   convert --version
   ```

3. **Check file permissions:**
   ```bash
   chmod -R 755 public/
   ```

4. **Review error logs:**
   ```bash
   npm run build 2>&1 | tee build.log
   ```

---

## ✅ Ready for Deployment?

Once all fixes are complete:

```bash
# Final build test
npm run build

# Check output size
du -sh out/

# Deploy to Hostinger
# (Upload /out directory contents to public_html)
```

Target output size: < 5MB (currently ~8-9MB before optimization)

---

**Good luck with your deployment! 🚀**
