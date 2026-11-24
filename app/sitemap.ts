import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/data-use", "/about", "/contact", "/privacy", "/terms"].map(path=>({url:`https://uusop.com${path}`,lastModified:new Date("2026-11-24"),changeFrequency:path?"monthly":"weekly",priority:path?0.8:1})); }
