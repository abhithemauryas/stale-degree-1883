
let arr=JSON.parse(localStorage.getItem("Credentials"))||[]

document.querySelector("form").addEventListener("submit",function(e
    ){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pwd").value;
    if(name==""||email==""||pass==""){
        alert("Please Fill the form")
    }else{
        let obj={name,email,pass};
        console.log(obj);
        arr.push(obj);
        localStorage.setItem("Credentials",JSON.stringify(arr));
        alert("Sign Up Successful")
        window.location.href="loginpage.html"

    }
})
