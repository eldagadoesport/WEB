const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const authMessage = document.getElementById("authMessage");

function showAuthForm(formName) {
    const isLogin = formName === "login";

    loginForm.hidden = !isLogin;
    registerForm.hidden = isLogin;

    loginTab.classList.toggle("active", isLogin);
    registerTab.classList.toggle("active", !isLogin);

    authMessage.hidden = true;
    authMessage.textContent = "";
}

function showMessage(message) {
    authMessage.textContent = message;
    authMessage.hidden = false;
}

// Felső fülek
loginTab.addEventListener("click", () => {
    showAuthForm("login");
});

registerTab.addEventListener("click", () => {
    showAuthForm("register");
});

// Űrlapok közötti váltás
document.getElementById("showRegister").addEventListener("click", () => {
    showAuthForm("register");
});

document.getElementById("showLogin").addEventListener("click", () => {
    showAuthForm("login");
});

// Bejelentkezés: egyelőre csak demó
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    showMessage(
        "A felület működik, de valódi bejelentkezés még nincs beállítva."
    );
});

// Regisztráció: egyelőre csak demó
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username =
        document.getElementById("registerUsername").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (username.length < 3) {
        showMessage("A felhasználónév legalább 3 karakter legyen.");
        return;
    }

    if (password.length < 8) {
        showMessage("A jelszó legalább 8 karakter hosszú legyen.");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("A két jelszó nem egyezik!");
        return;
    }

    showMessage(
        "Az ellenőrzés sikeres! Ez csak demó: a fiók még nem jött létre."
    );
});