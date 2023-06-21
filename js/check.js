async function getProducts(){
    alert("상풒목록조회");
    
    const productListApiUrl = " https://5683-14-39-99-50.ngrok-free.app/shop/product/";
    const response = await fetch(productListApiUrl);
    const json = await response.json();
 

`<div class="py-5 text-center">
<img class="d-block mx-auto mb-4" src="image/main.png" alt="" width="200" height="80">
<h2>주문하기</h2>
<p class="lead">주문 내용을 확인 해 주세요.</p>
</div>

<div class="row g-5">
<div class="col-md-5 col-lg-4 order-md-last">
  <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-primary">What you order</span>
 <!--   <span class="badge bg-primary rounded-pill">3</span> -->
  </h4>
  Image<br>
  Description<br>
  <ul class="list-group mb-3">
    <li class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">Korean Name</h6>
        <small class="text-body-secondary">English Name</small>
      </div>
     <!-- <span class="text-body-secondary">$12</span>-->
    </li>
    <li class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">Product Id</h6>
        <small class="text-body-secondary">Roasting Date</small>
      </div>
     <!-- <span class="text-body-secondary">$8</span> -->
    </li>
    <li class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">Category</h6>
        <small class="text-body-secondary">Roasting</small>
      </div>
      <!--<span class="text-body-secondary">$5</span> -->
    </li>
    <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
      <div class="text-success">
        <h6 class="my-0">Aroma</h6>
        <small>Grind</small>
      </div>
      <!--<span class="text-success">−$5</span> -->
    </li>
    <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
      <div class="text-success">
        <h6 class="my-0">Weight</h6>
        <small>Delivery</small>
      </div>
      <!--<span class="text-success">−$5</span> -->
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <span>Total (KRW)</span>
      <strong>Price</strong>
    </li>
  </ul><br><br>`

  return html;

    });

    document.getElementById("productArea").innerHTML = productsHtmlArray.join('');