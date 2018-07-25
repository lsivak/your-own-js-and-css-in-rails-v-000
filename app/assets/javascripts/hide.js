function hideWhenClicked(event) {
const $hidden = $(event.hidden)
$hidden.hide()

}
$('#hide_this').click(hideWhenClicked);
