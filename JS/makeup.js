fetch("https://63f7075ae40e087c95861b07.mockapi.io/myGlmm")
.then((resObj)=>{
    return resObj.json();
})
.then((accData)=>{
    console.log(accData.data)
    displayProduct(accData.data)
})
.catch((error)=>{
    console.log(error)
})

let container =document.getElementById("api")
function displayProduct(data){
    data.forEach((element)=>{
        let card =document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",element.img);
        let desc=document.createElement("p")
        desc.innerText=element.desc




        card.append(image,desc)
        container.append(api)
    })
}
document.querySelector(".logo_pic_myglmm").addEventListener("click",function(){
    window.location.href="home.html"
  })