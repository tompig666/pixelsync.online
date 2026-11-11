import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/data-use", "/about", "/contact", "/privacy", "/terms"].map(path=>({url:`https://pixelsync.online${path}`,lastModified:new Date("2026-11-11"),changeFrequency:path?"monthly":"weekly",priority:path?0.8:1})); }
