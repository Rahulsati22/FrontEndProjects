let turn = "X";
let boxes = document.getElementsByClassName("box");
let statement = document.getElementById("statement");
let game_over = false;
let count = 0;
function check_winner() {
  let texts = document.getElementsByClassName("box");
  let helper = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7],
  ];
  helper.forEach((element) => {
    if (
      texts[element[0]].innerText === texts[element[1]].innerText &&
      texts[element[1]].innerText === texts[element[2]].innerText &&
      texts[element[0]].innerText != ""
    ) {
      game_over = true;
    }
    // console.log(boxes[element[0]].innerText);
  });
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    count++;
    if(boxes[i].innerText == ""){
    boxes[i].innerText = turn;
    if (turn == "X") {
      check_winner();
      if (game_over == true) {
        statement.innerText = "Winner is X";
        return;
      } else {
        if (count == 9) {
          statement.innerText = "Draw";
        } else {
          statement.innerText = "Turn for O";
          turn = "O";
        }
      }
    } else {
      check_winner();
      if (game_over == true) {
        statement.innerText = "Winner is O";
        return;
      } else {
        if (count == 9) {
          statement.innerText = "Draw";
        } else {
          statement.innerText = "Turn for X";
          turn = "X";
        }
      }
    }
    }
  });
}
