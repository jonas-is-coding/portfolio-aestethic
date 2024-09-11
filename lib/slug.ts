import NotFound from "@/app/not-found";
import { SLUGROUTES } from "@/constants"

export const getPageBySlug = (slug: string) => {
    const route = SLUGROUTES.find(route => route.label === slug);
    return route ? route.component : NotFound;
};