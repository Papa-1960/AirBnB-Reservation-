$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#reservation_form").submit(function(event) {
		var isValid = true;
		if (!emailPattern.test($("#email").val())) {
			$("#email").next().text("Please enter a valid email.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		if ($("#arrival_date").val() === "") {
			$("#arrival_date").next().text("This field is required.");
			isValid = false;
		} else {
			$("#arrival_date").next().text("");
		}
		if ($("#nights").val() === "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		if ($("#name").val() === "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#name").next().text("");
		}
		if ($("#phone").val() === "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		if (!isValid) {
			event.preventDefault();
		}
	});
}); // end ready
