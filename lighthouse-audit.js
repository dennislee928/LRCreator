const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLighthouse(url, outputPath) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  try {
    const runnerResult = await lighthouse(url, options);
    const reportJson = runnerResult.report;
    
    fs.writeFileSync(outputPath, reportJson);
    console.log(`Lighthouse report saved to ${outputPath}`);
    
    const scores = runnerResult.lhr.categories;
    console.log('\n=== Lighthouse Scores ===');
    console.log(`Performance: ${Math.round(scores.performance.score * 100)}`);
    console.log(`Accessibility: ${Math.round(scores.accessibility.score * 100)}`);
    console.log(`Best Practices: ${Math.round(scores['best-practices'].score * 100)}`);
    console.log(`SEO: ${Math.round(scores.seo.score * 100)}`);
    
  } finally {
    await chrome.kill();
  }
}

// 執行審計
const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/zh-hant/'
];

urls.forEach((url, index) => {
  const outputPath = `lighthouse-report-${index + 1}.json`;
  runLighthouse(url, outputPath).catch(console.error);
}); 