function show_user_score(){
    var stored_user_score = JSON.parse(localStorage.getItem("username_score"));
    if (stored_user_score !== null) {
        user_score = stored_user_score;
    }
    display_score_records();
}

function display_score_records(){
    document.getElementById("score-list").innerHTML = "";
    for (var i = 0; i < user_score.length; i++) {
        var usernm = user_score[i].username;
        var score = user_score[i].score;
        var li = document.createElement("li");
        li.textContent = usernm + " ------> " + score;
        li.setAttribute("data-index", i);
        document.getElementById("score-list").appendChild(li);
    }}

show_user_score();