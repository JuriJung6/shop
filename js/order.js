
async function getProducts(){
    
    
    const productListApiUrl = " https://5683-14-39-99-50.ngrok-free.app/shop/product/";
    const response = await fetch(productListApiUrl);
    const json = await response.json();
 
    const products = json.products;
    const productsHtmlArray = products.map(product => {

        console.log(product.korean_name);
        const html = `<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">${product.korean_name}<br>${product.english_name}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${product.price}</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>${product.category}</li>
              <li>${product.roasting}</li>
              <li>${product.aroma}</li>
              <li>${product.description}</li>
              <li>${product.weight}</li>
              <li>${product.grind}</li>
              <li>${product.delivery}</li>
              <li>${product.roasting_date}</li>
            </ul>
            <a href="purchase2.html?product_id=${product.id}"><button type="button" class="w-100 btn btn-lg btn-outline-primary"
              >구매하기</button></a>
          </div>
        </div>
      </div>`

      return html;

    });

    document.getElementById("productArea").innerHTML = productsHtmlArray.join('');
}



// fetch(productListApiUrl)
// .then(response) => {
//     //http method : GET
// const response = await fetch(productListApiUrl);
// const jsonObject = await response.json();
// const products = jsonObject.products;
// console.log('조회된 상품의 목록', products);
// console.log('조회된 상품의 목록의 갯수', products.length);
// //조회된 상품 목록을 가지고 DOM을 생성해서 html에 넣기.
// const divRow = document.querySelector("#productsSection > div.row")
// console.log('row div', divRow);
// products.map(product => {
//     console.log("상품 단건", product);
//     const divCol = document.createElement('div');
//     divCol.className = "col";

//     const divCard = document.createElement('div');    
//     divRow.innerText=product.korean_name;
//     divCol.appendChild(divCard)
//     divRow.appendChild(divCol);

//     const divCard = document.createElement('img');    
//     divRow.innerText=product.korean_name;
//     divCol.appendChild(divCard)
//     divRow.appendChild(divCol);

//     const h5 = doument.createElement('h5');
//     h5.className = 'card-title';
//     h5.innerText = product.korean_name;

//     cardBody. appendChild(h5);

//     divCard.appendChild(img);
//     divCard.appendChild(cardBody);

//     divCol.appendChild(divCard);

//     divRow.appendChild(divCol);
// }

// }) 



