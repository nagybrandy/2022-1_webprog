var form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;
    if (name.length < 3) {
        form.name.style = "border: 1px solid red";
    } else {
        form.name.style = "border: 1px solid black";
    }
    if (!(/.*@.*\..{2,}/).test(email)) {
        form.email.style = "border: 1px solid red";
    } else {
        form.email.style = "border: 1px solid black";
    }
    if (!(/\d{7,15}/).test(phone)) {
        form.phone.style = "border: 1px solid red";
    } else {
        form.phone.style = "border: 1px solid black";
    }
});