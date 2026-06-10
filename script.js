const products = [

{
id:1,
name:"Sports Shoes",
price:2500,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
},

{
id:2,
name:"T-Shirt",
price:999,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
},

{
id:3,
name:"Laptop",
price:55000,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
},

{
id:4,
name:"Smart Watch",
price:3500,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
},

{
id:5,
name:"Headphones",
price:1999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
},

{
id:6,
name:"Mobile Phone",
price:18000,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
}

];

let cart = [];

function displayProducts(data){

const container =
document.getElementById("products");

container.innerHTML = "";

data.forEach(product=>{

container.innerHTML += `
<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>
`;

});

}

displayProducts(products);

function addToCart(id){

cart.push(id);

document.getElementById("cartCount")
.innerText = cart.length;

}

document
.getElementById("searchBox")
.addEventListener("input",function(){

const value =
this.value.toLowerCase();

const filtered =
products.filter(product=>
product.name.toLowerCase()
.includes(value)
);

displayProducts(filtered);

});