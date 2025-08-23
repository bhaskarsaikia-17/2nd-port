import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro, g as renderSlot, d as renderComponent, a as addAttribute, h as renderScript, i as defineScriptVars, j as renderHead } from './astro/server_kKucGw99.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                        */
/* empty css                              */
import { twMerge } from 'tailwind-merge';

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative w-full py-6"> <div class="max-w-5xl mx-auto px-4 pt-8 pb-4 text-center text-white/40 text-sm"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Bhaskar • Built with Astro • Crafted With &lt;3 By Bhaskar</p> </div> </footer>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/footer.astro", undefined);

const $$NavigationBarProgressiveBlur = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- https://kennethnym.com/blog/progressive-blur-in-css/ thank u mai lover -->${maybeRenderHead()}<div class="progressive-blur-container" data-astro-cid-a46zcj5l> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="blur-filter" data-astro-cid-a46zcj5l></div> <div class="gradient" data-astro-cid-a46zcj5l></div> </div> `;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/navigation-bar-progressive-blur.astro", undefined);

const $$Astro$3 = createAstro();
const $$MainContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainContent;
  const { progressiveBlur } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="relative max-w-5xl px-4 h-full pt-28"> ${renderSlot($$result, $$slots["default"])} ${progressiveBlur && renderTemplate`${renderComponent($$result, "NavigationBarProgressiveBlur", $$NavigationBarProgressiveBlur, {})}`} </main>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/ui/main-content.astro", "self");

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Coding-Folder/k/bhaskar.lol/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Coding-Folder/k/bhaskar.lol/node_modules/astro/components/ClientRouter.astro", undefined);

const $$DotBackgroundWrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen w-full bg-theme-background bg-dot-theme-foreground-secondary/[0.2] relative flex justify-center"> <div class="fixed pointer-events-none inset-0 flex items-center justify-center bg-theme-background [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/ui/dot-background-wrapper.astro", undefined);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$1 = createAstro();
const $$NavigationBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  const routes = [
    { name: "Home", path: "/" },
    // { name: "Projects", path: "/projects" },
    // { name: "Blog", path: "/blog" },
    { name: "Experience", path: "/experience" },
    { name: "Sources", path: "/sources" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!-- i absolutely hate pseudo element effects -->${maybeRenderHead()}<div class="fixed bottom-8 md:top-8 md:bottom-full left-1/2 transform -translate-x-1/2 z-50 w-auto" data-astro-cid-r32mctp3> <div id="nav-wrapper" class="relative flex items-center justify-center" data-astro-cid-r32mctp3> <button id="scroll-to-top" class="absolute left-0 p-1.5 bg-theme-card-dark backdrop-blur-lg border border-theme-card-border rounded-full hover:bg-theme-card transition-all opacity-0 scale-0 transform -translate-x-[100%] origin-right" aria-label="Scroll to top" data-astro-cid-r32mctp3> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-theme-foreground-secondary" viewBox="0 0 16 16" data-astro-cid-r32mctp3> <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" data-astro-cid-r32mctp3></path> </svg> </button> <div id="nav-container-wrapper" class="relative transition-transform duration-300 transform translate-x-0" data-astro-cid-r32mctp3> <!-- glow --> <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-lg dark:opacity-50" data-astro-cid-r32mctp3></div> <!-- glass --> <nav id="nav-container" class="relative backdrop-blur-lg bg-theme-card-dark border border-theme-card-border rounded-full px-1.5 py-1.5 flex items-center shadow-xl transition-all duration-300 ease-out" data-astro-cid-r32mctp3> <!-- grain --> <div class="absolute inset-0 rounded-full opacity-10" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');" data-astro-cid-r32mctp3></div> <div id="nav-indicator" class="absolute top-1/2 -translate-y-1/2 h-[calc(100%-10px)] backdrop-blur-sm border-2 border-theme-card-border rounded-full" data-astro-cid-r32mctp3> <!-- gradient border --> <div class="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full -z-10 opacity-50" data-astro-cid-r32mctp3></div> <!-- inner glow --> <div class="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] shadow-theme-foreground/10" data-astro-cid-r32mctp3></div> <!-- grain --> <div class="absolute inset-0 rounded-full opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');" data-astro-cid-r32mctp3></div> </div> ${routes.map((route, idx) => renderTemplate`<a${addAttribute(route.path, "href")}${addAttribute(route.path, "data-path")}${addAttribute(idx, "data-index")}${addAttribute(currentPath === route.path, "data-active")}${addAttribute(cn(
    "nav-link relative px-4 rounded-full text-sm font-medium transition-colors duration-300 mx-1",
    currentPath === route.path ? "text-theme-foreground hover:text-theme-foreground" : "text-theme-foreground-secondary hover:text-theme-foreground"
  ), "class")} data-astro-cid-r32mctp3> <span class="relative z-10" data-astro-cid-r32mctp3>${route.name}</span> </a>`)} <button id="theme-toggle" class="ml-2 p-1.5 bg-theme-card-dark border dark:border-theme-card-border hover:bg-theme-card rounded-full transition-all md:flex z-10" aria-label="Toggle theme" data-astro-cid-r32mctp3> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-theme-foreground-secondary hidden dark:block" viewBox="0 0 16 16" data-astro-cid-r32mctp3> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" data-astro-cid-r32mctp3></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-theme-foreground-secondary block dark:hidden" viewBox="0 0 16 16" data-astro-cid-r32mctp3> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" data-astro-cid-r32mctp3></path> </svg> </button> </nav> </div> </div> </div> ${renderScript($$result, "D:/Coding-Folder/k/bhaskar.lol/src/components/navigation-bar.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Coding-Folder/k/bhaskar.lol/src/components/navigation-bar.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const userAgent = Astro2.request.headers.get("user-agent") || "";
  const unsupportedEngine = userAgent.includes("Gecko/") || userAgent.includes("Firefox");
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Bhaskar Saikia"><meta name="keywords" content="bhaskar, bhaskarlol, software, developer, portfolio, projects, oss, typescript"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"', '><meta property="og:title"', '><meta property="og:type" content="website"><meta property="og:url" content="https://Bhaskar.lol"><meta property="og:image" content="https://Bhaskar.lol/avatar.png"><meta property="og:description" content="self-taught software developer"><meta name="theme-color" content="#ded2e8"><meta name="twitter:card" content="summary_large_image"><title>', '</title><script>\n      const savedTheme = localStorage.getItem("theme");\n      const prefersDark = window.matchMedia(\n        "(prefers-color-scheme: dark)",\n      ).matches;\n\n      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', "", '</head> <body class="min-h-screen flex flex-col bg-theme-background text-theme-foreground"> ', " ", "  <script>(function(){", '\n  if (unsupportedEngine) {\n    console.warn(\n      "Unsupported engine detected. Some features may not work as expected. You may want to switch to a modern browser.",\n    );\n  }\n})();<\/script> ', "</body></html>"])), addAttribute(Astro2.generator, "content"), addAttribute(`Bhaskar ${title.toLowerCase() != "Bhaskar" ? title : ""}`, "content"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "NavigationBar", $$NavigationBar, {}), renderComponent($$result, "DotBackgroundWrapper", $$DotBackgroundWrapper, {}, { "default": ($$result2) => renderTemplate` <div class="absolute inset-0 h-full w-full bg-theme-background-dark bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-100 opacity-30 bg-[size:24px_24px]"></div> <div class="absolute top-0 right-0 h-[35rem] w-[35rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[120px] rounded-full"></div> <div class="absolute bottom-0 left-0 h-[25rem] w-[25rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[120px] rounded-full"></div> <div class="absolute top-1/3 left-1/4 h-[15rem] w-[15rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[100px] rounded-full"></div> ${renderSlot($$result2, $$slots["default"])} ` }), defineScriptVars({ unsupportedEngine }), renderScript($$result, "D:/Coding-Folder/k/bhaskar.lol/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "D:/Coding-Folder/k/bhaskar.lol/src/layouts/Layout.astro", undefined);

export { $$MainContent as $, $$Footer as a, $$Layout as b, cn as c };
