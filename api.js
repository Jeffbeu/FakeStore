// var apiurl = "https://fakestoreapi.com/products";
// Carregando as informações da API
const listprod = document.querySelector('.product-list');

addEventListeners();

function addEventListeners(){
    window.addEventListener('DOMContentLoaded', () =>{
        carregaAPI();
    })
}


function carregaAPI(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product =>{
            html += `
            <div class = "product-item">
            <div class = "product-img">
              <img src = "${product.image}" alt = "product image">
              <button type = "button" class = "add-to-cart-btn">
                <i class = "fas fa-shopping-cart"></i>Add To Cart
              </button>
            </div>

            <div class = "product-content">
              <h3 class = "product-name">${product.title}</h3>
              <span class = "product-category">${product.category}</span>
              <p class = "product-price">${product.price}</p>
            </div>
          </div>
            `;
        });
        listprod.innerHTML = html;
    })
    .catch(error =>{
        alert(`Error: Use um servidor para funciona Ex: Live Server`)
    })
}