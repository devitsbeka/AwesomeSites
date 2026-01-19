'use client';

import { useState, useMemo } from 'react';
import { sites, categories, type Category } from '@/data/sites';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
      const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: sites.length };
    sites.forEach(site => {
      counts[site.category] = (counts[site.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="/" className="logo">
            <span className="logo-icon">✨</span>
            <span>Awesome Sites</span>
          </a>

          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search sites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="stats">
            <div className="stat">
              <span>Sites:</span>
              <span className="stat-value">{sites.length}</span>
            </div>
            <div className="stat">
              <span>Categories:</span>
              <span className="stat-value">{categories.length - 1}</span>
            </div>
          </div>

          <a
            href="https://github.com/ezshine/AwesomeSites"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="nav">
        <div className="nav-content">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              <span className="category-count">({categoryCounts[category] || 0})</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        <p className="section-title">
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : selectedCategory === 'All'
            ? 'All Sites'
            : selectedCategory}
          {' '}— {filteredSites.length} sites
        </p>

        {filteredSites.length > 0 ? (
          <div className="sites-grid">
            {filteredSites.map((site, index) => (
              <a
                key={`${site.name}-${index}`}
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="site-card"
              >
                <div className="site-card-image">
                  <img
                    src={site.screenshot}
                    alt={site.name}
                    loading="lazy"
                  />
                  <div className="site-card-overlay">
                    <span className="view-repo-btn">View Repository</span>
                  </div>
                </div>
                <div className="site-card-info">
                  <h3 className="site-card-name">{site.name}</h3>
                  <span className="site-card-category">{site.category}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <p>No sites found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Created by <a href="https://twitter.com/ezshine" target="_blank" rel="noopener noreferrer">@ezshine</a>
          {' '}• Backup amazing websites for learning and inspiration
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href="https://github.com/ezshine/AwesomeSites" target="_blank" rel="noopener noreferrer">
            Star on GitHub
          </a>
          {' '}•{' '}
          <a href="https://www.producthunt.com/posts/awesome-sites" target="_blank" rel="noopener noreferrer">
            Upvote on Product Hunt
          </a>
        </p>
      </footer>
    </>
  );
}
