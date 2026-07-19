#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for web performance using sharp
 *
 * Usage: node scripts/optimize-images.js
 *
 * Requirements:
 * - Install sharp: npm install sharp
 * - Place images in public/images/ directory
 * - Run script to optimize all images
 */

const sharp = require('sharp')
const fs = require('node:fs')
const path = require('node:path')

// Configuration
const config = {
  inputDir: 'public/images',
  outputDir: 'public/images/optimized',
  formats: ['webp', 'jpg'],
  quality: {
    webp: 80,
    jpg: 75,
  },
  sizes: {
    profile: [400, 800],
    property: [800, 1200],
    hero: [1200, 1920],
    thumbnail: [300, 600],
  },
}

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true })
}

/**
 * Optimize a single image
 */
async function optimizeImage(
  inputPath,
  outputPath,
  format,
  quality,
  width,
  height
) {
  try {
    const image = sharp(inputPath)

    if (width && height) {
      image.resize(width, height, {
        fit: 'cover',
        position: 'center',
      })
    }

    if (format === 'webp') {
      await image.webp({ quality }).toFile(outputPath)
      return
    }
    if (format === 'jpg') {
      await image.jpeg({ quality }).toFile(outputPath)
      return
    }

    console.log(`✅ Optimized: ${outputPath}`)
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message)
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath)

  for (const item of items) {
    const fullPath = path.join(dirPath, item)
    const relativeItemPath = path.join(relativePath, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath, relativeItemPath)
    } else if (stat.isFile() && isImageFile(item)) {
      // Process image files
      await processImageFile(fullPath, relativeItemPath)
    }
  }
}

/**
 * Check if file is an image
 */
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']
  const ext = path.extname(filename).toLowerCase()
  return imageExtensions.includes(ext)
}

/**
 * Process a single image file
 */
async function processImageFile(inputPath, relativePath) {
  const filename = path.basename(relativePath, path.extname(relativePath))
  const outputDir = path.join(config.outputDir, path.dirname(relativePath))

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Determine image type and size
  const imageType = getImageType(relativePath)
  const sizes = config.sizes[imageType] || config.sizes.thumbnail

  // Process each format and size
  for (const format of config.formats) {
    for (const size of sizes) {
      const outputFilename = `${filename}-${size}x${size}.${format}`
      const outputPath = path.join(outputDir, outputFilename)

      await optimizeImage(
        inputPath,
        outputPath,
        format,
        config.quality[format],
        size,
        size
      )
    }
  }
}

/**
 * Determine image type based on path
 */
function getImageType(relativePath) {
  if (relativePath.includes('/agents/') || relativePath.includes('/team/')) {
    return 'profile'
  } else if (relativePath.includes('/properties/')) {
    return 'property'
  } else if (relativePath.includes('/neighborhoods/')) {
    return 'hero'
  } else {
    return 'thumbnail'
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting image optimization...')
  console.log(`📁 Input directory: ${config.inputDir}`)
  console.log(`📁 Output directory: ${config.outputDir}`)
  console.log(`🖼️  Formats: ${config.formats.join(', ')}`)
  console.log('')

  try {
    await processDirectory(config.inputDir)
    console.log('')
    console.log('✅ Image optimization completed successfully!')
    console.log(`📊 Check ${config.outputDir} for optimized images`)
  } catch (error) {
    console.error('❌ Error during optimization:', error)
    process.exit(1)
  }
}

// Run the script
if (require.main === module) {
  main()
}

module.exports = { optimizeImage, processDirectory }
