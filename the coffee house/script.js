
const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnitem = event. target
    var product = btnitem.parentElement
    var productImg = product.querySelector("img").src
    var productName =  product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerText
   // console.log(productPrice,productImg,productName)
    addcart(productPrice,productImg,productName)
}})

})
function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var cartItem =  document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName ) {
            alert("Sản Phẩm Của Bạn Đã Có Trong Giỏ Hàng")
            return

        }
    }

    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width:200px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()

}

//----------totalprice---------//
function carttotal (){
    var cartItem =  document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
       
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        
        totalA = inputValue*productPrice*1000
        // totalB = totalA.tolocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
    }
    var carttotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
    //console.log(carttotalA)
}
//----------------Delete cart---------------//
function deleteCart(){
    var cartItem =  document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement 
            cartitemR.remove()
            carttotal ()
            // console.log(cartitemR)     
        }) 
       
    }
}
function inputchange () {
    var cartItem =  document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal ()
        })
       
    }
}
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-plus")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "-100%"
})



