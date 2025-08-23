/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, g as renderSlot, e as createAstro, d as renderComponent, b as renderTransition } from '../chunks/astro/server_kKucGw99.mjs';
import 'kleur/colors';
import { $ as $$MainContent, a as $$Footer, b as $$Layout } from '../chunks/Layout_BB1Bf04D.mjs';
import { $ as $$ProfileHeader } from '../chunks/profile-header_CPHS03N0.mjs';
import 'clsx';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$IconLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconLayout;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/layouts/IconLayout.astro", undefined);

const $$Astro$1 = createAstro();
const $$UserPen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserPen;
  return renderTemplate`${renderComponent($$result, "IconLayout", $$IconLayout, { "iconName": "user-pen", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.5 15H7a4 4 0 0 0-4 4v2"></path> <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path> <circle cx="10" cy="7" r="4"></circle> ` })}`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/icons/UserPen.astro", undefined);

const $$ElementGlow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="element-glow absolute inset-0 rounded-lg mask-border pointer-events-none"></div>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/ui/element-glow.astro", undefined);

const $$AboutCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-200 relative"> <!-- grain --> <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');"></div> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent"></div> <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-theme-foreground dark:text-white"> ${renderComponent($$result, "UserPen", $$UserPen, { "size": "20", "class": "text-indigo-400 stroke-[3px]" })}
About Me
</h2> <p class="font-normal text-base leading-relaxed text-theme-foreground-secondary dark:text-gray-300">
Hi, I’m Bhaskar, a passionate developer who loves bringing ideas to life through code. I enjoy building, experimenting, and solving problems with technology. Beyond coding, I love expressing myself by writing and sharing my thoughts.
</p> ${renderComponent($$result, "ElementGlow", $$ElementGlow, {})} </div>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/cards/about-card.astro", undefined);

const $$Astro = createAstro();
const $$Award = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Award;
  return renderTemplate`${renderComponent($$result, "IconLayout", $$IconLayout, { "iconName": "award", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path> <circle cx="12" cy="8" r="6"></circle> ` })}`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/icons/Award.astro", undefined);

const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 transition-all duration-300 relative overflow-hidden"> <!-- grain --> <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');"></div> <div class="relative z-10"> <h3 class="text-lg font-bold mb-2 flex items-center gap-2 text-theme-foreground dark:text-white"> ${renderComponent($$result, "Award", $$Award, { "size": "20", "class": "text-indigo-400 stroke-[3px]" })}
Skills
</h3> <div class="flex flex-wrap gap-2 mt-3"> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
Python
</span> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
Typescript
</span> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
React
</span> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
Javascript
</span> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
PHP
</span> <span class="px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-xs text-theme-foreground dark:text-white border border-black/5 dark:border-white/5 hover:border-indigo-500/40 transition-colors">
Postgres
</span> </div> </div> <div class="element-glow absolute inset-0 rounded-lg mask-border pointer-events-none"></div> </div>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/cards/skill-card.astro", undefined);

const $$ActivityCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative backdrop-blur-md bg-white/30 dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-xl p-6 min-h-36"> <!-- grain --> <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');"></div> <h3 class="text-lg font-bold mb-2 flex items-center gap-2 text-theme-foreground dark:text-white">
Current Activity
</h3> ${renderComponent($$result, "DiscordActivity", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Coding-Folder/k/bhaskar.lol/src/components/discord-activity/discord-activity", "client:component-export": "DiscordActivity" })} ${renderComponent($$result, "ElementGlow", $$ElementGlow, {})} </div>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/cards/activity-card.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bhaskar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContent", $$MainContent, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="mainCard" class="relative backdrop-blur-xl bg-theme-card border border-theme-card-border rounded-2xl overflow-hidden shadow-2xl overflow-y-auto dark:bg-black/25 dark:border-white/10"${addAttribute(renderTransition($$result3, "benpfmuv", "fade", "main-card"), "data-astro-transition-scope")}> <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 mix-blend-overlay pointer-events-none opacity-50 dark:opacity-50"></div> <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');"></div> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"></div> ${renderComponent($$result3, "ProfileHeader", $$ProfileHeader, {})} <div class="p-8 space-y-8 relative"> <!-- <div class="absolute -top-px left-0 right-0 h-8 bg-gradient-to-b from-black/5 dark:hidden to-transparent pointer-events-none"></div> --> ${renderComponent($$result3, "AboutCard", $$AboutCard, {})} <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result3, "SkillsCard", $$SkillCard, {})} ${renderComponent($$result3, "ActivityCard", $$ActivityCard, {})} </div> </div> </div> ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/pages/index.astro", "self");

const $$file = "D:/Coding-Folder/k/bhaskar.lol/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
