//This function implements some slight css effects on text
function animate() {
    var element = document.getElementById("slogan");
    element.style.opacity = "1";
    element.style.top = "0px";
}

animate();

var login = document.getElementById("login");
var register = document.getElementById("register");

//this function implement changing between the login and register page
function showLogin() {
    register.style.display = "none";
    login.style.display = "block";
}
//this function implement changing between the login and register page
function showRegister() {
    login.style.display = "none";
    register.style.display = "block";
}
//variables for getting the HTML of the index.HTML
//start
var featureContainer = document.getElementById("feature");
var featureInfoContainer = document.getElementById("feature-info");

var feature = ["Time limits", "Be responsible", "Important tasks first", ""];

var featureInfo = ["Set time limits for when a task should be completed", 
                    "Add people to a task to let them know they're the person for the job", 
                    "Set the importance of tasks to signify what's urgent"];
var i = 0;

//End

//this function implements showing different features based on a timer
function showFeatures() {
    featureContainer.innerText = feature[i];
    featureInfoContainer.innerText = featureInfo[i];

    if (++i < feature.length) {
        setTimeout(showFeatures, 5000);
    }else if(i == 4) {
        i = 0;
        if(i == 0) {
            showFeatures();
        }
    }
}

function check(form) { /*function to check userid & password*/
    /*the following code checkes whether the entered userid and password are matching*/
    if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd") {
        window.open('target.html')/*opens the target page while Id & password matches*/
    }
    else {
        alert("Error Password or Username")/*displays error message*/
    }
}

showFeatures();