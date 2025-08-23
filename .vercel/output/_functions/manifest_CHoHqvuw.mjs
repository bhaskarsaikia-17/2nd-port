import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BUmOQFTm.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_kKucGw99.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Coding-Folder/k/bhaskar.lol/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"},{"type":"external","src":"/_astro/blog.DerRinkW.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"},{"type":"external","src":"/_astro/blog.DerRinkW.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.max-h-[70vh]::-webkit-scrollbar{width:4px}.max-h-[70vh]::-webkit-scrollbar-track{background:transparent}.max-h-[70vh]::-webkit-scrollbar-thumb{background:var(--foreground-secondary);border-radius:10px}.max-h-[70vh]:hover::-webkit-scrollbar-thumb{background:var(--foreground-secondary)}.element-glow[data-astro-cid-ajxctdaq]{box-shadow:0 0 50px 5px #6366f11a}.mask-border[data-astro-cid-ajxctdaq]{-webkit-mask-image:linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%);mask-image:linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)}\n"}],"routeData":{"route":"/experience","isIndex":false,"type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience.astro","pathname":"/experience","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"}],"routeData":{"route":"/jaczup","isIndex":false,"type":"page","pattern":"^\\/jaczup\\/?$","segments":[[{"content":"jaczup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/jaczup.astro","pathname":"/jaczup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"},{"type":"external","src":"/_astro/blog.DerRinkW.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"}],"routeData":{"route":"/secret/pl/data_leaks","isIndex":false,"type":"page","pattern":"^\\/secret\\/pl\\/data_leaks\\/?$","segments":[[{"content":"secret","dynamic":false,"spread":false}],[{"content":"pl","dynamic":false,"spread":false}],[{"content":"data_leaks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/secret/pl/data_leaks.astro","pathname":"/secret/pl/data_leaks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"},{"type":"external","src":"/_astro/blog.DerRinkW.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/sources","isIndex":false,"type":"page","pattern":"^\\/sources\\/?$","segments":[[{"content":"sources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sources.astro","pathname":"/sources","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/blog.BRzJaeIR.css"},{"type":"external","src":"/_astro/blog.DerRinkW.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Coding-Folder/k/bhaskar.lol/src/pages/sources.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sources@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/content/experience.ts",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/pages/experience.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experience@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/components/profile-header.astro",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/components/ui/main-content.astro",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Coding-Folder/k/bhaskar.lol/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/jaczup@_@astro":"pages/jaczup.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/secret/pl/data_leaks@_@astro":"pages/secret/pl/data_leaks.astro.mjs","\u0000@astro-page:src/pages/sources@_@astro":"pages/sources.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/experience@_@astro":"pages/experience.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","D:/Coding-Folder/k/bhaskar.lol/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CSZaaKAS.mjs","D:\\Coding-Folder\\k\\bhaskar.lol\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\Coding-Folder\\k\\bhaskar.lol\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_UoBZzwIq.mjs","\u0000@astrojs-manifest":"manifest_CHoHqvuw.mjs","D:/Coding-Folder/k/bhaskar.lol/src/components/experience-list":"_astro/experience-list.BlecWJxO.js","D:/Coding-Folder/k/bhaskar.lol/src/components/discord-activity/discord-activity":"_astro/discord-activity.BykkBJpG.js","@astrojs/react/client.js":"_astro/client.BvgsbLDD.js","D:/Coding-Folder/k/bhaskar.lol/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Thh5OJey.js","D:/Coding-Folder/k/bhaskar.lol/src/components/navigation-bar.astro?astro&type=script&index=0&lang.ts":"_astro/navigation-bar.astro_astro_type_script_index_0_lang.bdQglcMG.js","D:/Coding-Folder/k/bhaskar.lol/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.AWhPxJ6s.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/GeistMono_wght_.BWYER8xY.woff2","/_astro/Geist_wght_.AwEi7ETv.woff2","/_astro/blog.DerRinkW.css","/_astro/blog.BRzJaeIR.css","/alya.webp","/avatar.png","/favicon.png","/favicon_high_res.png","/favicon_old.png","/github.png","/ikuya-kita-laying.webp","/shigure-ui.webp","/servers/animetavern.webp","/servers/dreamcode.ico","/servers/freemc.webp","/servers/gscript.webp","/servers/nova.webp","/servers/wumpuscentral.webp","/_astro/client.BvgsbLDD.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.AWhPxJ6s.js","/_astro/discord-activity.BykkBJpG.js","/_astro/experience-list.BlecWJxO.js","/_astro/index.OztxiM9T.js","/_astro/jsx-runtime.BCPyM5IQ.js","/_astro/Layout.astro_astro_type_script_index_0_lang.Thh5OJey.js","/_astro/navigation-bar.astro_astro_type_script_index_0_lang.bdQglcMG.js","/_astro/router.w0bOrQtx.js","/_astro/util.BxQlQgP_.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"FrCKC6Y7ET+W6q6ZpKEtCjNSQXlRUpuiZ3dA/0p3H8s="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
