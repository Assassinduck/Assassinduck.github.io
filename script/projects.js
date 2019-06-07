var user = [{
    username: "Filip",
    firstname: "Filip",
    img: "https://images.unsplash.com/photo-1509593419605-143becfcbae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    username: "OJ",
    firstname: "Ole Jørgen",
    img: "https://images.unsplash.com/photo-1509593419605-143becfcbae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    username: "Sofie",
    firstname: "Sofie",
    img: "https://images.unsplash.com/photo-1509593419605-143becfcbae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}
];

var profile = document.getElementById("profile");
var userFirstname = document.createElement("h2");
var usernameText = document.createElement("h3");
var userImgContainer = document.getElementById("profile-image");
var userImg = document.createElement("img");

userImgContainer.style.overflow = "hidden";
userImg.setAttribute("src", user[0].img);
userFirstname.innerText = user[0].firstname;
usernameText.innerText = "@" + user[0].username;

userImgContainer.appendChild(userImg);
profile.appendChild(userImgContainer);
profile.appendChild(userFirstname);
profile.appendChild(usernameText);
document.getElementById("newProjectBtn").addEventListener("click", newProject);

var projectID = 0;

function newProject() {
    var projectWrapper = document.getElementById("projects-wrapper");
    var project = document.createElement("div");
    var projectTitleDiv = document.createElement("div");
    var projectTitle = document.createElement("input");
    var projectMembers = document.createElement("div");
    var projectLink = document.createElement("a");

    project.className = "project";
    project.id = "project" + projectID;
    projectTitleDiv.className = "project-title";
    projectMembers.className = "project-members";

    projectLink.className = "project-link";
    projectLink.setAttribute("href", "boards.html");
    projectLink.innerText = "Go to project";

    projectTitle.value = "New Project";

    projectWrapper.appendChild(project);
    project.appendChild(projectTitleDiv);
    projectTitleDiv.appendChild(projectTitle);
    project.appendChild(projectLink);
    project.appendChild(projectMembers);

    for(i = 0; i < user.length; i++) {
        var projectMembersImg = document.createElement("img");
        projectMembersImg.setAttribute("src", user[i].img);
        projectMembers.appendChild(projectMembersImg);
    }

    projectID++;
}