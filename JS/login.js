

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
        var res=JSON.parse(localStorage.getItem("Credentials"));
        var ans=display(res);
        if(ans==true){
            // alert("loginSuccesful")
            window.location="home.html"
        }else{
            alert("Wrong Credentials or You did not signUp yet")
        }
    })
    function display(res){
        let flag=false;
        res.forEach((el)=>{
            let email=document.querySelector("#email").value;
            let password=document.querySelector("#pwd").value;
            if(el.email==email&&el.pass==password){
                flag=true;
            }
        })
        if(flag==true){
            return true;
        }
        else{
            return false;
        }
    }
    