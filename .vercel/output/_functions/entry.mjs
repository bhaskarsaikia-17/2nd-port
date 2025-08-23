import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DmzHhI_h.mjs';
import { manifest } from './manifest_CHoHqvuw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/experience.astro.mjs');
const _page3 = () => import('./pages/jaczup.astro.mjs');
const _page4 = () => import('./pages/projects.astro.mjs');
const _page5 = () => import('./pages/secret/pl/data_leaks.astro.mjs');
const _page6 = () => import('./pages/sources.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog.astro", _page1],
    ["src/pages/experience.astro", _page2],
    ["src/pages/jaczup.astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/secret/pl/data_leaks.astro", _page5],
    ["src/pages/sources.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "fe8082b1-3046-4bf5-8856-f1a69fdaecb1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
