import { sites } from '@/data/sites';
import SiteViewerClient from './client';

export function generateStaticParams() {
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export default function SiteViewerPage({ params }: { params: { slug: string } }) {
  const site = sites.find(s => s.slug === params.slug);
  return <SiteViewerClient site={site} />;
}
