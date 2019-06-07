function swapStyleSheet(styleSheet) {
    var contrastToggle = document.getElementById("contrastToggle");
    var highContrast = document.getElementById("highContrast");
    var normalContrast = document.getElementById("normalContrast");
    if(contrastToggle.checked){
        highContrast.setAttribute("href", styleSheet);
        normalContrast.setAttribute("href", "");
    }else {
        highContrast.setAttribute("href", "");
        normalContrast.setAttribute("href", "style/users.css");
    }
}