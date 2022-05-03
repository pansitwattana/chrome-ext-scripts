const fetch = require('node-fetch');

var fetchItem = async (shopId, productId) => {
  const res = await fetch(`https://shopee.co.th/api/v2/item/get?itemid=${productId}&shopid=${shopId}`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,th-TH;q=0.8,th;q=0.7",
      "if-none-match": "85e2506fd71998cf7001094762d177f0",
      "if-none-match-": "55b03-e2b9502fe6d604b110bdb38561d8c52e",
      "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-source": "pc",
      "x-requested-with": "XMLHttpRequest",
      "x-shopee-language": "en",
      "cookie": "_gcl_au=1.1.1495211659.1614587780; _fbp=fb.2.1614587780555.1248749315; SPC_IA=-1; SPC_F=pohGHBxBNK2scJu7AMNZTpkRV8n3l8Yk; REC_T_ID=336a2d1e-7a69-11eb-a775-b496918686ea; language=en; G_ENABLED_IDPS=google; SPC_CLIENTID=cG9oR0hCeEJOSzJzpyzctnbfiqkckfes; SPC_SI=bfftocsg3.a4dJbCTJQWZmVlPoxZ5NM8CsIYgECLv9; _gid=GA1.3.1451002732.1618246685; SPC_U=5475150; SPC_EC=QeJdRW3OW/cBXQ789QQawwHxbzf+ntRU1PIA0W9OL+kYY7fua3xd6GhUdkG116FD0Fmz1I+sox6cNXXm7Tq5gskZqRowlg/bpLc54edENJF+ifZ9s3abwfKJT8uW87tdtBCGJ1AETtVAXRQhE//F4A==; csrftoken=HvVCTCD7B0UzM34xKQyQVsTYhseSDxPI; welcomePkgShown=true; _med=affiliates; _fbc=fb.2.1618377853639.IwAR1q0G6LhN2ailaL90IVLF8OmtZExUdDsssVkK3DRBfW_9yJ2mjC6D9fgMY; AMP_TOKEN=%24NOT_FOUND; _dc_gtm_UA-61914165-6=1; _ga=GA1.1.1042873035.1614587781; SPC_R_T_ID=\"xobKVc4HXB1QjB5wWEHwvwgwkY9SZo6fpaPgtPaf8T3c/VXJSYnSTA0Op345j8pkGiA3DBSPsPRk+hG/5XEnyy/7Cm3GgDE+I7MPJ05+RpA=\"; SPC_T_IV=\"Ggt/230l9UAnkqIK7c1SOw==\"; SPC_R_T_IV=\"Ggt/230l9UAnkqIK7c1SOw==\"; SPC_T_ID=\"xobKVc4HXB1QjB5wWEHwvwgwkY9SZo6fpaPgtPaf8T3c/VXJSYnSTA0Op345j8pkGiA3DBSPsPRk+hG/5XEnyy/7Cm3GgDE+I7MPJ05+RpA=\"; _gali=modal; _ga_L4QXS6R7YG=GS1.1.1618392690.12.1.1618392722.28"
    },
    "referrer": "https://shopee.co.th/-..%E2%80%A2%E2%80%A2-%F0%9F%9A%9A-%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B9%88%E0%B8%87-NINTENDO-SWITCH-ANIMAL-CROSSING-NEW-HORIZONS-(GENERATION-2)-LIMITED-EDITION-(%E0%B8%9C%E0%B9%88%E0%B8%AD%E0%B8%99-0-)-i.40886114.4102215836",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  });
  return res.json()
}

(async function () {
  const data = await fetchItem('40886114', '9338776629');
  console.log(data.item)
})()
