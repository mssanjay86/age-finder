var myname = document.querySelector("#nameid");
var birthyr = document.querySelector("#birthid");
var output = document.querySelector("#resid");
var crntyr = new Date();

document.querySelector("#btnid").addEventListener('click', function() {
    if (myname.value == "") {
        alert("Please enter your name.");
    } else if (birthyr.value == "") {
        alert("Please enter your birth year.")
    } else {
        var age = (crntyr.getFullYear()) - birthyr.value;
        output.value = age;
    }

});