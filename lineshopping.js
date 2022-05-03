
window.addEventListener("load", main, false);
async function main() {
  console.log('STEP 0: Loaded script')
  var point = Number.parseInt(document.getElementsByClassName('leading-19xem')[1].textContent.replace('\n            ', '').replace('\n          ', ''))
  console.log(`STEP 1: Point: ${point}`)

  if (point > 90) {
    document.getElementsByClassName('cursor-pointer h-50xem w-full focus:outline-none font-bold text-white disabled:bg-gray-18 rounded-3xem bg-green-1-gradient')[0].click()
  } else {
    console.log('Point not enough')
  }
}