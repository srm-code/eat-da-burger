// Make sure we wait to attach our handlers until the DOM is fully loaded.
"use strict";

$(function() {
	$(".change-status").on("click", function(event) {
		let id = $(this).data("id");
		let newStatus = $(this).data("state");

		const newStateObj = {
			eaten: newStatus
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newStateObj
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		const newBurger = {
			name: $("#ca")
				.val()
				.trim()
		};

		if (!newBurger.name) {
			$("#error-msg").text("oOps! What kind of burger do you want?");
			return;
		}

		$("#error-msg").text("");
		$("#create-form").empty();

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
