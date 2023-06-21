
async function getProducts(){
    alert("상풒목록조회");
    
    const productListApiUrl = "https://5683-14-39-99-50.ngrok-free.app/shop/product/";
    const response = await fetch(productListApiUrl);
    const json = await response.json();
 
    const products = json.products;
    const productsHtmlArray = products.map(product => {

        console.log(product.korean_name);
        const html = `${product.Id} <br><br>
        ${product.korean_name} <br><br>
        ${product.english_name} <br><br>
        ${product.image} <br><br>
        ${product.description} <br><br>
        ${product.roasting_date$} <br><br>
        ${product.price} <br><br><br><br>`

      return html;

    });

    document.getElementById("productArea").innerHTML = productsHtmlArray.join('');
}