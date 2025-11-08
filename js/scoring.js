window.score = 0;

function currScore(){
    for(let i=0; i<questions.length; i++){
        if(userChoices[i]===questions[i].ans){
            score++;
        }
    }

    document.querySelector('.score').innerText = `Your Score: ${score}/${questions.length}`;
    score = 0;
}