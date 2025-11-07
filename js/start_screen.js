function startQuiz(){
    document.querySelector('.start-screen').style.display="none";
    document.querySelector('.quiz-screen').style.display="flex";
    document.querySelector('.result-screen').style.display="none";

    window.sec = 0;
    window.min = 0;
    window.timerId = setInterval(function(){
        if(sec==59){
            min++;
            sec=0;
        }
        else    sec++;

        document.querySelector('.timer').innerText = `Time Elapsed - ${min}:${sec}`;
    }, 1000);
}

function viewHighScore(){
    document.querySelector('.start-screen').style.display="none";
    document.querySelector('.highscore-screen').style.display="flex";
}