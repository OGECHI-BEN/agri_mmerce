let products_grid= document.getElementById("products"); 
let cartBox = document.getElementById("cart-box")


const products =[
    {id:1, name:'2kg Fresh tomatoes', price:2000, Image:'/images/fresh tomato 2.jpg', category:'vegetables & fruits'},
    {id:2, name:'1kg of Fresh Cabbage', price:1500,Image:'/images/cabbage 2.jpg', category:'vegetables & fruits'},
    {id:3, name:'1 tray of lettuce', price:1500,Image:'/images/lettuce.jpg', category:'vegetables & fruits'},
    {id:4, name:'2kg of Fresh carrots', price:3500, Image:'/images/carrot 2.jpg' , category:'vegetables & fruits'},
    {id:5, name:'cucumbers mini', price:6000, Image:' /images/cucumber.jpg' , category:'vegetables & fruits'},
    {id:6, name:'Onions Basket', price:20000, Image:'/images/onions.jpg', category:'vegetables & fruits'},
    {id:7, name:'5kg of brown beans', price:8000, Image:'/images/beans.jpg' , category:'Nigerian foodstuff'},
    {id:8, name:'5kg of White beans', price:8000,Image:'/images/beans.jpg ' , category:'Nigerian foodstuff'},
    {id:9, name:'5kg Fresh corn', price:5000, Image:'/images/overflowing maize.jpg' , category:'Nigerian food stuff'},
    {id:10, name:'5 pieces of Ohaji yam', price:2000,Image:' /images/yams-1.jpg', category:'Nigerian foodstuff'},
    {id:11, name:'1kg of cocoyam', price:2000,Image: '/images/cocoyam-1.jpg', category:'Nigerian foodstuff'},
    {id:12, name:'2kg of egusi', price:1500,Image:'/images/egusi.jpg', category:'Nigerian foodstuff'},
    {id:13, name:'2kg of ogbonno', price:7000,Image:'/images/ogbonno.jpg ', category:'Nigerian foodstuff'},
    {id:14, name:'5kg of soyabean', price:5000,Image:'/images/soya bean.jpg', category:'Nigerian foodstuff'},
    {id:15, name:'12 fingers of unripe plantain', price:2500,Image:'/images/unripe plantain.jpg ', category:'Nigerian foodstuff'},
    {id:16, name:'12 fingers of ripe plantain', price:2000,Image:'/images/ripe plantain.jpg ' , category:'Nigerian foodstuff'},
    {id:17, name:'5kg of clothed groundut', price:5500,Image:' /images/unpealed groundnut.jpg ', category:'Nigerian foodstuff'},
    {id:18, name:'5kg of naked groundut', price:6500,Image:'/images/pilled groundnut.jpg' , category:'Nigerian foodstuff'},
    {id:19, name:'Basket of tatashe', price:10000,Image:'/images/tatashe.jpg', category:'Nigerian foodstuff'},
    {id:20, name:'5kg of yellow garri', price:4000,Image:'/images/garri.jpg ' , category:'Nigerian foodstuff'},
    {id:21, name:'5kg of unprocessed palmfruit', price:4000,Image:'/images/red palm fruit.jpg' , category:'Nigerian foodstuff'},
    {id:22, name:'5kg of white garri', price:3500,Image:'/images/garri.jpg ', category:'Nigerian foodstuff'},
    {id:23, name:'2 litres of red palm oil', price:4000,Image:'/images/red hoil.jpg', category:'Nigerian foodstuff'},
    {id:24, name:'2kg chicken wings', price:4500,Image:'/images/breast.jpg', category:'protein'},
    {id:25, name:'2kg chicken breast', price:4500,Image:'/images/minimalist chicken breast.jpg', category:'Protein'},
    {id:26, name:'2kg sapa wings', price:2000,Image: '/images/breast.jpg', category:'protein'},
    {id:27, name:'A dozen of chicken thighs', price:6000,Image:'/images/chicken thighs.jpg' , category:'protein'},
    {id:28, name:'5kg chicken', price:10000, Image: '/images/chicken with breast.jpg', category:'protein'},
    {id:29, name:'half kg of okro', price:1000,Image:'/images/okra-1386365_1280 (1).jpg' , category:'Nigerian foodstuff'},
    {id:30, name:'bundle of fresh  ugu leaves', price:500, Image:'/images/ugu leaves.webp' , category:'vegetables & fruits'},
    {id:31, name:'bundle of fresh  water leaves', price:500, Image:'/images/waterleaf1.jpeg' , category:'vegetables & fruits'},
    {id:32, name:'dried  scent leaves', price:1000, Image:'/images/DRY-SCENT-LEAF.jpg', category:'vegetables & fruits'},
    {id:33, name:'bundle of fresh  uha leaves', price:500, Image:'/images/oha-leaf.webp' , category:'vegetables & fruits'},
    {id:34, name:'dried bitter leaves', price:500, Image:'/images/bitter leaf.jpg' , category:'vegetables & fruits'},
    {id:35, name:'dried ukazi leaves', price:500, Image:'/images/Ukazi-OkaziEroAfang.jpg' , category:'vegetables & fruits'},
    {id:36, name:'5kg of fresh potatoes', price:3000, Image:'/images/group-fresh-tasty-potato-as-background_188078-23191.jpg', category:'vegetables & fruits'},
    {id:37, name:'half basket of spring onions', price:4500,Image:'/images/spring onions.jpg', category:'Nigerian foodstuff'},
    {id:38, name:'2kg of wheat', price:2000,Image:'/images/wheat.jpg', category:'Nigerian foodstuff'},
    {id:39, name:'3kg of ground fufu', price:1500,Image:'/images/cassava.webp', category:'Nigerian foodstuff'},
    {id:40, name:'3kg of ground amala', price:1500,Image:'/images/amala flour.webp', category:'Nigerian foodstuff'},
    {id:41, name:'3kg of poundoyam', price:2500,Image:'/images/yam flour.webp', category:'Nigerian foodstuff'},
    {id:42, name:'3kg of ground plantain', price:5000,Image:'/images/plantain flou.jpg', category:'Nigerian foodstuff'},
    {id:43, name:'A mini basket of orange', price:1500, Image:'/images/orange.jpg' , category:'vegetables and fruit'},
    {id:44, name:'A mini basket of lemon', price:1500,Image:'/images/lemon.jpg' , category:'vegetables and fruit'},
    {id:45, name:'A mini basket of pineapple', price:1500,Image:'/images/pineapple.jpg' , category:'vegetables and fruit'},
    {id:46, name:'A mini basket of avacado pear', price:1500,Image:'/images/avacad0.jpg', category:'vegetables and fruit'},
    {id:47, name:'A mini basket of Guava', price:1500,Image:'/images/guava1.jpg', category:'vegetables and fruit'},
    {id:48, name:'A mini basket of pawpaw', price:1500,Image:'/images/pawpaw.jpg', category:'vegetables and fruit'},
    {id:49, name:'A mini basket of mango', price:1500,Image:'/images/mango.jpg', category:'vegetables and fruit'},
    {id:50, name:'A mini basket of tigernut', price:1500,Image:'/images/tigernut.1.jpg', category:'vegetables and fruit'},
    {id:51, name:'A mini basket of ginger', price:1500,Image:'/images/ginger.jpg', category:'Nigerian foodstuff'},
    {id:52, name:'A mini basket of garlic', price:1500,Image:'/images/garlic.jpg', category:'nigerian foodstuff'},
    {id:53, name:'A mini basket of udara', price:1500,Image:'/images/udara.jpg', category:'vegetables and fruit'},
    {id:54, name:'A mini basket of Bananas', price:1500,Image:'/images/bananas.jpg', category:'vegetables and fruit'},
    {id:55, name:'A mini basket of watermelon', price:5000,Image:'/images/watermelon.jpg', category:'vegetables and fruit'},
    {id:56, name:'A mini basket of cashewnut', price:8000,Image:'/images/cashewnut.jpg', category:'vegetables and fruit'},
    {id:57, name:'A mini basket of soursop ', price:3000, Image:'/images/soursop.jpeg', category:'vegetables and fruit'},
    {id:58, name:'2kg of fresh catfish', price:3000, Image:'/images/cat-fish.jpg"', category:'Nigerian foodstuff'},
    {id:59, name:'5 pieces of roasted catfish', price:2500, Image:'/images/roasted fish.jpg', category:'Nigerian foodstuff'}, 
    {id:60, name:'3kg of snail', price:3500,Image:'/images/snail.webp', category:'Nigerian foodstuff'}, 
    {id:61, name:'3kg of dried catfish', price:4500, Image:'/images/dried-catfish.jpg', category:'Nigerian foodstuff'},
    {id:62, name:'3 pieces of Tilapia', price:2000, Image:'/images/tilipia.jpg', category:'seafood'},
    {id:63, name:'1 mudu of periwinkle', price:1000,Image:'/images/perwinkle.jpg1.jpg', category:'seafood'},
    {id:64, name:'3kg of pork', price:3500,Image:'/images/pork.jpg', category:'protein'},
    {id:65, name:'3kg of beef', price:3500,Image:'/images/beef.jpg', category:'protein'},
    {id:66, name:'3kg of goat meat', price:3500, Image:'/images/goatmeat.jpg', category:'protein'},
    
];
 const cart = [];
 

// for(let i=0;i<products.length;i++ ){
    // let eachitem ='';
    // for(let i=0;i<products.length;i++ ){
    //     console.log(products[i]);
    // }
    // var product_content ='';
    // for (let product of products){
    //     product_content += `
    //                         <div id="product" class="col" >
    //                             <div id="product-image"> <img src="${product.Image}"></div>    
                           
    //                             <div class="product-description">
    //                                 <h3 class="productname"> ${product.name}</h3>
    //                                 <span class="price"> ${product.price}</span>
    //                             </div>
    //                             <div id="purchasing-details">
    //                                     <button class="viewbtn view" type="button" onclick="viewmore()">View more</button>
    //                                     <button  class="addbtn add" type="button" onclick="addTOCart()"> Add to cart</button>
    //                             </div>
    //                         </div>`
    // }
    // console.log('fsghhfxh', product_content);
    // document.getElementById("products").innerHTML = product_content;


   function displayCart(){
    let cart_container = document.getElementById('cart-container');
    console.log("cart_container------>", cart_container);
    cart_container.style.display ='block';
}

function updateUI(){
    for(let product of products){
        let product_container = document.createElement("div");
        product_container.id ="product";
        product_container.innerHTML =`
        <div id="product-image">
            <img src="${product.Image}" alt="${product.name}">
        </div>
        <div class="product-description">
            <h3 class="productname text-center font-medium p-1 border-white  border-b-2 unknwon"> ${product.name}</h3>
            <h3 class="price p-1 text-center font-medium"> &#x20A6;${product.price}</h3>
        </div>
        <div id="purchasing-details" class ="grid place-content-center grid-t gap-2">
            <div class="viewbtn view p-1 bg-green-800 rounded-md text-center hover:bg-green-950 hover:font-medium text-white"><button  type="button" onclick="viewmore()">View more</button></div>
            <div class=" p-1 bg-green-800 rounded-md text-center hover:bg-green-950 hover:font-medium text-white"><button id="addbtn" type="button" onclick="addTOcart(${product.id})"> Add to cart</button></div>
        </div>`
        
        products_grid.appendChild(product_container);
        
        // console.log(product.name)          
    }
}
  updateUI();

  let NameOfItem;
  let priceOfItem = 0;
  let imageOfItem;
  let cartIncrease = 0;
  let cartDecrease = 0;
  let totalItems = 0;
  let quantitty = 0;


function addTOcart(product_id){
    //This is for the red notification to show, 1.

    let cart_notifier = document.getElementById('cart_notificatication');
    console.log("cart_notifier------>", cart_notifier);
    cart_notifier.style.display ='block'; 

    //This is for the on the red notification to show and increase as items are being added to cart 2.
    // cartIncrease++;
    // cart_notifier.innerText = cartIncrease;
    // console.log(cartIncrease);
      //This is for the on the quantity to in the cart to increase it as items are being clicked on

     let display_quantity = document.getElementById('quantity');
        display_quantity.innerHTML = cartIncrease;
        console.log(display_quantity);
    
    //This

    let target = products.find( item => item.id === product_id);
     console.log(target);
    // console.log(product_id);id;
    cart.push(target);
    console.log(cart);
    updatecart();
}




function updatecart(){
    let cartContainer = document.getElementById('mini_cart');
    cartContainer.innerHTML = '';
    for(let cartItem of cart){
        let cart_box =  document.createElement('div');
        cart_box.id = "cartItem";
        cart_box.innerHTML = ` <div id="cart_items-display" class="flex flex-col">
        <div id="itemContainer" class="item_container flex gap-7 mt-8 mx-5">
            <div id="itemImage"><img src="${cartItem.Image}" alt="${cartItem.name}" class="w-[150px] "></div>
            <div class="product_name flex flex-col">
                <h3 id="itemName" class="item_name text-wrap font-bold">${cartItem.name}</h3>
                <h6 id="availablity" class="text-[10px] font-bold"> ${cartItem.category}</h6>
            </div> 
            <div class="product_price flex flex-col">
                <h3 id="itemPrice" class="item_name font-bold"> &#x20A6;${cartItem.price}</h3>
                <h6 id="discount" class="text-[10px]"> -10%</h6>
            </div>
        </div>
        <div class="flex justify-between items-center p-5">
            <div onclick="deleteItems()" class="delete_items p-3 cursor-pointer" id="deleteItems">
                <img class="w-3" src="/images/trash-can-regular.svg" alt="">
            </div>
            <div class="item_size flex ">
                <div onclick="decreaseItems()" id="decreaseItems" class="decrease_items bg-green-950 text-white p-3"> - </div>
                <div id="quantity" class="quantity text-green-950 p-3"> </div>
                <div onclick="increaseItems()" id="increaseItems" class="increase_items bg-green-950 text-white p-3"> + </div>

            </div>
        </div>  
    </div> `

    cartContainer.appendChild(cart_box)

 
}
}
class carts{
    constructor(id,name,price,Image,category,qty){
        this.id = id;
        this.name = name;
        this.price = price;  
        this.Image = Image;
        this.category = category;
        this.qty = qty;

    }

}
const mycart = new carts (cart.id,cart.name,cart.price,cart.image,cart.category,cart.qty);
console.log(mycart);

