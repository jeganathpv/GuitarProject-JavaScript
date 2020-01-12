
var iter=0;
var product="";
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        product = JSON.parse(this.responseText);
        // document.getElementById('reviews').innerHTML=product;
        updatedetails(iter);
      }
    };
    xhttp.open("GET", "../data/guitar.json", true);
    xhttp.send();

function updatedetails(iter){
    document.getElementById("image").src = product[iter]['image_path'];
    var price="<h2>&dollar;"+product[iter]['price']+"</h2>"
    var description="<p>"+product[iter]['product_description']+"</p>";
    var shipping="<p>"+product[iter]['shipping_details']+"</p>";
    var available="";
    if(product[iter]['stock_availability']){
        available="<p>Stock Available</p>";
        available+="<br><p>Items Left : "+product[iter]['no_of_items']+"</p>"
    }else{
        available="<p>Out of Stock</p>";
    }
    var reviews=product[iter]['customer_reviews'].split(';')
    var rev="<h2>Reviews</h2>";
    for(var i=0;i<reviews.length;i++){
        rev+="<p>"+reviews[i]+"</p><br>";
    }

    document.getElementById('price').innerHTML=price;
    document.getElementById('description').innerHTML=description;
    document.getElementById('shipping').innerHTML=shipping;
    document.getElementById('itemsleft').innerHTML=available;
    document.getElementById('reviews').innerHTML=rev;
}
function actionbutton(iter){
    if (iter==0){
        document.getElementById('nextBtn').style.display="";
        document.getElementById('prevBtn').style.display="none";
    }else if (iter==product.length - 1){
        document.getElementById('nextBtn').style.display="none";
        document.getElementById('prevBtn').style.display="";
    }else{
        document.getElementById('nextBtn').style.display="";
        document.getElementById('prevBtn').style.display="";
    }
}
function nextbutton(){
    iter++;
    actionbutton(iter);
    updatedetails(iter);
}
function prevbutton(){
    iter--;
    actionbutton(iter);
    updatedetails(iter);
}