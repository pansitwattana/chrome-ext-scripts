// TRUE: https://shopee.co.th/product/40886114/9338776629?smtt=0.5475150-1618400062.9
// TEST: https://shopee.co.th/product/131100564/3543947830
var startDate = new Date();
var endDate = new Date();
window.addEventListener("load", main, false);
async function main() {
  console.log('STEP 0: Loaded script')
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (document.getElementsByClassName('_3e_UQT').length > 0 && document.getElementsByClassName('_3e_UQT')[0].textContent) {
      clearInterval(jsInitChecktimer);
      const price = document.getElementsByClassName('_3e_UQT')[0].textContent
      runSelectItem(price);
    }
  }
}
// // https://shopee.co.th/api/v2/item/get?itemid=4102215836&shopid=40886114

// {
//   "matches": [
//     "https://shopee.co.th/product/*"
//   ],
//   "js": [
//     "content-script.js",
//     "inject.js"
//   ],
//   "run_at": "document_start"
// }
// "web_accessible_resources": [
//   "injected.js"
// ],

async function runSelectItem(price) {
  console.log(price)
  if (price != '฿3') {
    location.reload()
  }
  // -------------------------------------------//
  console.log('STEP 3: Click buy')
  document.getElementsByClassName('btn btn-solid-primary btn--l _3Kiuzg')[0].click()
  // -------------------------------------------//

  var jsInitChecktimer = setInterval(checkWhenFinish, 111);

  function checkWhenFinish() {
    if (document.getElementsByClassName('shopee-button-solid shopee-button-solid--primary').length > 0) {
      clearInterval(jsInitChecktimer);
      runCheckOut();
    }
  }
}

function runCheckOut() {
  console.log('STEP 4: Check out')
  document.getElementsByClassName('shopee-button-solid shopee-button-solid--primary')[0].click()


  var jsInitChecktimer = setInterval(checkWhenFinish, 111);
  function checkWhenFinish() {
    if (document.getElementsByClassName("checkout-payment-setting__payment-methods-tab")[0]?.childElementCount) {
      clearInterval(jsInitChecktimer);
      runPlaceOrder();
    }
  }
}

function runPlaceOrder() {
  console.log('STEP 5: Place Order')

  // Pay by Wallet
  // document.getElementsByClassName("checkout-payment-setting__payment-methods-tab")[0].children[0].firstElementChild.click()
  // document.getElementsByClassName('stardust-radio-button__outer-circle')[1].click()

  // Pay by Credit card
  document.getElementsByClassName("checkout-payment-setting__payment-methods-tab")[0].children[2].firstElementChild.click()
  document.getElementsByClassName('credit-card-subcategory__body')[0].children[0].click()

  var jsInitChecktimer = setInterval(checkForJS_Finish, 40);

  function checkForJS_Finish() {
    if (document.getElementsByClassName('stardust-button stardust-button--primary stardust-button--large j4IbXY _31pDGc').length == 0
      && document.getElementsByClassName('loading-spinner-popup__container').length == 0
    ) {
      clearInterval(jsInitChecktimer);
      console.log('STEP 6: Submit Order')
      document.getElementsByClassName('stardust-button stardust-button--primary stardust-button--large j4IbXY')[0].click()
      endDate = new Date()
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      console.log(`COMPLETED in ${seconds} seconds`)
    }
  }
}
