/* empty css                                */
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute, b as renderTransition } from '../chunks/astro/server_kKucGw99.mjs';
import 'kleur/colors';
import { $ as $$MainContent, a as $$Footer, b as $$Layout } from '../chunks/Layout_BB1Bf04D.mjs';
import { $ as $$ProfileHeader } from '../chunks/profile-header_CPHS03N0.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Sources = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sources;
  const digitalPhilosophy = [
    {
      title: "Code with Purpose",
      description: "Every line of code should solve a real problem",
      icon: "\u{1F4A1}",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Continuous Learning",
      description: "The day you stop learning is the day you fall behind",
      icon: "\u{1F680}",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "User-Centric Design",
      description: "Beautiful interfaces that users actually want to use",
      icon: "\u{1F3A8}",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Open Source Spirit",
      description: "Building together, sharing knowledge, growing as one",
      icon: "\u{1F31F}",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];
  const favoriteTools = [
    { name: "TypeScript", emoji: "\u26A1" },
    { name: "React", emoji: "\u269B\uFE0F" },
    { name: "Astro", emoji: "\u{1F680}" },
    { name: "Tailwind", emoji: "\u{1F3A8}" },
    { name: "VS Code", emoji: "\u{1F4BB}" },
    { name: "Git", emoji: "\u{1F4DD}" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bhaskar" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainContent", $$MainContent, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="mainCard" class="relative backdrop-blur-xl bg-theme-card border border-theme-card-border rounded-2xl overflow-hidden shadow-2xl overflow-y-auto dark:bg-black/25 dark:border-white/10"${addAttribute(renderTransition($$result3, "opgmsc7b", "fade", "main-card"), "data-astro-transition-scope")}> <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 mix-blend-overlay pointer-events-none opacity-50"></div> <div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');"></div> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent"></div> ${renderComponent($$result3, "ProfileHeader", $$ProfileHeader, {})} <div class="p-8 space-y-8 relative"> <!-- Digital Philosophy Section --> <div> <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-theme-foreground dark:text-white"> <span class="text-2xl">🧠</span>
Digital Philosophy
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${digitalPhilosophy.map((item) => renderTemplate`<div${addAttribute(`group relative p-6 bg-gradient-to-br ${item.color} border border-black/10 dark:border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm`, "class")}> <div class="flex items-start gap-4"> <span class="text-3xl flex-shrink-0">${item.icon}</span> <div> <h3 class="font-semibold text-lg mb-2 text-theme-foreground dark:text-white"> ${item.title} </h3> <p class="text-sm text-theme-foreground/70 dark:text-white/70 leading-relaxed"> ${item.description} </p> </div> </div> </div>`)} </div> </div> <!-- Favorite Tools Section --> <div> <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-theme-foreground dark:text-white"> <span class="text-2xl">🛠️</span>
Favorite Tools
</h2> <div class="flex flex-wrap gap-3"> ${favoriteTools.map((tool) => renderTemplate`<div class="group flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/15 hover:scale-105"> <span class="text-lg">${tool.emoji}</span> <span class="font-medium text-theme-foreground dark:text-white"> ${tool.name} </span> </div>`)} </div> </div> <!-- Credits Section --> <div class="mt-12 pt-6 border-t border-black/10 dark:border-white/10"> <p class="text-center text-sm text-theme-foreground/60 dark:text-white/60 italic">
Crafted With ❤️ By Bhaskar
</p> </div> </div> </div> ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/pages/sources.astro", "self");

const $$file = "D:/Coding-Folder/k/bhaskar.lol/src/pages/sources.astro";
const $$url = "/sources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
