/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_kKucGw99.mjs';
import 'kleur/colors';
import { $ as $$MainContent, a as $$Footer, b as $$Layout } from '../chunks/Layout_BB1Bf04D.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bhaskar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContent", $$MainContent, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/pages/blog.astro", undefined);

const $$file = "D:/Coding-Folder/k/bhaskar.lol/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
