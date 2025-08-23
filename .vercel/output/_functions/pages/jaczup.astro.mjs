/* empty css                                */
import { c as createComponent, e as createAstro } from '../chunks/astro/server_kKucGw99.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Jaczup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Jaczup;
  return Astro2.redirect("https://bhaskar.lol");
}, "D:/Coding-Folder/k/bhaskar.lol/src/pages/jaczup.astro", undefined);

const $$file = "D:/Coding-Folder/k/bhaskar.lol/src/pages/jaczup.astro";
const $$url = "/jaczup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Jaczup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
