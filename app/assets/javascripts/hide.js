function hideWhenClicked(event) {
const $lost = $(event.lost)
$lost.hide()

}
$('#hide_this').click(hideWhenClicked);
