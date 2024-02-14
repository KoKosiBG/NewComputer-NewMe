let buttons = document.querySelectorAll(".questions div");
let questions = document.querySelector(".quiz-container");
let correct = document.querySelector(".correct");
let h1 = document.querySelector(".quiz-container h1")
let millioner = document.getElementById("mill")
let index = 0;

millioner.play()
function checkAnswer() {
    questions.style.display = "none";
    
        millioner.pause();
    
        correct.style.display = "flex";
    document.getElementById('correctSound').play();
    setTimeout(() => {
        document.getElementById('correctSound').pause();
        questions.style.display = "flex";
        correct.style.display = "none";
        millioner.play()
    }, 4000);
}

function ChangeAnswers(one,two,three,four) {
    buttons[0].innerText = one
    buttons[1].innerText = two
    buttons[2].innerText = three
    buttons[3].innerText = four
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (index === 0) {
            checkAnswer();
            h1.innerText = "How many times have I been on a rollercoaster"
            ChangeAnswers("1", "2", "3", "4")
            index++;
        }
        else if (index === 1) {
            if(button.innerText === "3"){
                checkAnswer();
                h1.innerText = "My fourth favourite insect"
                ChangeAnswers("Spider", "Ant", "Bee", "Mantis")
                index++;
            }
            else{
                alert("My dissapointment is imessurable and my day is ruined")
            }
            
        }
        else if(index === 2){
            if (button.innerText === "Mantis") {
                checkAnswer();
            h1.innerText = "How much do I love you"
            ChangeAnswers("A lot", "∞", "Незнайсет милиона", "")
            index++;
            }else{
                alert("My dissapointment is imessurable and my day is ruined")
            }
        }else{
            window.location.href = "final.html";
        }
    });
});
