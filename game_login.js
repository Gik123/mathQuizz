function addUser(){
    player1_name = document.getElementById("name1Input").value;
    player2_name = document.getElementById("name2Input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}