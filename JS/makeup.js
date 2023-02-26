
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
        let btn=document.createElement("button");
        btn.setAttribute('class',"cartbtn");
        btn.innerText="Add to bag"
        desc.innerText=element.desc
        div.append(desc)
        let add=document.createElement("p")
        add.setAttribute("class","add_name")
        add.innerText=element.additional
      
        let price=document.createElement("p")
        price.setAttribute("class","price_name")
        price.innerText=element.price
       
        card.append(image,div,add,price,btn)
        container.append(card)
    //    let allbtn= document.querySelectorAll(".cartbtn");
    //    for(let divbtn in allbtn){
    //     divbtn.addEventListener("click",(e)=>{
    //         console.log("obj")
    //     //    console.log(e)
    //          // prod_post(element)
    //      })
    //    }
    })
}
document.querySelector(".logo_pic_myglmm").addEventListener("click",function(){
    window.location.href="home.html"
  })

async function  prod_post(element){
    try {
        let response=await fetch("http://localhost:5600/cart/post",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
        body:JSON.stringify(element)
        });
        if(response.ok){
            let res=await response.json();
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }
};
   


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