const elList = document.querySelector(".list")

async function postlarniOlish(){
    try{
        const javob = await fetch('https://fakestoreapi.com/products');
        const malumot = await javob.json()
        renderPost(malumot)
    }
    catch(xato){
console.error("Api bilan bog'liq xatolik", xato)
    }
}
postlarniOlish()

function renderPost(malumot){
    malumot.forEach((data)=>{
        elList.innerHTML += `
        <li class="li">
        <div class="div">
        <img class="img" src="${data.image}">
        <h2 class="h2">${data.title}</h2>
        <p class="p">${data.price}</p>
        <p class="p1">${data.description}</p>
        <p class="p2">${data.category}</p>
        <h3 class="p3">${data.rating.rate}</h3>
        <h3 class="h3">${data.rating.count}</h3>        
        </div>

        </li>
        `
    })
}
