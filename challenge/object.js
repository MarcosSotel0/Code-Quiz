// question 
const questionsAndAnswer =[
    {question:"What is the rarest M&M color?",                                                  answers:[{question:"orange",value:0},{question:"blue",value:0},{question:"red",value:0},{question:"Brown",value:1}]},
    {question:"In a website browser address bar, what does “www” stand for?",                   answers:[{question:"World Wide Web",value:1},{question:"internet",value:0},{question:"computer",value:0},{question:"WWW",value:0}]},
    {question:"In what year were the first Air Jordan sneakers released?",                      answers:[{question:"1982",value:0},{question:"1984",value:1},{question:"1986",value:0},{question:"1988",value:0}]},
    {question:"In a bingo game, which number is represented by the phrase “two little ducks”?", answers:[{question:"22",value:1},{question:"23",value:0},{question:"24",value:0},{question:"27",value:0}]},
    {question:"According to Greek mythology, who was the first woman on earth?",                answers:[{question:"mom",value:0},{question:"Pandora",value:1},{question:"lenord",value:0},{question:"cratos",value:0}]},
]

var i = 0;
var sec = 60;
function questionCreator(){
    
    if(i == 0){
        // remove button of start quiz 
        document.getElementById('start_BT').remove();
        document.getElementById('table_Score').classList.remove('active');
        // questions are activated
        document.getElementById('Q-A_container').classList.toggle("active");
        // start the timer
        var time = setInterval(myTime, 1000);
    }

    if(i < questionsAndAnswer.length){
        // question creator
        let h1Q = document.getElementById('quest');
        h1Q.innerHTML = questionsAndAnswer[i].question;
        
        // answers creator
        document.getElementById('answer0').innerHTML = questionsAndAnswer[i].answers[0].question;
        document.getElementById('answer1').innerHTML = questionsAndAnswer[i].answers[1].question;
        document.getElementById('answer2').innerHTML = questionsAndAnswer[i].answers[2].question;
        document.getElementById('answer3').innerHTML = questionsAndAnswer[i].answers[3].question;
        
        //answer value 
        document.getElementById('answer0').value = questionsAndAnswer[i].answers[0].value;
        document.getElementById('answer1').value = questionsAndAnswer[i].answers[1].value;
        document.getElementById('answer2').value = questionsAndAnswer[i].answers[2].value;
        document.getElementById('answer3').value = questionsAndAnswer[i].answers[3].value;
        i++;
    }else{
        //clear all questons and answers
        document.getElementById('Q-A_container').remove();

        // table score will apear
        document.getElementById('finle_Score').classList.toggle("active");

        // removes repetition of the timer
        clearInterval(time);

    }
    
} 

// drecreasing the time by 1 second
function myTime(){
    document.getElementById('timer').innerHTML= sec;
    sec --;
}

// cheking if answer is correct or wrong 
function chekAnswers(Qvalue){
    
    if(Qvalue == 1){
        // increse time by 5
        sec = sec + 5 ;
        document.getElementById('timer').innerHTML= sec;
        document.getElementById('right_wrong').innerHTML="right";
    }else{
        // decreas time by 5
        sec = sec - 5 ;
        document.getElementById('timer').innerHTML= sec;
        document.getElementById('right_wrong').innerHTML="wrong";
    }
    if(i == 5){
        document.getElementById('score').innerHTML = sec;  
    }
}



// 
function tableScore(){
    // get the value of the timer 
    let response = document.getElementById('users_Input').value;

    // save name in local storage 
    var userName = JSON.parse(localStorage.getItem('name')) || [];
    userName.push(response);
    var responseName = JSON.stringify(userName);
    localStorage.setItem('name',responseName);

    // save score/time in local storage
    var userScore = JSON.parse(localStorage.getItem('score')) || [];
    userScore.push(sec);
    var responseScore = JSON.stringify(userScore);
    localStorage.setItem('score',responseScore);
    scoreBord();
}

// score board 
function scoreBord(){
    document.getElementById('finle_Score').classList.remove();
    // geting the name
    var responseARName = JSON.parse(localStorage.getItem('name')) || [];
    var localDataName = localStorage.getItem('name');
    var nameData = JSON.parse(localDataName);

    // geting the score
    var localDataScore = localStorage.getItem('score');
    var ScoreData = JSON.parse(localDataScore);
    // get the score
    if(responseARName.length == 0){
        return;
    }else{
        document.getElementById('table_Score').classList.toggle("active");
        for(var i = 0; i < nameData.length;i++){
            let list = document.createElement('li');
            list.id = 'TS_List';
            list.innerHTML = '<p id="TS_Name">'+nameData[i]+'<p id="TS_Score">'+ScoreData[i]+'</p></p>';
            document.getElementById('list').appendChild(list);
        }
    }
}


