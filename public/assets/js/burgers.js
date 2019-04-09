// Make sure we wait to attach handlers until the DOM is fully loaded.
$(function() {
	$('.change-devoured').on('click', function(event) {
		event.preventDefault();
		var id = $(this).data('id');
		var neweaten = $(this).data('neweaten');

		var newDevouredState = {
			devoured: neweaten
		};

		// Send the put request.
		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDevouredState
		}).then(function(data) {
			console.log('changed devoured to', neweaten);
			// Reload the page to get the updated list
			location.reload();
		});
	});

	// $('.create-form').on('submit', function(event) {
	// 	// Make sure to preventDefault on a submit event.
	// 	event.preventDefault();

	// 	var newBurger = {
	// 		burger_name: $('#burg').val().trim(),
	// 		devoured: $('[name=devoured]:checked').val().trim()
	// 	};

	// 	// Send the POST request.
	// 	$.ajax('/api/burgers', {
	// 		type: 'POST',
	// 		data: newBurger
	// 	}).then(function() {
	// 		console.log('created new burger');
	// 		// Reload the page to get the updated list
	// 		location.reload();
	// 	});
	// });
});
