
window.addEventListener("load", myMain, false);
console.log('loaded script')
function myMain(evt) {
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (typeof SOME_GLOBAL_VAR != "undefined"
      || document.getElementsByClassName("checkout-payment-setting__payment-methods-tab")[0]?.childElementCount
    ) {
      clearInterval(jsInitChecktimer);
      runPlaceOrderScript();
    }
  }
}

function runPlaceOrderScript() {
  document.getElementsByClassName("checkout-payment-setting__payment-methods-tab")[0].children[2].firstElementChild.click()
  document.getElementsByClassName('credit-card-subcategory__body')[0].children[1].click()

  var priceText = document.getElementsByClassName('_2B2JE5 _8sR6u _2WRVuI')[0].textContent;
  var itemPrice = parseFloat(priceText.replace('฿', '').replace(',', ''))
  if (itemPrice < 30) {
    console.log('ITEM PRICE IS CORRECT')
    // document.getElementsByClassName('stardust-button stardust-button--primary stardust-button--large j4IbXY')[0].click()
  } else {
    console.log('ITEM PRICE IS OVER')
    // location.reload()
  }
}
