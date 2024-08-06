import { NextApiRequest, NextApiResponse } from 'next';
import sitemap from '@/app/sitemap';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sitemapData = await sitemap();
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapData
        .map((item) => {
            return `
                <url>
                    <loc>${item.url}</loc>
                    <lastmod>${item.lastModified}</lastmod>
                </url>
            `;
        })
        .join('')}
</urlset>`;
    res.setHeader('Content-Type', 'application/xml');
    res.write(xml);
    res.end();
};