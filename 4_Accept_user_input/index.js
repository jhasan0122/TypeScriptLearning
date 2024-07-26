var username;
document.getElementById("do").onclick = function () {
    username = (document.getElementById("username")).value;
    document.getElementById("heading").textContent = "Welcome ".concat(username);
    console.log(username);
};
