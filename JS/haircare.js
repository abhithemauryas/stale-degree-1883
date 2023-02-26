fethdata()
async function fethdata(){
    try {
        let response=await fetch("http://localhost:5600/makeup/get");
        if(response.ok){
            let res=await response.json();
            console.log(res);
            displayProduct(res.data)
        }
    } catch (error) {
        console.log(error);
    }
}

let container =document.getElementById("api")
function displayProduct(data){
    data.forEach((element)=>{
        let card =document.createElement("div")
        card.setAttribute("class","api_div")
        let image=document.createElement("img")
        image.setAttribute("src",element.image);
        let div =document.createElement("div")
        let desc=document.createElement("p")
        desc.setAttribute("class","desc_name")
        desc.innerText=element.desc
        div.append(desc)
        let add=document.createElement("p")
        add.setAttribute("class","add_name")
        add.innerText=element.additional
        let price=document.createElement("p")
        price.setAttribute("class","price_name")
        price.innerText=element.price
   
        card.append(image,div,add,price)
        container.append(card)
    })
}
document.querySelector(".logo_pic_myglmm").addEventListener("click",function(){
    window.location.href="home.html"
  })


//   ------------------------------------
function findme() {


    if (event.key === "Enter") {
    
        let searchbar = document.querySelector(".search_box").value
        if (searchbar == "makeup") {
            window.location.href = "makeup.html"
    
        }
        else if (searchbar == "haircare") {
            window.location.href = "haircare.html"
    
        }
        else if (searchbar == "offer") {
            window.location.href = "offer.html"
        }
    }
    }