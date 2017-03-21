var app = app || {};

	app.FileCommentsList = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.FileComment,
		url: "api/app.php",
		parse: function(response) {
			return _.map(response, function(item, index) {
				return {
					id: item.id,
					fileID: item.file_id,
					username: item.username,
					comment: item.comment,
					timestamp: item.timestamp
				};
			});
		}
	});