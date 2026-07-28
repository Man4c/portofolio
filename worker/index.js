import {
  apiNotFound,
  handleContactPost,
  methodNotAllowed,
} from "../server/contact.js";

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

    return env.ASSETS.fetch(request);
  },
};
