Player1_Name = localStorage.getItem("P1_Name");
Player2_Name = localStorage.getItem("P2_Name");

Player1_Score = 0;
Player2_Score = 0;

document.getElementById("P1_Name").innerHTML = Player1_Name + " : "; 
document.getElementById("P2_Name").innerHTML = Player2_Name + " : ";

document.getElementById("Player1_Score").innerHTML = Player1_Score;
document.getElementById("Player2_Score").innerHTML = Player2_Score;

document.getElementById("player_question").innerHTML = "question turn- "+ Player1_Name;
document.getElementById("player_answer").innerHTML = "answer turn- "+ Player2_Name;

function Send() {
   number1 = document.getElementById("number1").value = "";
   number2 = document.getElementById("number2").value = "";
   actual_answer = parseInt(number1) * parseInt(number2);
   console.log("actual_answer");
   question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
   input_box = "<br>Answer: <input type='text' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input_box + check_button;
   document.getElementById("output").innerHTML = row;
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        update_player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML  = update_player1_score;
    }
    else {
        update_player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById.apply("player_question").innerHTML = "Question Turn - " + player1_name;
    }
}