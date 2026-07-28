import {
  handleContactPost,
  methodNotAllowed,
} from "../../server/contact.js";

export function onRequestPost({ request, env }) {
  return handleContactPost(request, env);
}

export function onRequest() {
  return methodNotAllowed();
}
