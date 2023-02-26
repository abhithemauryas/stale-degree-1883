


document.querySelector("form").addEventListener("submit",function(e
    ){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pwd").value;
    if(name==""||email==""||password==""){
        alert("Please Fill the form")
    }else{
        let obj={name,email,password};
        console.log(obj);
       signup_fetch(obj)

    }
})
async function signup_fetch(obj){
    try {
        let response=await fetch("http://localhost:5600/signup",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(obj)
        });
        if(response.ok){
            let res=await response.json();
            alert(res.msg)
            window.location.href="./loginpage.html"
            console.log(res);
        }
    } catch (error) {
        console.log(error);
    }
}