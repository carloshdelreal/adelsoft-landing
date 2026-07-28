import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * GitHub Pages + trailingSlash: a file at /sitemap.xml makes /sitemap.xml/ 404.
 * Convert the Next export file into a directory so both resolve:
 *   /sitemap.xml  → redirect to /sitemap.xml/
 *   /sitemap.xml/ → serves index.html (XML body)
 */
const outDir = path.resolve("out");
const sitemapFile = path.join(outDir, "sitemap.xml");
const sitemapDir = path.join(outDir, "sitemap.xml");
const stagingFile = path.join(outDir, ".sitemap.xml.body");

const xml = await readFile(sitemapFile, "utf8");
await rename(sitemapFile, stagingFile);
await mkdir(sitemapDir, { recursive: true });
await writeFile(path.join(sitemapDir, "index.html"), xml, "utf8");
await rm(stagingFile);

console.log("Prepared out/sitemap.xml/ for GitHub Pages trailing-slash URLs");
