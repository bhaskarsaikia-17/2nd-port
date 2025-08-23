import"./router.w0bOrQtx.js";let s={left:0,width:0};function c(){const t=document.querySelector('.nav-link[data-path="'+window.location.pathname+'"]')||document.querySelector('.nav-link[data-index="0"]');if(t){const e=document.getElementById("nav-indicator"),n=2,i=t.offsetLeft-n,o=t.offsetWidth+n*2;e.style.left=`${i}px`,e.style.width=`${o}px`,s.left=i,s.width=o}}function m(){const t=document.getElementById("theme-toggle");t&&t.addEventListener("click",async()=>{if(!document.startViewTransition){d();return}const e=document.createElement("style");e.id="view-transitions-style",e.textContent=`
        ::view-transition-group(root) {
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10000;
        }
        
        ::view-transition-old(root) {
          mix-blend-mode: normal;
          animation: theme-switch-expand 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        ::view-transition-new(root) {
          -webkit-mask: url('shigure-ui.webp') center / 0 no-repeat;
          mask: url('shigure-ui.webp') center / 0 no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          animation: theme-switch-expand 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `,document.head.appendChild(e);const n=document.querySelector("[data-astro-transition-scope]");if(n){window.getComputedStyle(n).viewTransitionName;const a=document.createElement("style");a.id="temp-transition-override",a.textContent="[data-astro-transition-scope] { view-transition-name: none !important; }",document.head.appendChild(a)}await document.startViewTransition(()=>{d()}).finished,e.remove();const o=document.getElementById("temp-transition-override");o&&o.remove()})}function d(){const t=document.documentElement;t.classList.toggle("dark")?(localStorage.setItem("theme","dark"),t.classList.add("dark")):(localStorage.setItem("theme","light"),t.classList.remove("dark"))}function l(){const t=document.getElementById("scroll-to-top"),e=document.getElementById("nav-container-wrapper"),n=document.getElementById("mainCard");if(!t||!e)return;function i(){if(!n){r();return}if(n.getBoundingClientRect().bottom<0)return o();r()}function o(){t.classList.remove("opacity-0","scale-0"),t.classList.add("opacity-100","scale-100"),e.style.transform="translateX(15px)"}function r(){t.classList.remove("opacity-100","scale-100"),t.classList.add("opacity-0","scale-0"),e.style.transform="translateX(0)"}t&&t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",i,{passive:!0}),i()}window.addEventListener("load",()=>{document.documentElement.classList.add("theme-transition"),c(),l()});document.addEventListener("astro:before-swap",()=>{const t=document.getElementById("nav-indicator");t&&(s={left:parseFloat(t.style.left||"0"),width:parseFloat(t.style.width||"0")})});document.addEventListener("astro:after-swap",()=>{const t=document.getElementById("nav-indicator");t&&s.width>0&&(t.style.transition="none",t.style.left=`${s.left}px`,t.style.width=`${s.width}px`)});document.addEventListener("astro:page-load",()=>{const t=document.getElementById("nav-indicator");t&&(t.style.transition="all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",c()),l(),m()});document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",e=>{const n=e.currentTarget,i=document.getElementById("nav-indicator"),o=2,r=n.offsetLeft-o,a=n.offsetWidth+o*2;i.style.left=`${r}px`,i.style.width=`${a}px`,s={left:r,width:a}})});window.addEventListener("resize",c);
