var I=Object.defineProperty;var A=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>A(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function y(){}function j(e){return e()}function E(){return Object.create(null)}function g(e){e.forEach(j)}function L(e){return typeof e=="function"}function C(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function F(e){return Array.from(e.childNodes)}let h;function d(e){h=e}function q(){if(!h)throw new Error("Function called outside component initialization");return h}function z(e){q().$$.on_mount.push(e)}const l=[],k=[];let a=[];const N=[],K=Promise.resolve();let $=!1;function R(){$||($=!0,K.then(P))}function b(e){a.push(e)}const m=new Set;let u=0;function P(){if(u!==0)return;const e=h;do{try{for(;u<l.length;){const t=l[u];u++,d(t),U(t.$$)}}catch(t){throw l.length=0,u=0,t}for(d(null),l.length=0,u=0;k.length;)k.pop()();for(let t=0;t<a.length;t+=1){const n=a[t];m.has(n)||(m.add(n),n())}a.length=0}while(l.length);for(;N.length;)N.pop()();$=!1,m.clear(),d(e)}function U(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}function V(e){const t=[],n=[];a.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),a=t}const D=new Set;function G(e,t){e&&e.i&&(D.delete(e),e.i(t))}function H(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),b(()=>{const c=e.$$.on_mount.map(j).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...c):g(c),e.$$.on_mount=[]}),r.forEach(b)}function J(e,t){const n=e.$$;n.fragment!==null&&(V(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(e,t){e.$$.dirty[0]===-1&&(l.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,n,o,r,c,f=null,S=[-1]){const _=h;d(e);const i=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:E(),dirty:S,skip_bound:!1,root:t.target||_.$$.root};f&&f(i.root);let w=!1;if(i.ctx=n?n(e,t.props||{},(s,x,...v)=>{const O=v.length?v[0]:x;return i.ctx&&r(i.ctx[s],i.ctx[s]=O)&&(!i.skip_bound&&i.bound[s]&&i.bound[s](O),w&&Q(e,s)),x}):[],i.update(),w=!0,g(i.before_update),i.fragment=!1,t.target){if(t.hydrate){const s=F(t.target);i.fragment&&i.fragment.l(s),s.forEach(B)}else i.fragment&&i.fragment.c();t.intro&&G(e.$$.fragment),H(e,t.target,t.anchor),P()}d(_)}class W{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){J(this,1),this.$destroy=y}$on(t,n){if(!L(n))return y;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(X);function Y(e,t,n){let{config:o={}}=t;return z(async()=>{await(await fetch("config.json")).json().then(c=>{n(0,o=c)}),console.log(o)}),e.$$set=r=>{"config"in r&&n(0,o=r.config)},[o]}class Z extends W{constructor(t){super(),T(this,t,Y,null,C,{config:0})}}new Z({target:document.getElementById("app")});