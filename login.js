var body = document.querySelector('body')
var fullContent = document.querySelector('#full_content');
var content =  document.querySelector('#content');
var header = document.querySelector("header");


if(window.location.href == "http://intranet.supinternet.fr/") {
    header.remove();
    fullContent.remove();
    content.remove();
    
    // Create container of the Background

    var background_login = document.createElement("div")
    background_login.classList.add("background-login")
    body.appendChild(background_login)

    // Adding Ids and Classes

    for(var i = 1; i < 7;i++) {
        background_div = document.createElement("div");
        background_div.setAttribute('id', 'stick-' + i);
        background_div.classList.add("things");
        background_login.appendChild(background_div);
    }

    // Create login container

    var login_container = document.createElement("div");
    login_container.classList.add("login-container");
    body.appendChild(login_container);

    // Create things insde login container

    var login_in = document.createElement("div");
    login_in.classList.add("login-in");
    login_container.appendChild(login_in);

    var login_img = document.createElement("div");
    login_img.classList.add("login-img");
    login_container.appendChild(login_img);

    // Backgroumd Login IMG

    var img_bg = document.createElement("img");
    img_bg.src = chrome.extension.getURL("./img/color.png");
    img_bg.alt = "login-colors";
    img_bg.classList.add("login-colors")
    login_img.appendChild(img_bg);

    // Logo SUP

    var img_sup = document.createElement("img");
    img_sup.src = chrome.extension.getURL("./img/logo-sup.png");
    img_sup.alt = "login-sup";
    img_sup.classList.add("login-sup")
    login_img.appendChild(img_sup);

    // Form

    var myForm = document.createElement("form");
    myForm.method = "POST";
    myForm.action = "?action=login";
    login_in.appendChild(myForm);


    //fieldset username

    var fieldset_user = document.createElement("fieldset");
    myForm.appendChild(fieldset_user);

    var legend_user = document.createElement("legend");
    legend_user.innerHTML = "&nbsp LOGIN &nbsp";
    fieldset_user.appendChild(legend_user);

    //fieldset pass

    var fieldset_pass = document.createElement("fieldset");
    myForm.appendChild(fieldset_pass);

    var legend_pass = document.createElement("legend");
    legend_pass.innerHTML = "&nbsp MOT DE PASSE &nbsp";
    fieldset_pass.appendChild(legend_pass);

    // Login - input username

    var login_input = document.createElement("input");
    login_input.setAttribute("type", "text");
    login_input.setAttribute("name", "login");
    fieldset_user.appendChild(login_input)

    // Login - input password

    var password_input = document.createElement("input");
    password_input.setAttribute("type", "password");
    password_input.setAttribute("name", "pwd");
    fieldset_pass.appendChild(password_input)


    // Login - Connect

    var connect_input = document.createElement("input");
    connect_input.setAttribute("type", "submit");
    connect_input.setAttribute("value", "CONNEXION");
    connect_input.setAttribute("name", "do");
    myForm.appendChild(connect_input)

    //Login - Forgot Pass

    var forgot_pass = document.createElement("a");
    forgot_pass.setAttribute("href", "?action=forgot_pwd");
    forgot_pass.classList.add("forgot-pass")
    forgot_pass.innerText = "Mot de passe oublié ?".toUpperCase();
    myForm.appendChild(forgot_pass)

    //Login - footer

    var myFooter = document.createElement("footer");
    myFooter.innerHTML = `<span>SUP'Intranet by SUP'Internet.</span>
                        <span>&copy 2011 - 2019 All rights reserved.</span>
                        `
    login_in.appendChild(myFooter)

}else if(window.location.href.indexOf("?action=") > -1) {
    body.style.overflow = "auto";
}