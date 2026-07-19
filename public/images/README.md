# 🖼️ Images Directory - Optimized Structure

## 📁 Directory Organization

### `/images/`
- **`/photos/`** - Professional photos and headshots
- **`/properties/`** - Real estate property images
- **`/neighborhoods/`** - Neighborhood and community photos
- **`/team/`** - Team member photos
- **`/logos/`** - Brand logos and graphics
- **`/icons/`** - Custom icons and UI elements

### `/images/photos/`
- **`/agents/`** - Real estate agent photos
- **`/clients/`** - Client testimonials (with permission)
- **`/events/`** - Community events and activities

### `/images/properties/`
- **`/featured/`** - Featured property listings
- **`/sold/`** - Recently sold properties
- **`/virtual-tours/`** - Virtual tour thumbnails

## 🚀 Optimization Guidelines

### Image Formats
- **Photos**: Use WebP with JPG fallback
- **Icons**: Use SVG for scalability
- **Graphics**: Use PNG for transparency needs

### Sizing Standards
- **Profile Photos**: 400x400px (1:1 ratio)
- **Property Photos**: 1200x800px (3:2 ratio)
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Thumbnails**: 300x200px (3:2 ratio)

### File Naming Convention
- **Format**: `category-description-size.webp`
- **Examples**: 
  - `agent-jan-duffy-profile-400x400.webp`
  - `property-green-valley-luxury-1200x800.webp`
  - `neighborhood-anthem-aerial-1920x1080.webp`

### Performance Optimization
- **Compression**: Optimize all images for web
- **Lazy Loading**: Implement for property galleries
- **Responsive Images**: Provide multiple sizes
- **CDN Ready**: Optimize for Vercel CDN delivery

## 📸 Current Images

### Profile Photos
- `dr-jan-duffy-placeholder.svg` - Agent placeholder (optimized SVG)

### Icons
- `globe.svg` - Global/International icon
- `window.svg` - Window/View icon
- `file.svg` - Document icon

## 🔧 Usage Examples

```jsx
// Optimized image component usage
import Image from 'next/image'

<Image
  src="/images/photos/agents/jan-duffy-profile-400x400.webp"
  alt="Dr. Jan Duffy - Henderson REALTOR"
  width={400}
  height={400}
  className="rounded-full"
  priority={true}
/>
```

## 📊 Performance Metrics

- **Target Load Time**: <2 seconds
- **Image Compression**: 70-80% quality
- **Format Priority**: WebP > JPG > PNG
- **Lazy Loading**: Below-fold images only
- **CDN Optimization**: Vercel edge caching
