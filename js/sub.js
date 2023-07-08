let option_1 = document.querySelector(".ans-1")
let option_2 = document.querySelector(".ans-2")
let option_3 = document.querySelector(".ans-3")
let options = document.querySelectorAll(".second h1")
let num_1 = document.querySelector(".num-1")
let num_2 = document.querySelector(".num-2")
let answer = 0;


function generated(){
    let n_1 = Math.floor(Math.random() * 13)
    let n_2 = Math.floor(Math.random() * 13)
    let wrong_ans_1 = Math.floor(Math.random() * 13)
    let wrong_ans_2 = Math.floor(Math.random() * 13)

   

    num_1.innerHTML = n_1
    num_2.textContent = n_2

    answer = n_1 - n_2;

    let main_arr =[]
    let all_answer = [answer ,wrong_ans_1 ,wrong_ans_2]


for (let index = all_answer.length; index--;) {
  let random =  all_answer.splice(Math.floor(Math.random()* (index+1)) , 1)
    main_arr.push(random)
}


option_1.textContent = main_arr[0]
    option_2.textContent = main_arr[1]
    option_3.textContent = main_arr[2]

}

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
generated()