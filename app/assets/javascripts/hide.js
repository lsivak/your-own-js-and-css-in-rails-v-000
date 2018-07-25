function hideWhenClicked(event) {
  $("#hide_this").click(function () {
    this.hide();
  })
}
$('#hide_this').click(hideWhenClicked);