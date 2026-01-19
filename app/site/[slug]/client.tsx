'use client';

import { useRouter } from 'next/navigation';
import type { Site } from '@/data/sites';

export default function SiteViewerClient({ site }: { site: Site | undefined }) {
  const router = useRouter();

  if (!site) {
    return (
      <div className="viewer-container">
        <header className="viewer-header">
          <button onClick={() => router.push('/')} className="back-btn">
            <span>←</span>
            <span>Back to Sites</span>
          </button>
        </header>
        <div className="viewer-error">
          <h2>Site not found</h2>
          <p>The requested site could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="viewer-container">
      <header className="viewer-header">
        <button onClick={() => router.push('/')} className="back-btn">
          <span>←</span>
          <span>Back to Sites</span>
        </button>
        <div className="viewer-site-info">
          <h1>{site.name}</h1>
          <span className="viewer-category">{site.category}</span>
        </div>
        <div className="viewer-actions">
          {site.url && (
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="action-btn">
              Open in New Tab
            </a>
          )}
          <a href={site.repo} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
            View Source
          </a>
        </div>
      </header>

      <main className="viewer-main">
        {site.url ? (
          <iframe
            src={site.url}
            className="site-iframe"
            title={site.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="no-preview">
            <img src={site.screenshot} alt={site.name} className="preview-screenshot" />
            <div className="no-preview-overlay">
              <h2>Live preview not available</h2>
              <p>This site needs to be run locally. Clone the repository and use live-server.</p>
              <a href={site.repo} target="_blank" rel="noopener noreferrer" className="action-btn">
                View Repository
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
