import { baseUrl } from "@/constants";

// sitemap.ts
export default async function sitemap() {
    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(), 
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(), 
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date().toISOString(), 
        },
        {
            url: `${baseUrl}/releases`,
            lastModified: new Date().toISOString(), 
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(), 
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(), 
        },
    ];
}