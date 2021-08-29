const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@edooking/ui']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextJsConfig = {
  target: 'serverless',
};

module.exports = withPlugins(
  [withTM, withOptimizedImages, withFonts],
  nextJsConfig,
);
