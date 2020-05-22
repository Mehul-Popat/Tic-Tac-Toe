var x = true;
var counter = 0;
var scoreX = 0;
var scoreO = 0;
var values = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function changeValue(id) {
    if (values[id - 1] == 0) {
        if (x) {
            storeValue(id - 1);
            $("#" + id).text("X");
            if (checkResult()) {
                scoreX++;
                $("#scoreX").text(scoreX);
                $("#modalX").modal();
                counter=9;
                resetBoard();
                return true;
            }
            x = false;
            $("#arrowX").toggleClass("hidden");
            $("#arrowO").toggleClass("hidden");
        } else {
            storeValue(id - 1);
            $("#" + id).text("O");
            if (checkResult()) {
                scoreO++;
                $("#scoreO").text(scoreO);
                $("#modalO").modal();
                counter=9;
                resetBoard();
                return true;
            }
            x = true;
            $("#arrowX").toggleClass("hidden");
            $("#arrowO").toggleClass("hidden");
        }
        counter++;
        if (counter == 9) {
            $("#modalNull").modal();
            resetBoard();
        }
    } else {
        return false;
    }
}

function storeValue(id) {
    if (x) {
        values[id] = "X";
        $("#" + (id + 1)).addClass("disabled");
    } else {
        values[id] = "O";
        $("#" + (id + 1)).addClass("disabled");
    }
}

function resetBoard() {
    while (counter != 0) {
        $("#" + counter).text("-");
        $("#" + counter).removeClass("disabled");
        values[counter-1]=0;
        counter--;
    }
}

function checkResult() {
    if (x) {
        if (values[0] == "X" && values[1] == "X" && values[2] == "X") {
            return true;
        } else if (values[3] == "X" && values[4] == "X" && values[5] == "X") {
            return true;
        } else if (values[6] == "X" && values[7] == "X" && values[8] == "X") {
            return true;
        } else if (values[0] == "X" && values[3] == "X" && values[6] == "X") {
            return true;
        } else if (values[1] == "X" && values[4] == "X" && values[7] == "X") {
            return true;
        } else if (values[2] == "X" && values[5] == "X" && values[8] == "X") {
            return true;
        } else if (values[0] == "X" && values[4] == "X" && values[8] == "X") {
            return true;
        } else if (values[2] == "X" && values[4] == "X" && values[6] == "X") {
            return true;
        } else {
            return false;
        }
    } else {
        if (values[0] == "O" && values[1] == "O" && values[2] == "O") {
            return true;
        } else if (values[3] == "O" && values[4] == "O" && values[5] == "O") {
            return true;
        } else if (values[6] == "O" && values[7] == "O" && values[8] == "O") {
            return true;
        } else if (values[0] == "O" && values[3] == "O" && values[6] == "O") {
            return true;
        } else if (values[1] == "O" && values[4] == "O" && values[7] == "O") {
            return true;
        } else if (values[2] == "O" && values[5] == "O" && values[8] == "O") {
            return true;
        } else if (values[0] == "O" && values[4] == "O" && values[8] == "O") {
            return true;
        } else if (values[2] == "O" && values[4] == "O" && values[6] == "O") {
            return true;
        } else {
            return false;
        }
    }
}