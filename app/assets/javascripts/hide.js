function hideWhenClicked(event) {
  $("#event").click(function () {
    this.hide();
  })
}
$('#hide_this').click(hideWhenClicked);
