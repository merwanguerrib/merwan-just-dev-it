module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
      url: [
        'http://localhost/',
        'http://localhost/en/',
        'http://localhost/services/website/',
        'http://localhost/services/app/',
        'http://localhost/services/ai-automation/',
        'http://localhost/services/n8n/',
        'http://localhost/en/services/website/',
        'http://localhost/en/services/app/',
        'http://localhost/en/services/ai-automation/',
        'http://localhost/en/services/n8n/',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
