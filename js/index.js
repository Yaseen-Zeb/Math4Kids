
let answer = 0,
options,
navLinks = document.querySelectorAll("ul li");


function generated(){
    let type = document.querySelector(".active");
    
    let n_1 = Math.floor(Math.random() * 13)
    let n_2 = Math.floor(Math.random() * 13)
    let wrong_ans_1 = Math.floor(Math.random() * 13)
    let wrong_ans_2 = Math.floor(Math.random() * 13)
    let sign;
    
    if (type.classList.contains("addition")) {
        sign = "+";
        answer = n_1 + n_2;
    }else if(type.classList.contains("subtraction")){
        sign = "-"
        answer = n_1 - n_2;
    }else{
        sign = "×"
        answer = n_1 * n_2;
    }
    let main_arr =[]
    let all_answer = [answer ,wrong_ans_1 ,wrong_ans_2]
    main_arr = all_answer.sort(() => {Math.random() > 0.5 ? -1 : 1})

    document.querySelector(".main-section").innerHTML=`
    <div class="first">
    <h1 class="num-1" style="color:rgb(13, 255, 0) ;">${n_1}</h1>
    <h1 class="plus" style="color: rgb(255, 204, 0);">${sign}</h1>
    <h1 class="num-2" style="color: rgb(0, 13, 255);">${n_2}</h1>
    <h1 class="equal" style="color:red ;">=</h1>
    <h1 class="q-sin" style="color:rgb(255, 0, 234);">?</h1>
    </div>
    <div class="second">
    <h1 class="ans-1" style="background-color:rgb(0, 17, 255)">${main_arr[0]}</h1>
    <h1 class="ans-2" style="background-color:purple;">${main_arr[1]}</h1>
    <h1 class="ans-3" style="background-color:red ;">${main_arr[2]}</h1>
    </div>
    `
    options = document.querySelectorAll(".second h1")
    options.forEach(option => {
        option.onclick = () =>{
            if(option.textContent == answer){
                        generated()
                    }else{
                        option.classList.add("shake");
                        setTimeout(() => {
                            option.classList.remove("shake");
                        }, 8000);
                    }
        }
    });
}
generated()

navLinks.forEach((navLink) => {
    let arr = [...navLinks];
    navLink.onclick = () =>{
    arr.forEach((e)=>{
        e.classList.remove("active");
    })
    navLink.classList.add("active")
    generated()
    }
});





