(()=>{"use strict";const n="https://api.punkapi.com/v2/beers/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>' \n    <div class="Error404">\n        <h2>Error 4040 Page not found</h2>\n    </div>',t={"/":async()=>`\n    <div class="beers_main_container">\n    ${(await a()).map((n=>`\n        <div class="beers_container">\n            <div class="beers_container_img">\n                <a href="#/${n.id}/">\n                    <img src="${n.image_url}" alt="">\n                </a>\n            </div>\n            <div class="beers_container_ description">\n                <a href="#/${n.id}/">\n                    <h2 class="beers_title">${n.name}</h2>\n                </a>\n            </div>\n        </div>\n    `)).join("")}\n    </div>`,"/:id":async()=>{const n=e(),i=await a(n);return console.log(i),`\n        <div class="beer_container">\n            <div class="beer_container_imagen">\n                <img src="${i[0].image_url}" alt="">\n            </div>\n            <div class="beer_information">\n                <h2>${i[0].name}</h2>\n                <p>${i[0].description}</p>\n                <h3>First brewed</h3>\n                <p>${i[0].first_brewed}</p>\n                <h3>ABV</h3>\n                <p>${i[0].abv}</p>\n                <h3>Food pairing:</h3>\n                    <ul>\n            ${i[0].food_pairing.map((n=>`\n                <li>${n}</li>\n            `)).join("")}\n                    </ul>\n            </div>\n        </div>\n    `},"/about":async()=>'\n        <div class="about_container">\n            <p>\n                Ejemplo de router para una Single Page Aplication con JavaScript vanilla haciendo uso de una API Externa para el manejo de datos.\n            </p>\n        </div>\n    '},s=async()=>{const n=document.getElementById("content_loaded");let a=e(),s=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(a),o=t[s]?t[s]:i;n.innerHTML=await o()};window.addEventListener("load",s),window.addEventListener("hashchange",s)})();