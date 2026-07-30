import {
  apiNotFound,
  handleContactPost,
  methodNotAllowed,
} from "../server/contact.js";
import { BLOG_META, renderArticleHtml } from "../server/blog-meta.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return request.method === "POST"
        ? handleContactPost(request, env)
        : methodNotAllowed();
    }

    if (url.pathname.startsWith("/api/")) {
      return apiNotFound();
    }

    const articleMatch = url.pathname.match(/^\/blog\/([^/]+)\/?$/);

    if (articleMatch) {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", {
          status: 405,
          headers: { Allow: "GET, HEAD" },
        });
      }

      const slug = decodeURIComponent(articleMatch[1]);
      const article = BLOG_META[slug];

      if (!article) {
        if (slug.includes(".")) {
          return env.ASSETS.fetch(request);
        }

        return new Response("Artikel tidak ditemukan.", {
          status: 404,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }

      const indexUrl = new URL("/index.html", request.url);
      const indexResponse = await env.ASSETS.fetch(
        new Request(indexUrl, { method: "GET", headers: request.headers }),
      );
      const html = renderArticleHtml(await indexResponse.text(), slug, article);

      return new Response(request.method === "HEAD" ? null : html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=0, must-revalidate",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
