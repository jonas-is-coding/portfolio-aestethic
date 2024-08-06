import { baseUrl } from "@/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/about", "/projects", "/releases", "/blog", "/contact"],
            disallow: [], 
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}