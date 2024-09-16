import { loadFromStorage } from '../data/cart.js';
import {renderOrderSummary} from './Checkout/ordersummary.js';
import {renderPaymentSummary} from './Checkout/paymentsummary.js';
//import '../data/backend-practice.js';

/*
// ASYNC AWAIT can only be used with promises cannot use callback

async function loadPage(){ 
 try{     // try,catch used to catch the errors in code whenever we get error it skip the rest of code
 handle unexpected error / errors outside ourcontrol

 throw 'error1'; //throw error into the catch

 await loadProductsFetch();

  const value = await Promise((resolve,reject) => {
       throw 'error2';
       loadCart(() => {
        reject('error3') // gives error in the future
        resolve('value2'); //instead of .then we can store the value2 in value by using await
       });
  });
 } catch((error) => {  //catch error,handle error
     console.log('Unexpected Error.Please try again later');
  })

  renderOrderSummary();
  renderPaymentSummary();
  
}
loadPage()
});

*/

/*
import { loadProducts } from '../data/products.js';
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*

 // promise is better way to handle asynchronous code helps our code tokeep flat and avoid to much nesting
 thats why instead of callbacks we use promises

 promise.All([ // Run multiple promises at same time,wait for all of the promises to finish  before going to next step
    new Promise((resolve) => {   
      loadProducts(() => {   
      resolve('value1');
      });
    }),
    new Promise((resolve) => {
       loadCart(() => {
        resolve();
       });
  })

]).then(() => {   //add a next step Array of Promises
  renderOrderSummary();
  renderPaymentSummary();
  });   
 
new Promise((resolve) => {   //resolve is a function similar to jasmine done function , control when to goto next step
     loadProducts(() => {   
      resolve('value1');
     }); //whatever we used in resolve('value1) it is the parameter of then(val) 

}).then((val) => {
  return new Promise((resolve) => {
       loadCart(() => {
        resolve();
       });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

renderOrderSummary();
renderPaymentSummary();
