const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')

const cssFiles = [
  'public/assets/css/vendor/bootstrap.min.css',
  'public/assets/css/vendor/fontawesome.css',
  'public/assets/css/vendor/aos.css',
  'public/assets/css/vendor/magnific-popup.css',
  'public/assets/css/vendor/slick-slider.css',
  'public/assets/css/vendor/nice-select.css',
  'public/assets/css/vendor/odometer.css',
  'public/assets/css/vendor/mobile.css',
  'public/assets/css/vendor/sidebar.css',
  'public/assets/css/main.css',
]

console.log('🔄 Bundling CSS files...\n')

let combined = ''

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8')
    
    // ลบ @import ของ Google Fonts (จะโหลดแยกใน layout)
    content = content.replace(/@import\s+url\(['"]?https?:\/\/fonts\.googleapis\.com[^;]+;/g, '')
    
    // แก้ไข comment ที่ผิดรูปแบบ
    content = content.replace(/\/\*([^*]|\*(?!\/))*\*?\*\//g, (match) => {
      return match.replace(/\*\//g, '* /') // เพิ่มช่องว่าง
    })
    
    combined += `\n/* ========== ${path.basename(file)} ========== */\n`
    combined += content + '\n'
    
    console.log(`✓ ${file}`)
  } else {
    console.warn(`✗ Not found: ${file}`)
  }
})

// แก้ path รูปภาพ
combined = combined.replace(/url\(['"]?\.\.\/img\//g, 'url(\'/img/')
combined = combined.replace(/url\(['"]?\.\.\/\.\.\/img\//g, 'url(\'/img/')
combined = combined.replace(/url\(['"]?\.\.\/images\//g, 'url(\'/images/')
combined = combined.replace(/url\(['"]?\.\.\/\.\.\/images\//g, 'url(\'/images/')
combined = combined.replace(/url\(['"]?\.\.\/fonts\//g, 'url(\'/fonts/')
combined = combined.replace(/url\(['"]?\.\.\/assets\//g, 'url(\'/assets/')

// บันทึก bundle ธรรมดาก่อน
const normalPath = 'public/assets/css/bundle.css'
fs.writeFileSync(normalPath, combined)
console.log(`\n✅ Bundle created: ${normalPath}`)

// Minify แบบระมัดระวัง
console.log('🔧 Minifying...\n')

const minified = new CleanCSS({
  level: {
    1: {
      cleanupCharsets: true,
      normalizeUrls: true,
      optimizeBackground: true,
      optimizeBorderRadius: true,
      optimizeFilter: true,
      optimizeFont: true,
      optimizeFontWeight: true,
      optimizeOutline: true,
      removeEmpty: true,
      removeNegativePaddings: true,
      removeQuotes: true,
      removeWhitespace: true,
      replaceMultipleZeros: true,
      replaceTimeUnits: true,
      replaceZeroUnits: true,
      roundingPrecision: 2,
      selectorsSortingMethod: 'standard',
      specialComments: 'all',
      tidyAtRules: true,
      tidyBlockScopes: true,
      tidySelectors: true
    },
    2: {
      mergeAdjacentRules: true,
      mergeIntoShorthands: true,
      mergeMedia: true,
      mergeNonAdjacentRules: true,
      mergeSemantically: false,
      overrideProperties: true,
      removeEmpty: true,
      reduceNonAdjacentRules: true,
      removeDuplicateFontRules: true,
      removeDuplicateMediaBlocks: true,
      removeDuplicateRules: true,
      removeUnusedAtRules: false,
      restructureRules: false,
      skipProperties: []
    }
  },
  compatibility: 'ie9',
  inline: ['local'],
  rebaseTo: 'public'
}).minify(combined)

if (minified.errors.length > 0) {
  console.error('❌ Minification errors:')
  minified.errors.forEach(err => console.error('  -', err))
  
  // ถ้ามี error ให้ใช้ไฟล์ bundle ธรรมดาแทน
  console.log('\n⚠️  Using non-minified bundle due to errors')
  fs.copyFileSync(normalPath, 'public/assets/css/bundle.min.css')
} else {
  if (minified.warnings.length > 0) {
    console.warn('⚠️  Warnings:')
    minified.warnings.forEach(warn => console.warn('  -', warn))
  }
  
  const minPath = 'public/assets/css/bundle.min.css'
  fs.writeFileSync(minPath, minified.styles)
  
  const originalSize = Buffer.byteLength(combined, 'utf8')
  const minifiedSize = Buffer.byteLength(minified.styles, 'utf8')
  const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(2)
  
  console.log(`\n✅ Minified bundle created: ${minPath}`)
  console.log(`📦 Original: ${(originalSize / 1024).toFixed(2)} KB`)
  console.log(`📦 Minified: ${(minifiedSize / 1024).toFixed(2)} KB`)
  console.log(`💾 Saved: ${savings}%`)
}

console.log(`\n💡 Use: <link rel="stylesheet" href="/assets/css/bundle.min.css" />`)