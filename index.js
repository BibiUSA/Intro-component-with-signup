const firstName= document.querySelector(".first-name");
const lastName= document.querySelector(".last-name");
const email= document.querySelector(".email-address");
const password= document.querySelector(".password");
const button= document.querySelector("#button");
console.log(firstName.innerHTML);


const validEmail = document.querySelector(".valid-email");



const input= document.querySelectorAll(".input");
const please= document.querySelectorAll(".please");


button.addEventListener("click", function(){
    let sum =0;
    let emailRequirements= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    for (let i=0; i <input.length; i++){
        if(input[i].value == null || input[i].value==""){
            please[i].classList.remove("hidden");
            console.log(please[i].value);
        } else {
            sum++;
            please[i].classList.add("hidden");
            
        } 

        if (!email.value.match(emailRequirements)){
            validEmail.classList.remove("hidden");
            console.log("hello");} else{
                validEmail.classList.add("hidden");
                sum++;
                console.log(sum);
            }

        if(sum===8){
            button.innerHTML = "THANK YOU FOR SIGNING UP!";
        }
    }
    
})
