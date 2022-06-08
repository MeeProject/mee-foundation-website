import{j as o,B as c,R as d,a as m,b as p,c as h}from"./vendor.7d8bbe36.js";const f=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};f();var x="/assets/mee_logo.6a561cc8.svg";const e=o.exports.jsx,t=o.exports.jsxs,u=()=>e("div",{className:"header max-w-full flex flex-row justify-start",children:e("img",{src:x,alt:"mee-logo",className:"h-4 mx-3.5 md:ml-0 my-5"})});var y="/assets/head.360471c4.svg";const g=()=>t("div",{className:"footer mt-16 max-w-full flex flex-col items-shrink relative",children:[e("div",{className:"w-full bg-primary flex flex-col items-center z-10",children:e("div",{className:"w-full px-4 py-4",children:t("div",{className:"flex basis-2/3 flex-col justify-start text-2xs md:text-sm leading-3 text-primary-content",children:[e("p",{children:"The Mee project is sponsored by the Mee Foundation, a 501(c)(4) non-profit corporation"}),e("p",{className:"mt-5",children:"\xA9 2022 Mee Foundation, Inc."})]})})}),e("img",{src:y,alt:"mee-illustration-2",className:"w-24 absolute -top-5 right-0 left-0 m-auto"})]});var v="/assets/mee_illustration_1.cc6d37dc.jpg",w="/assets/ownership.87f28e59.svg",N="/assets/privacy.7598906c.svg",b="/assets/power.5dcf5aaf.svg";const j=()=>t("div",{className:"max-w-256 mx-auto",children:[e(u,{}),t("div",{className:"sub-header bg-primary flex flex-col items-center",children:[t("div",{className:"flex flex-wrap justify-center text-center font-ps my-4 whitespace-pre-wrap text-2xl lg:text-3xl leading-7",children:[e("h1",{className:"text-secondary",children:e("b",{children:"Hello."})}),e("h1",{children:" "}),t("h1",{className:"text-primary-content",children:["It's"," ",e("i",{children:"Mee"}),"."]})]}),e("img",{src:v,alt:"mee-illustration",className:""}),t("div",{className:"my-7 w-full sm:px-10 md:px-15 px-4 text-center",children:[e("p",{className:"text-primary-content ",children:"Today, our online selves \u2014 our preferences, interests, affiliations, social networks, medical records, locations, and so on \u2014 are owned by others. Our data is harvested by giant corporations that monetize it for their advantage, not ours."}),e("p",{className:"text-secondary",children:"Good for them. Bad for us."})]})]}),t("div",{className:"content max-w-full flex flex-col items-center",children:[e("div",{className:"my-9 md:my-10 sm:px-28 md:px-60 px-4 w-full text-center",children:t("p",{className:"text-primary",children:[e("i",{children:"Mee"})," ","is a software and legal framework to support human-centered apps that improve the quality of online life by giving people more control over their personal data."]})}),t("div",{className:"w-full flex flex-row flex-wrap",children:[t("div",{className:"bg-alt-color-1 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-secondary-content",children:[e("b",{children:"More Ownership."}),e("br",{}),"Data rights are human rights."]}),e("div",{className:"w-10 h-10 p-2 my-auto rounded-full bg-white",children:e("img",{src:w,alt:"ownership",className:"ml-0.5"})})]}),t("div",{className:"bg-alt-color-2 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-primary-content",children:[e("b",{children:"More privacy."}),e("br",{}),"Control what others know about you."]}),e("div",{className:"w-10 h-10 p-2 my-auto rounded-full bg-white",children:e("img",{src:N,alt:"privacy",className:""})})]}),t("div",{className:"bg-alt-color-3 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-secondary-content",children:[e("b",{children:"More power."}),e("br",{}),"The future is Mee-compatible apps."]}),e("div",{className:"w-10 h-10 p-2 my-auto rounded-full bg-white",children:e("img",{src:b,alt:"power",className:""})})]})]}),t("div",{children:[e("h2",{className:"text-primary text-xl md:text-2xl text-center mt-8 mb-3 mx-2",children:e("b",{children:"Good for everyone."})}),t("p",{className:"text-primary text-center text-base md:text-xl",children:["We\u2019re not-for-profit and open-source. Curious?",e("br",{}),"Email us at"," ",e("b",{children:"hello@mee.foundation"})]})]})]}),e(g,{})]}),M=()=>e(c,{children:e(d,{children:e(m,{path:"/",element:e(j,{})})})});p.render(e(h.StrictMode,{children:e("div",{className:"font-ps text-sm leading-4.5 md:text-xl md:leading-6",children:e(M,{})})}),document.getElementById("root"));