var find = document.getElementById('find');
var age = document.getElementById('age');
var comment = document.getElementById('comment');
var ageVal;
find.onclick = function () {
    ageVal = (Number)(age.value);
    if (ageVal == 0) {
        comment.textContent = "You are just born";
    }
    else if (ageVal >= 100) {
        comment.textContent = "\"You are too old to enter this site\"";
    }
    else if (ageVal >= 18) {
        comment.textContent = "You are old enough to enter this site";
    }
    else if (ageVal < 0) {
        comment.textContent = "Your age cant be 0";
    }
    else {
        comment.textContent = "You must be 18 to enter the site";
    }
};
