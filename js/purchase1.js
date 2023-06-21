async function getProducts() {

    const productListApiUrl = " https://5683-14-39-99-50.ngrok-free.app/shop/product/";
    const response = await fetch(productListApiUrl);
    const json = await response.json();

    const products = json.products;
    const productsHtmlArray = products.map(product => {

        const products = json.products;
        const productsHtmlArray = products.map(product => {

            console.log(product.korean_name);
            const html =`
                <div class="right-column">
                    <div class="product-description">
                        <span>원두 소개</span>
                        <h1>${product.korean_name}</h1>
                        <h2>${product.english_name}</h2>
                        <p>${product.roasting}</p>
                        <p>${product.aroma}</p>
                        <p>${product.roasting_date}</p>
                        <p>${product.description}</p>
                        <p>${product.delivery}</p>
                    </div>

                    <div class="product-configuration">
                        <label for="grind">원두 크기를 선택 해 주세요.<br></label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="1">Whole bean</option>
                            <option value="2">Ground coffee</option>
                        </select><br><br>

                            <label for="gram">그램수를 선택 해 주세요.<br></label>
                            <select class="form-select" aria-label="Default select example">
                                <!--  <option selected>Would you like grinding your bean?</option> -->
                                <option value="1">200g</option>
                                <option value="2">500g</option>
                            </select>

                            <br><br>
                                <!-- Product Pricing -->
                                <div class="product-price">
                                    <span>${product.price}<br><br></span>
                                    
                                    </div>
                                </div>`

                                return html;

    });

                                document.getElementById("productArea").innerHTML = productsHtmlArray.join('');
}