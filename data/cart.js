export  let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart =  [{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      Quantity:2,
      deliveryOptionId : '1'
   },{
     productId:'aad29d11-ea98-41ee-9285-b916638cac4a',
     Quantity:1,
     deliveryOptionId : '2'
   }];
  }

}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
          matchingItem = cartItem;
      }
  });
 
  if(matchingItem){
    matchingItem.Quantity += 1;
  }else{
    cart.push({
      productId : productId,
      Quantity:1,
      deliveryOptionId : '1'
     });
  }
  saveToStorage();
}
export function removeFromCart(productId){
 const newCart = [];
   
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
     }
   });
   cart = newCart;
   saveToStorage();
}
export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
   
  cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
          matchingItem = cartItem;
      }
  });
 matchingItem.deliveryOptionId = deliveryOptionId;
 saveToStorage();
}