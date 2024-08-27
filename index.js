import{a as f,S as L,i as h}from"./assets/vendor-KI8m5ffe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();f.defaults.baseURL="https://pixabay.com";const y=(e,s,d)=>{const n={params:{key:"45468562-3d934deccae668c7d7f46b2f1",q:e,page:s,per_page:d,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return f.get("/api/",n).then(t=>t.data)};function v(e){return`
    <li class="card-list-item">
        <a class="card-list-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="card-list-item-img" />
        </a>
        <ul class="card-item-inside-list">
          <li class="inside-list-item">
            <h3>Likes</h3>
            <p>${e.likes}</p>
          </li>
          <li class="inside-list-item">
            <h3>Views</h3>
            <p>${e.views}</p>
          </li>
          <li class="inside-list-item">
            <h3>Comments</h3>
            <p>${e.comments}</p>
          </li>
          <li class="inside-list-item">
            <h3>Downloads</h3>
            <p>${e.downloads}</p>
          </li>
        </ul>
    </li>
    `}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),o=document.querySelector(".loader"),r=document.querySelector(".js-load-more-btn");let l=1;const c=15;let a="";const b=new L(".gallery li a",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0});r.classList.add("is-hidden");const w=async e=>{if(e.preventDefault(),l=1,a=m.elements.user_query.value.trim(),p.innerHTML="",r.classList.add("is-hidden"),!!a){try{o.classList.add("is-open");const s=await y(a,l,c);if(s.hits.length===0){h.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Attention",color:"red",timeout:4e3}),o.classList.remove("is-open");return}g(s.hits),o.classList.remove("is-open"),s.hits.length<c?h.info({message:"You've reached the end of search results.",position:"topCenter",title:"Info",timeout:4e3}):r.classList.remove("is-hidden")}catch(s){console.log(s),o.classList.remove("is-open")}m.reset()}},C=async()=>{l+=1;try{o.classList.add("is-open");const e=await y(a,l,c);g(e.hits),o.classList.remove("is-open");const{height:s}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"}),e.hits.length<c&&(h.info({message:"We're sorry, but you've reached the end of search results.",position:"topCenter",title:"Info",timeout:4e3}),r.classList.add("is-hidden"))}catch(e){console.log(e),o.classList.remove("is-open")}},g=e=>{const s=e.map(v).join("");p.insertAdjacentHTML("beforeend",s),b.refresh()};m.addEventListener("submit",w);r.addEventListener("click",C);
//# sourceMappingURL=index.js.map
