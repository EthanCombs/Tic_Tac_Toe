var player1Turn = true;
var isOver = false;
var draw
const h3 = document.querySelector(`h3`);
if (player1Turn) 
function check(btn)
{
    if (btn.innerText == `` && !isOver)
    {
        if (player1Turn)
        {
            h3.innerText = `Player2's Turn`;
            btn.innerText = `X`;
            player1Turn = false;
        }
        else
        {
            h3.innerText = `Player1's Turn`;
            btn.innerText = `O`;
            player1Turn = true;
        }
    }
    checkForWin();
}
function checkForWin()
{
    const buttons = document.getElementsByTagName(`button`);
    const buttonsText = [];
    for (btn of buttons) {
        buttonsText[buttonsText.length] = btn.innerText;
    }
    if (buttonsText[0] != `` && buttonsText[0] == buttonsText[1] && buttonsText[1] == buttonsText[2]) win();
    else if (buttonsText[3] != `` && buttonsText[3] == buttonsText[4] && buttonsText[4] == buttonsText[5]) win();
    else if (buttonsText[6] != `` && buttonsText[6] == buttonsText[7] && buttonsText[7] == buttonsText[8]) win();
    else if (buttonsText[0] != `` && buttonsText[0] == buttonsText[3] && buttonsText[3] == buttonsText[6]) win();
    else if (buttonsText[1] != `` && buttonsText[1] == buttonsText[4] && buttonsText[4] == buttonsText[7]) win();
    else if (buttonsText[2] != `` && buttonsText[2] == buttonsText[5] && buttonsText[8] == buttonsText[2]) win();
    else if (buttonsText[0] != `` && buttonsText[0] == buttonsText[4] && buttonsText[4] == buttonsText[8]) win();
    else if (buttonsText[2] != `` && buttonsText[2] == buttonsText[4] && buttonsText[4] == buttonsText[6]) win();
    else if (buttonsText.indexOf(``) == -1) {draw = true; win();}
}
function win() {
    isOver = true;
    if (draw) h3.innerText = `Draw`;
    else if (player1Turn) h3.innerText = `Player2 Won`;
    else h3.innerText = `Player1 Won`;
    setTimeout(() => { location.reload(); }, 1000);
}