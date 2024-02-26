let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
       
    }
    else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})
//navbar

let shops =document.getElementById("shops");
let reviews =document.getElementById("reviews");
let blogs =document.getElementById("blogs");
let contacts =document.getElementById("contacts");
shops.addEventListener("click", ()=>{
    shops.style.color="rgb(40, 185, 185)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})
reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(40, 185, 185)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})


blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(40, 185, 185)";
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})


contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(40, 185, 185)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})
// card js
let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage");
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");
let bybtn = document.getElementById(".bybtn");

console.log(crd);
crd.forEach(function(curvalue){
    curvalue.addEventListener("click", function(){
        itempage.style.display="flex";
        container.style.display="none";

        let imgsrc = curvalue.firstElementChild.src ;
        itemimg.src=imgsrc;
    })
})
function displayForm(){
    let itempage = document.querySelector(".itempage");
    itempage.innerHTML = `
    <style>
    .buypage{
        display: flex;
        width: 40%;
        background-color: #fff;
        padding: 22px;
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 40%);
        top: -15%;
        border-radius: 4px;
    }
    .buytext input{
        width: 95%;
        padding: 7px;
        border: 2px solid black ;
        margin-top: 8px;
        font-size: 18px;
    }
    .buytext button{
        width: 120px;
        height: 34px;
        background-color: rgb(4, 100, 100);
        color: #fff;
        font-size: 20px;
        border: none;
        margin-top: 22px;
    }
    .buypage .cross{
        position: absolute;
        top: 0%;
        left: 0%;
        background-color: rgb(184, 174, 174);
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
    }
    .buytext select{
        padding: 4px;
        font-size: 18px;
    }
    </style>
    <div class="buypage">
        <div class="cross">
            <i onClick = "alert('Order Cancelled!')" class="fa-solid fa-xmark"></i>
        
        </div>
        <div class="buytext" >
            <h3>enter details</h3>
            <input type="text" placeholder="enter your name "><br>
            <input type="text" placeholder="enter your adress"><br>
            <input type="text" placeholder="enter your mobile number"><br>
            <h3>payment option</h3>
            <select>
                <option value="google-pay">google-pay</option>
                <option value="phone-pay">phone-pay</option>
                <option value="e-sewa">e-sewa</option>
                <option value="cash-on-delivery">cash-on-delivery</option>
            </select> 
            
            <br>
            <button onClick = "alert('Payment Successful!')">submit</button>
        </div>
    </div>
    `
};