// function hideWhenClicked(event) {
//   $("#hide_this").click(function () {
//     return this.hidden
//   })
// }
function hideWhenClicked(event) {
  const event = $("hide_this")
  event.hidden
}

$('#hide_this').click(hideWhenClicked);
