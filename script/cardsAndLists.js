//Variables that build the card HTML
//Start
var newCard = document.createElement("div");
var newCardHeader = document.createElement("div");
var newCardHeaderText = document.createElement("h2");
var newCardDescription = document.createElement("div");
var newCardDescriptionText = document.createElement("p");
var newCardFooter = document.createElement("div");
var newCardMade = document.createElement("div");
var newCardMadeText = document.createElement("h3");
var newCardUsers = document.createElement("div");
var newCardDeadline = document.createElement("div");
var newCardDeadlineText = document.createElement("h3");
//End


// This function implements getting the time and date and using them to make strings
//i allows the user to select when the deadline would be for a given card
function getTime(input) {
    var today = new Date();
    var date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
    var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
    var dateTime = date + '\n ' + time;

    switch (input) {
        case "date":
            return date;
        case "time":
            return time;
        case "dateTime":
            return dateTime;
    }
}

//Array containing the objects that hold the data of the users
//that have been added to the project
var membersInProject = [
    {
        userName: "filip",
        email: "filip@filip.com",
        profilePic: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "oj",
        email: "oj@oj.com",
        profilePic: "https://images.unsplash.com/photo-1511200016789-e7b694d91f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
    },{
        userName: "sofie",
        email: "sofie@sofie.com",
        profilePic: "https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
    },
    {
        userName: "julian",
        email: "julian@julian.com",
        profilePic: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        userName: "fereba",
        email: "fereba@fereba.com",
        profilePic: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    },
    {
        userName: "micheal",
        email: "micheal@micheal.com",
        profilePic: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80"
    }
];

//Array containing the tables
var table = [];

// Array containing the lists
var list = [];

// Array containing the cards 
var card = [];

//this function implements using a button to create lists
//it builds a button and sets the appropriate attributes
// as well as appends that button to the right wrapper
function createListButton() {
    var newListButton = document.createElement("div");
    var newListButtonText = document.createElement("p");
    newListButton.id = "nyListeKnapp";
    newListButtonText.id = "nyListeKnappX";
    newListButton.setAttribute("type", "button");
    newListButton.setAttribute("onclick", " return createList()");
    var wrapper = document.getElementById("lag-liste");
    
    wrapper.appendChild(newListButton);
    newListButton.appendChild(newListButtonText);
    newListButtonText.innerText = "+ Add list";
}

createListButton();

//variables that counts the number of lists and cards, and sets the right id based on that
var listID = 0;
var cardID = 0;


//this function implements creating lists, that each have the ability to make their own card
function createList() {
    list.push({
        id: listID,
        name: "list" + listID,
        antallKort: cardID,
    });

    var wrapper = document.getElementById("lister");

    var newList = document.createElement("div");
    var newListCreateCardForm = document.createElement("form");
    var nyListTittel = document.createElement("input");

    newList.className = "liste";
    newList.id = "liste" + listID;
    nyListTittel.value = list[listID].name;

    wrapper.appendChild(newList);


    var radioButtonContainer = document.createElement("form");

    //This 7 step loop with conditionals checks what id the card that was created has
    //it sets the appropriate attributes
    for (i = 0; i < 7; i++) {
        newListCreateCardForm.id = "lagKortListe" + listID;
        newListCreateCardForm.className = "create-list";
        radioButtonContainer.id = "radioButtonContainer" + listID;
        radioButtonContainer.className = "make-card-container";
        var newListCreateCardInput = document.createElement("input");
        newListCreateCardInput.className = "nyttKortInput";
        newListCreateCardInput.id = i;
        newListCreateCardForm.appendChild(radioButtonContainer);

        if (newListCreateCardInput.id == 6) {
            newListCreateCardInput.id = "leggTilKort" + listID;
            newListCreateCardInput.value = "Add card";
            newListCreateCardInput.type = "button";
            newListCreateCardInput.className = "leggTilKort";
            newListCreateCardInput.setAttribute("onclick", "openDialog(event)");
            newListCreateCardForm.appendChild(newListCreateCardInput);
        }

        else if (newListCreateCardInput.id == 5) {
            newListCreateCardInput.id = "slettListe" + listID;
            newListCreateCardInput.value = "x";
            newListCreateCardInput.type = "button";
            newListCreateCardInput.className = "slettListe";
            newListCreateCardInput.setAttribute("onclick", " return removeList(" + listID + ")");
            newListCreateCardForm.appendChild(newListCreateCardInput);
        } else if (newListCreateCardInput.id == 4) {
            newListCreateCardInput.id = "nyKortKnapp" + listID;
            newListCreateCardInput.type = "button";
            newListCreateCardInput.value = "Lag card";
            newListCreateCardInput.setAttribute("onmouseup", " closeDialog(event)");
            newListCreateCardInput.setAttribute("onclick", " return createCard(" + listID + ")");
            newListCreateCardForm.appendChild(newListCreateCardInput);
        } else if (newListCreateCardInput.id == 3) {
            newListCreateCardInput.id = "nyttKortTidsfrist" + listID;
            newListCreateCardInput.type = "date";
            newListCreateCardForm.appendChild(newListCreateCardInput);
        } else if (newListCreateCardInput.id == 2) {
            var newCardDescription = document.createElement("textarea");
            newCardDescription.id = "nyttKortBeskrivelse" + listeID;
            newCardDescription.placeholder = "Description";
            newCardDescription.setAttribute("maxLength", "150");
            newCardDescription.type = "text";
            newCardDescription.className = "card-desc";
            newListCreateCardForm.appendChild(newCardDescription);
        } else if (newListCreateCardInput.id == 1) {
            newListCreateCardInput.id = "nyttKortNavn" + listID;
            newListCreateCardInput.placeholder = "Title";
            newListCreateCardInput.type = "text";
            newListCreateCardForm.appendChild(newListCreateCardInput);
        } else if (newListCreateCardInput.id == 0) {
            newListCreateCardInput.id = "nyKortTittel" + listID;
            newListCreateCardInput.className = "list-title";
            newListCreateCardInput.value = "New list";
            newListCreateCardInput.type = "text";
            newListCreateCardInput.setAttribute("onkeypress", " return changeListTittle(" + listID + ")");
            newList.appendChild(newListCreateCardInput);
        }
        newList.appendChild(newListCreateCardForm);
    }
    listID++;

}
// This function builds the dialog box
//implements opening a dialog box when a card is created
function openDialog(event) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.setAttribute("onclick", "removeDialog(event)");
    var thisDialog = document.getElementById(event.target.id);
    thisDialog.parentNode.classList.add("openDialog");
    thisDialog.parentNode.parentNode.appendChild(overlay);
    var childNodes = thisDialog.parentNode.childNodes;

    childNodes[0].style.display = "block";
    childNodes[1].style.display = "block";
    childNodes[2].style.display = "block";
    childNodes[3].style.display = "block";
    childNodes[4].style.display = "none";
    childNodes[5].style.display = "block";
    childNodes[6].style.display = "none";
}

//This function implements removing the nodes that make up the dialog box when the user exits the dialog
//by clicking outside of the dialog box of the card
//this is intended to allow the user to close the dialog box without making the card
function removeDialog(event){
    var childNodes = event.target.parentNode.firstChild.nextSibling.childNodes;
    if(event.target.parentNode.childNodes[1]){
        
        event.target.parentNode.childNodes[1].classList.remove("openDialog");
        childNodes[0].style.display = "none";
        childNodes[1].style.display = "none";
        childNodes[2].style.display = "none";
        childNodes[3].style.display = "none";
        childNodes[4].style.display = "block";
        childNodes[5].style.display = "none";
        childNodes[6].style.display = "block";
        event.target.remove();
    }
}

//This function implements the closing of a card after you have confirmed the creation of the card in question
function closeDialog(event) {
    var dialog = document.getElementById(event.target.parentNode.id);
    var overlay = document.getElementById("overlay");
    overlay.remove();
    var childNodes = dialog.childNodes;
    childNodes[0].style.display = "none";
    childNodes[1].style.display = "none";
    childNodes[2].style.display = "none";
    childNodes[3].style.display = "none";
    childNodes[4].style.display = "block";
    childNodes[5].style.display = "none";
    childNodes[6].style.display = "block";

    dialog.classList.remove("openDialog");
}

//This function implements removing a list from the board
function removeList(listID) {

    var list = document.getElementById("liste" + listID);
    list.remove("liste" + listID);
}



//This function implements creating a card
//it builds all of the HTML and sets the attributes and the classnames for each element.
function createCard(listID) {
    var priorityForm = document.createElement("div");
    priorityForm.id = "priority-card-" + cardID;
    priorityForm.className = "card-priority-picker";
        
    var priorityUrgentDiv = document.createElement("div");
    priorityUrgentDiv.className = "priority-container";
    priorityUrgentDiv.id = "urgent" + cardID;
    var priorityUrgent = document.createElement("input");
    var priorityUrgentLbl = document.createElement("label");
    priorityUrgentLbl.innerText = "!!!";
    priorityUrgentLbl.setAttribute("for", ("card-priority-urgent" + cardID));
    priorityUrgent.id = "card-priority-urgent" + cardID;
    priorityUrgent.value = "Urgent";
    priorityUrgent.type = "radio";
    priorityUrgent.name = "priority";
    priorityUrgent.className = "card-priority";
    priorityUrgent.setAttribute("onchange", "changeToUrgent(" + cardID + ")");
    priorityUrgentDiv.appendChild(priorityUrgent);
    priorityUrgentDiv.appendChild(priorityUrgentLbl);
    
    var priorityMiddleDiv = document.createElement("div");
    priorityMiddleDiv.className = "priority-container";
    priorityMiddleDiv.id = "middle" + cardID;
    var priorityMiddle = document.createElement("input");
    var priorityMiddleLbl = document.createElement("label");
    priorityMiddleLbl.innerText = "!!";
    priorityMiddleLbl.setAttribute("for", ("card-priority-middle" + cardID));
    priorityMiddle.id = "card-priority-middle" + cardID;
    priorityMiddle.value = "Middle";
    priorityMiddle.type = "radio";
    priorityMiddle.name = "priority";
    priorityMiddle.className = "card-priority";
    priorityMiddle.setAttribute("onchange", "changeToMiddle(" + cardID + ")");
    priorityMiddleDiv.appendChild(priorityMiddle);
    priorityMiddleDiv.appendChild(priorityMiddleLbl);

    var priorityLowDiv = document.createElement("div");
    priorityLowDiv.className = "priority-container";
    priorityLowDiv.id = "low" + cardID;
    var priorityLow = document.createElement("input");
    var priorityLowLbl = document.createElement("label");
    priorityLowLbl.innerText = "!";
    priorityLowLbl.setAttribute("for", ("card-priority-low" + cardID));
    priorityLow.id = "card-priority-low" + cardID;
    priorityLow.value = "Low";
    priorityLow.type = "radio";
    priorityLow.name = "priority";
    priorityLow.className = "card-priority";
    priorityLow.setAttribute("onchange", "changeToLow(" + cardID + ")");
    priorityLowDiv.appendChild(priorityLow);
    priorityLowDiv.appendChild(priorityLowLbl);

    var listPosition = document.getElementById("liste" + listID);
    var newCard = document.createElement("div");
    var newCardHeader = document.createElement("div");
    var newCardHeaderText = document.createElement("input");
    var newCardDescription = document.createElement("div");
    var newCardDescriptionText = document.createElement("textarea");
    var newCardNextList = document.createElement("input");
    var newCardPrevList = document.createElement("input");
    var newCardFooter = document.createElement("div");
    var newCardMade = document.createElement("div");
    var newCardMadeText = document.createElement("h3");
    var newCardUsers = document.createElement("div");

    var newCardMembersDiv = document.createElement("div");
    var newCardMembersInCard = document.createElement("div");
    var newCardMembers = document.createElement("select");
    var newCardMembersButton = document.createElement("input");
    
    var newCardDeadline = document.createElement("div");
    var newCardDeadlineText = document.createElement("h3");
    var removeCard = document.createElement("input");
    removeCard.type = "button";

    newCard.id = "card" + cardID;
    newCard.className = "card";
    newCardHeader.className = "card-title";
    newCardHeader.id = "card-tittel" + cardID;
    newCardHeader.setAttribute("onkeypress", " return changeTittle(" + cardID + ")");
    newCardHeaderText.id = "card-tittel-tekst" + cardID;
    newCardHeaderText.placeholder = "Title";
    newCardDescription.setAttribute("maxLength", "150");
    newCardDescription.className = "card-desc";
    newCardDescription.id = "card-description" + cardID;
    newCardDescription.setAttribute("onkeypress", " return changeDescription(" + cardID + ")");
    newCardDescriptionText.id = "card-description-tekst" + cardID;
    newCardDescriptionText.placeholder = "Description";

    newCardNextList.type = "button";
    newCardPrevList.type = "button";

    newCardNextList.value = ">";
    newCardPrevList.value = "<";

    newCardNextList.setAttribute("onclick", "nextListe(event)");
    newCardPrevList.setAttribute("onclick", "prevListe(event)");

    newCardNextList.className = "neste-liste";
    newCardPrevList.className = "forrige-liste";

    newCardNextList.id = "card-neste-liste" + cardID;
    newCardPrevList.id = "card-forrige-liste" + cardID;

    newCardMembersDiv.className = "card-member-select";
    newCardMembersInCard.className = "members";

    newCardMembersDiv.id = "newCardMembers" + cardID;
    newCardMembersInCard.id = "nyttKortMedlemmerIKort" + cardID;

    newCardMembers.setAttribute("size", membersInProject.length);
    newCardMembersButton.setAttribute("type", "button");
    newCardMembersButton.value = "add member";
    newCardMembersButton.className = "add-member";

    newCardMembersOption.id = "option";

    newCardMembers.id = "selectingMembers" + cardID;
    newCardMembers.className = "member-select";
    newCardMembersButton.setAttribute("onclick", "getSelectedValue("+ cardID +")");

    newCardFooter.className = "card-footer";
    newCardMade.className = "card-created";
    newCardDeadline.className = "card-deadline";
    newCardDeadline.id = "card-deadline" + cardID;
    removeCard.setAttribute("onclick", " return removeCard(" + cardID + ")");

    listPosition.appendChild(newCard);
    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardDescription);
    newCard.appendChild(newCardFooter);
    newCardHeader.appendChild(newCardHeaderText);
    newCardDescription.appendChild(newCardDescriptionText);

    newCard.appendChild(newCardMembersDiv);
    newCard.appendChild(newCardDescription);
    newCardMembersDiv.appendChild(newCardMembers);
    newCardMembersDiv.appendChild(newCardMembersButton);
    newCardMembersDiv.appendChild(newCardMembersInCard);

    for (var j = 0; j < membersInProject.length; j++) {

        var newCardMembersOption = document.createElement("option");
        newCardMembersOption.id = "medlem:" + j;
        newCardMembersOption.setAttribute("value", membersInProject[j].userName);
        newCardMembersOption.innerText = membersInProject[j].userName;
        newCardMembers.appendChild(newCardMembersOption);
    }

    newCard.appendChild(newCardMade);
    newCard.appendChild(newCardUsers);
    newCard.appendChild(newCardDeadline);
    newCardMade.appendChild(newCardMadeText);
    newCardDeadline.appendChild(newCardDeadlineText);
    newCardFooter.appendChild(newCardPrevList);
    newCardFooter.appendChild(newCardNextList);
    newCardFooter.appendChild(removeCard);
    priorityForm.appendChild(priorityUrgentDiv);
    priorityForm.appendChild(priorityMiddleDiv);
    priorityForm.appendChild(priorityLowDiv);
    newCardHeader.appendChild(priorityForm);

    var newCardHeaderTextInput = document.getElementById("nyttKortNavn" + listID).value;
    var newCardDescriptionInput = document.getElementById("nyttKortBeskrivelse" + listID).value;
    var newCardDeadlineInput = document.getElementById("nyttKortTidsfrist" + listID).value;

    //pushing the object that hold the information and data contained in each card
    card.push({
        id: cardID,
        name: newCardHeaderTextInput,
        description: newCardDescriptionInput,
        listPosition: list[listID].id,
        created: getTime("date"),
        deadline: newCardDeadlineInput,
        users: [],
    });

    newCardHeaderText.value = card[cardID].name;
    newCardDescriptionText.innerText = card[cardID].description;
    newCardMadeText.innerText = "Card created on the " + card[cardID].created;
    newCardDeadlineText.innerText = "Deadline: " + card[cardID].deadline;
    removeCard.value = "delete";
    removeCard.className = "lukkKort";
    
    cardID++;
}

//this function implements removing members from the card in question
function removeMemberFromCard(event) {
    var thisMember = event.target;
    thisMember.nextSibling.remove();
    thisMember.remove();
    
}

//implements the ability for the users to set priority for a card to low
function changeToLow(cardID) {
    var newBackground = document.getElementById("card-tittel" + cardID);
    newBackground.style.background = "linear-gradient(20deg, rgba(63, 133, 16, 1) 0%, rgb(170, 255, 144) 100%)";
    var deadline = document.getElementById("card-deadline" + cardID);
    deadline.style.color = "green";
    var card = document.getElementById("card" + cardID);
    card.style.border = "1px solid green";
    var cardTitle = document.getElementById("card-tittel-tekst" + cardID);
    cardTitle.style.color = "white";
    var priorityLow = document.getElementById("low" + cardID);
    priorityLow.style.border = "1px solid white";
    priorityLow.style.color = "white";
    var priorityMiddle = document.getElementById("middle" + cardID);
    priorityMiddle.style.border = "1px solid white";
    priorityMiddle.style.color = "white";
    var priorityUrgent = document.getElementById("urgent" + cardID);
    priorityUrgent.style.border = "1px solid white";
    priorityUrgent.style.color = "white";
}
//implements the ability for the users to set priority for a card to middle
function changeToMiddle(cardID) {
    var newBackground = document.getElementById("card-tittel" + cardID);
    newBackground.style.background = "linear-gradient(20deg, rgba(243, 149, 42, 1) 0%, rgb(252, 213, 108) 100%)";
    var deadline = document.getElementById("card-deadline" + cardID);
    deadline.style.color = "orange";
    var card = document.getElementById("card" + cardID);
    card.style.border = "1px solid orange";
    var cardTitle = document.getElementById("card-tittel-tekst" + cardID);
    cardTitle.style.color = "white";
    var priorityLow = document.getElementById("low" + cardID);
    priorityLow.style.border = "1px solid white";
    priorityLow.style.color = "white";
    var priorityMiddle = document.getElementById("middle" + cardID);
    priorityMiddle.style.border = "1px solid white";
    priorityMiddle.style.color = "white";
    var priorityUrgent = document.getElementById("urgent" + cardID);
    priorityUrgent.style.border = "1px solid white";
    priorityUrgent.style.color = "white";
}
//implements the ability for the users to set priority for a card to urgent
function changeToUrgent(cardID) {
    var newBackground = document.getElementById("card-tittel" + cardID);
    newBackground.style.background = "linear-gradient(20deg, rgba(122, 4, 4, 1) 0%, rgba(252, 69, 69, 1) 100%)";
    var deadline = document.getElementById("card-deadline" + cardID);
    deadline.style.color = "red";
    var card = document.getElementById("card" + cardID);
    card.style.border = "1px solid red";
    var cardTitle = document.getElementById("card-tittel-tekst" + cardID);
    cardTitle.style.color = "white";
    var priorityLow = document.getElementById("low" + cardID);
    priorityLow.style.border = "1px solid white";
    priorityLow.style.color = "white";
    var priorityMiddle = document.getElementById("middle" + cardID);
    priorityMiddle.style.border = "1px solid white";
    priorityMiddle.style.color = "white";
    var priorityUrgent = document.getElementById("urgent" + cardID);
    priorityUrgent.style.border = "1px solid white";
    priorityUrgent.style.color = "white";
}

//this function implements the ability for the add member button
//to get what is selected in the select list
//and then pushes a member, and picture for that member into the users array in the card object
function getSelectedValue(cardID) {

    for (var z = 0; z < card.length; z++) {
        var selValue = document.getElementById("newCardMembers" + z);
        //checks if the member is already in the array, and that the data is not empty
        if (!card[z].users.includes(selValue.firstChild.value) && selValue.firstChild.value !== "") {
            card[z].users.push(selValue.firstChild.value);

            var membersContainer = document.getElementById("nyttKortMedlemmerIKort" + cardID);

            var newCardMemberPic = document.createElement("img");
            var memberName = document.createElement("p");
            membersContainer.className = "card-members";
            var memberContainer = document.createElement("div");
            memberContainer.className ="card-member";
            for (var k = 0; k < card[z].users.length; k++) {
                for(var l = 0; l < membersInProject.length; l++){
                    if(card[z].users[k] == membersInProject[l].userName){
                        memberName.innerText = card[z].users[k];
                        memberContainer.id = k;
                        memberContainer.setAttribute("onclick", "removeMemberFromCard(event)");
                        newCardMemberPic.setAttribute("src", membersInProject[l].profilePic);
                    }
                }
            }
            memberContainer.appendChild(memberName);
            memberContainer.appendChild(newCardMemberPic);
            membersContainer.appendChild(memberContainer);
        }
    }
}

//this functions implements switching what list a card belongs to
//and it removes the card from the current list and puts it into the next list
function nextListe(event) {
    var thisList = event.target.parentNode.parentNode.parentNode.id;

    var string = thisList.replace("liste", "");
    var parse = parseInt(string);
    parse++;
    var nextList = thisList.id = "liste" + parse;

    var thisCard = event.target.parentNode.parentNode;
    document.getElementById(nextList).appendChild(thisCard);

}

////this functions implements switching what list a card belongs to
// //and it removes the card from the current list and puts it into the previous list
function prevListe(event) {
    var thisList = event.target.parentNode.parentNode.parentNode.id;
    var string = thisList.replace("liste", "");
    var parse = parseInt(string);
    parse--;
    var prevList = thisList.id = "liste" + parse;

    var thisCard = event.target.parentNode.parentNode;
    document.getElementById(prevList).appendChild(thisCard);
}

//this function implements removing cards from a list
function removeCard(cardID) {
    var card = document.getElementById("card" + cardID);
    card.parentNode.removeChild(card);
}

// redigerer cardenes tittel og description
//this function implements changing the title of a list
function changeListTittle(listID) {
    listTittleContainer = document.getElementById("nyKortTittel" + listID);
    list[listID].name = listTittleContainer.value;
}

//this function implements changing the title of a card
function changeTittle(cardID) {
    cardTittleContainer = document.getElementById("card-tittel-tekst" + cardID);
    card[cardID].name = cardTittleContainer.value;
}

//this function implements changing the description of cards.
function changeDescription(cardID) {
    cardDescriptionContainer = document.getElementById("card-description-tekst" + cardID);
    card[cardID].description = cardDescriptionContainer.value;
}