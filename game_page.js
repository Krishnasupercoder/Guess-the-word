player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn :"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn :"+ player2_name;

function Send(){
Get_word= document.getElementById("word").value;
word=Get_word.toLowerCase()
console.log("word in lower case="+Get_word)
First=word.charAt(1)
console.log(First)
length_divide_2=Math.floor(word.length/2)
Second=word.charAt(length_divide_2)
console.log(Second)
length_minus_1=word.length-1
third=word.charAt(length_minus_1)
console.log(third)
remove_First=word.replace(First,"_")//a_tions
remove_Second=remove_First.replace(Second,"_") //a_t_ons
remove_third=remove_Second.replace(third,"_" ) //a_t_on_
question_word="<h4 id='word_display'>Q."+remove_third+" </h4>"
input_box="Answer: <input id='input_check_box' type='text'> "
check_button="<br> <br> <button class='btn-info' onclick='check()'>check</button>"
row=question_word+input_box+check_button
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=""
}
answer_turn="player2"
question_turn="player1"
function check(){
    get_answer=document.getElementById("input_check_box").value
    answer=get_answer.toLowerCase()
    if (answer==word ){
        if(answer_turn=="player2"){
            player2_score=player2_score+1
            document.getElementById("player2score").innerHTML=player2_score
    
        }
        else{
            player1_score=player1_score+1
            document.getElementById("player1score").innerHTML=player1_score
        }

    }
if(question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question turn : "+player2_name
}
else{
    question_turn="player1" 
    document.getElementById("player_question").innerHTML="question turn : "+player1_name
}
if(answer_turn=="player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="answer turn : "+player2_name
}
else{
    answer_turn="player1" 
    document.getElementById("player_answer").innerHTML="answer turn : "+player1_name
}
document.getElementById("output").innerHTML=""
}