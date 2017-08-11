var winconditions =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],
                    [2,5,8],[3,6,9],[1,5,9],[7,5,3]];
var x = document.getElementById("x-score");
var o = document.getElementById("o-score");
var evenCells = document.getElementsByClassName("even");
var oddCells = document.getElementsByClassName("odd");
var turn = document.getElementById("move");
var playero = 0;
var playerx = 0;
var clicks = 0;
var X,O;
function startup(){
    X = prompt("Enter Player X name:");
    O = prompt("Enter Player O name:");
    if(hasPlayers()){
        document.getElementById("player-x").innerHTML = X;
        document.getElementById("player-o").innerHTML = O;
        turn.innerHTML = X;
    } else {
        document.getElementById("player-x").innerHTML = "Player X";
        document.getElementById("player-o").innerHTML = "Player O";
        turn.innerHTML = "Player X";
    }
}
function changeName() {
    currentPlayer = turn.innerHTML;
    if(currentPlayer.includes(X)){
        X = prompt("Enter Player X name:",X);
        O = prompt("Enter Player O name:", O);
        if(hasPlayers()){
            document.getElementById("player-x").innerHTML = X;
            document.getElementById("player-o").innerHTML = O;
            turn.innerHTML = X;
        } else {
            document.getElementById("player-x").innerHTML = "Player X";
            document.getElementById("player-o").innerHTML = "Player O";
            turn.innerHTML = "Player X"
        }
    } else if (currentPlayer.includes(O)){
        X = prompt("Enter Player X name:",X);
        O = prompt("Enter Player O name:", O);
        if(hasPlayers()){
            document.getElementById("player-x").innerHTML = X;
            document.getElementById("player-o").innerHTML = O;
            turn.innerHTML = O;
        } else {
            document.getElementById("player-x").innerHTML = "Player X";
            document.getElementById("player-o").innerHTML = "Player O";
            turn.innerHTML = "Player O"
        }
    }

}
function hasPlayers(){
    if (X === null || O === null){
        return false;
    } else if (X === "" || O === ""){
        return false;
    }else if (X != "" || O != ""){
        return true;
    }
    else{
        return false;
    }
}
function move(id){
    var element = document.getElementById(id);
    if(clicks < 8){
        if(clicks%2 === 0){
            if(element.innerHTML != ""){
                alert("Somebody has already moved here.");
            } else {
                clicks++;
                element.innerHTML = "<b>X</b>";
                if(hasPlayers()){
                    turn.innerHTML = O;
                    if(win()){
                        alert(X +" has won!");
                        reset();
                        playerx++;
                        x.innerHTML = playerx;
                    }
                } else {
                    turn.innerHTML = "Player O"
                    if(win()){
                        alert("Player X has won!");
                        reset();
                        playerx++;
                        x.innerHTML = playerx;
                    }
                }
            }
        }else{
            if(element.innerHTML != ""){
                alert("Somebody has already moved here.");
            } else {
                clicks++;
                element.innerHTML = "<b>O</b>";
                if(hasPlayers()){
                    turn.innerHTML = X;
                    if(win()){
                        alert(O +" has won!");
                        reset();
                        playero++;
                        o.innerHTML = playero;
                    }
                }else{
                    turn.innerHTML = "Player X"
                    if (win()) {
                        alert("Player O has won!");
                        reset();
                        playero++;
                        o.innerHTML= playero;
                    }
                }
            }
        }
    } else {
        var cont = confirm("Cat game!\nContinue playing?");
        if(cont){
            reset();
        } else {
            resetScore();
        }
    }
}
function win(){
    for(var i = 0; i<= winconditions.length-1; i++){
        if(document.getElementById(winconditions[i][0]).innerHTML.includes("X") 
        && document.getElementById(winconditions[i][1]).innerHTML.includes("X") 
        && document.getElementById(winconditions[i][2]).innerHTML.includes("X"))
        {
            clicks = 0;
            return true;
        }
        else if(document.getElementById(winconditions[i][0]).innerHTML.includes("O") 
        && document.getElementById(winconditions[i][1]).innerHTML.includes("O") 
        && document.getElementById(winconditions[i][2]).innerHTML.includes("O"))
        {
            clicks = 0;
            return true;
        }
    }
    return false;
}
function reset(){
    clicks = 0;
    if(hasPlayers()){
        turn.innerHTML = X;
    }else{
        turn.innerHTML = "Player X";
    }
    for (var i = 0; i < evenCells.length; i++) {
        evenCells[i].innerHTML = "";
    }
    for (var i = 0; i < oddCells.length; i++) {
        oddCells[i].innerHTML = "";
    }
}
function resetScore(){
    reset();
    playerx = 0;
    playero = 0;
    x.innerHTML = playerx;
    o.innerHTML = playero;
    var newgame = confirm("New players?","Yes","No");
    if(newgame){
        startup();
    }
}