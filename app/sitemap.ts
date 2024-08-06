// sitemap.ts
export default async function sitemap() {
    return [
        {
            url: 'https://jonasbrahmst.com/',
            lastModified: new Date().toISOString(), 
        },
        {
            url: 'https://jonasbrahmst.com/about',
            lastModified: new Date().toISOString(), 
        },
        {
            url: 'https://jonasbrahmst.com/projects',
            lastModified: new Date().toISOString(), 
        },
        {
            url: 'https://jonasbrahmst.com/releases',
            lastModified: new Date().toISOString(), 
        },
        {
            url: 'https://jonasbrahmst.com/blog',
            lastModified: new Date().toISOString(), 
        },
        {
            url: 'https://jonasbrahmst.com/contact',
            lastModified: new Date().toISOString(), 
        },
    ];
}