import{C as k,t as y}from"../chunks/coro-client.vR-dqdj0.js";import{b as _,n as b,a as m}from"../chunks/namespace.DYAXPB0R.js";import{s as $,u as d,i as h,f as N,k as g,I as w,J as S,K as C,L,n as v}from"../chunks/scheduler.CbFSYGZU.js";import{S as E,i as j,d as u,e as I,t as p,g as O,c as P,a as q,m as z,f as J}from"../chunks/index._YEAsZDy.js";import{p as K}from"../chunks/stores.d_ovwUjp.js";import{E as M}from"../chunks/ErrorLoadResourceSection.BY6zfPhk.js";const R=!1,T=async function(){try{const o=await new k().paginateNamespaces(100).fetchNext();return _.set(!0),b.set(o),{namespaces:o}}catch(r){return{namespaces:[],error:y(r)}}finally{_.set(!1)}},X=Object.freeze(Object.defineProperty({__proto__:null,load:T,ssr:R},Symbol.toStringTag,{value:"Module"}));function A(r){let t;const o=r[2].default,e=w(o,r,r[1],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,c){e&&e.m(s,c),t=!0},p(s,c){e&&e.p&&(!t||c&2)&&S(e,o,s,s[1],t?L(o,s[1],c,null):C(s[1]),null)},i(s){t||(p(e,s),t=!0)},o(s){u(e,s),t=!1},d(s){e&&e.d(s)}}}function B(r){let t,o;return t=new M({}),{c(){P(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,s){z(t,e,s),o=!0},p:v,i(e){o||(p(t.$$.fragment,e),o=!0)},o(e){u(t.$$.fragment,e),o=!1},d(e){J(t,e)}}}function D(r){let t,o,e,s;const c=[B,A],l=[];function i(a,n){return a[0]?0:1}return t=i(r),o=l[t]=c[t](r),{c(){o.c(),e=d()},l(a){o.l(a),e=d()},m(a,n){l[t].m(a,n),h(a,e,n),s=!0},p(a,[n]){let f=t;t=i(a),t===f?l[t].p(a,n):(O(),u(l[f],1,1,()=>{l[f]=null}),I(),o=l[t],o?o.p(a,n):(o=l[t]=c[t](a),o.c()),p(o,1),o.m(e.parentNode,e))},i(a){s||(p(o),s=!0)},o(a){u(o),s=!1},d(a){a&&N(e),l[t].d(a)}}}function F(r,t,o){let e,s;g(r,K,n=>o(3,e=n)),g(r,b,n=>o(4,s=n));let{$$slots:c={},$$scope:l}=t,i=!1;const a=e.params.namespace;if(s.length)if(a)s.find(n=>n.id===a)?m.set(a):i=!0;else{const n=s.find(f=>f.name==="default");n?m.set(n.id):m.set(s[0].id)}else e.url.pathname!=="/"&&(window.location.href="/");return r.$$set=n=>{"$$scope"in n&&o(1,l=n.$$scope)},[i,l,c]}class Y extends E{constructor(t){super(),j(this,t,F,D,$,{})}}export{Y as component,X as universal};
