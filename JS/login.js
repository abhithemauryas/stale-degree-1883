const { json } = require("express");


document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
            let email=document.querySelector("#email").value;
            let password=document.querySelector("#pwd").value;
            if(email==""&&el.password==""){
                alert("fill the all credentials");
            }else{
                let obj={email,password};
                loginFetch(obj)
            }
    });

    async function loginFetch(obj){
        try {
            let response=await fetch("http://localhost:5600/login",{
                method:"POST",
                headers:{
                    'Content-Type':"Application/json"
                },
                body:JSON.stringify(obj)
            });
            if(response.ok){
                let ans=await response.json();
                alert(ans.msg);
                localStorage.setItem("token",ans.token);
                console.log(ans);
            }
        } catch (error) {
            console.log(error);
        }
    }
    