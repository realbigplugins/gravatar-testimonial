!function(){"use strict";var e,t={160:function(){var e=window.wp.element,t=window.wp.blocks,n=window.wp.blockEditor,a=window.wp.components,r=window.wp.i18n,i=JSON.parse('{"apiVersion":2,"name":"realbigplugins/gravatar-testimonial","title":"Gravatar Testimonial","icon":"testimonial","category":"text","supports":{"html":false},"attributes":{"message":{"type":"string","default":""},"name":{"type":"string","default":""},"company":{"type":"string","default":""},"email":{"type":"string","default":""}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');(0,t.registerBlockType)(i,{edit:t=>{const{attributes:{message:i,name:o,company:l,email:s},setAttributes:u,className:c}=t,m=(0,n.useBlockProps)();return(0,e.createElement)("blockquote",m,(0,e.createElement)(n.RichText,{tagName:"p",className:c,onChange:e=>u({message:e}),value:i}),(0,e.createElement)(a.TextControl,{label:(0,r.__)("Name","realbigmarketing"),value:o,onChange:e=>u({name:e})}),(0,e.createElement)(a.TextControl,{label:(0,r.__)("Company","realbigmarketing"),value:l,onChange:e=>u({company:e})}),(0,e.createElement)(a.TextControl,{label:(0,r.__)("Email","realbigmarketing"),value:s,onChange:e=>u({email:e})}))}})}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=function(t,n,r,i){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<o&&(o=i));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],l=n[1],s=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var c=s(a)}for(t&&t(n);u<o.length;u++)i=o[u],a.o(e,i)&&e[i]&&e[i][0](),e[o[u]]=0;return a.O(c)},n=self.webpackChunkgravatar_testimonial=self.webpackChunkgravatar_testimonial||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=a.O(void 0,[46],(function(){return a(160)}));r=a.O(r)}();