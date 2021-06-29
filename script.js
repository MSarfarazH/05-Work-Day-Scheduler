$(document).ready(function () {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(time); //displaying current date and time

document.querySelector(".saveBtn").addEventListener("click", function (event) {
  //console.log(event.target.parentElement.childNodes[3].value);
  const text = event.target.parentElement.childNodes[3].value;
  const time = event.target.parentElement.getAttribute("id");
  localStorage.setItem(time, text);
});

//bringing back the reminders that were stored in the local storage and displaying it on the text area using "getItem"
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

});
