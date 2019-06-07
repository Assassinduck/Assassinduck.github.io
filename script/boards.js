//array that contains projects
var project = [{
    name: "Trip to somewhere"
}];

//Array that contains the board objects
var board = [];

//variable we use to set the unique ID of each of the boards
var boardID = 0;
//builds the "new board" button
var newBoardButton = document.getElementById("newBoardBtn");    
newBoardButton.setAttribute("onclick", " return createBoard()");

//builds the project title and header, and appends it to a wrapper
var projectTitleWrp = document.getElementById("project-header");
var projectTitle = document.createElement("input");
projectTitle.className = "project-title";
projectTitle.id = "project-title";
projectTitle.type ="textarea";
projectTitle.value = project[0].name;
projectTitleWrp.appendChild(projectTitle);

//This function builds the boards and pushes them into the "board" array
//Start
function createBoard() {

    board.push({
        id: boardID,
        navn: "board" + boardID,
        antallBoardr: boardID,
    });

    var wrapper = document.getElementById("boards-wrapper");

    var newBoard = document.createElement("div");
    var newBoardTitle = document.createElement("input");
    var deleteBoard = document.createElement("button");
    var boardLink = document.createElement("a");

    deleteBoard.innerText = "Delete board";

    newBoard.className = "board";
    newBoard.id = "board" + boardID;
    newBoardTitle.className = "board-title";
    newBoardTitle.value = "New Board";
    boardLink.className = "board-link";
    boardLink.setAttribute("href", "lists.html");
    boardLink.innerText = "Go to Table";
    deleteBoard.setAttribute("onclick", " return deleteBoard(" + boardID + ")");

    wrapper.appendChild(newBoard);
    newBoard.appendChild(newBoardTitle);
    newBoard.appendChild(deleteBoard);
    newBoard.appendChild(boardLink);

    boardID++;
}
//End

// this function makes it possible to delete the boards i the project
function deleteBoard(boardID) {
    var board = document.getElementById("board" + boardID);
    board.remove("board" + boardID);
}