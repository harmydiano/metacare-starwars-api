import config from '../../../config/default';
export default {
	error: {
		server: 'Error in setup interaction',
		resource_not_found: 'Resource not found!',
		profile_not_found: 'Profile not found!',
		resource_already_exist: 'Duplicate record is not allowed',
		inputs: 'There are problems with your input',
		un_authorized: 'Not authorized',
		not_auth_token: 'No authorization token provided',
		not_found: 'Resource not found',
		no_update_input: 'Nothing to update',
		network: 'Please check your network connection'
	},
	comments: {
		created: 'Comment successfully created',
		updated: 'Comment successfully updated',
		deleted: 'Comment successfully deleted',
		not_found: 'Comment not found',
		cannot_delete_user: 'Comment authorized to delete a regular main',
		comment_does_not_exist: 'Comment does not exist',
	},
	films: {
		created: 'Film successfully created',
		updated: 'Film successfully updated',
		deleted: 'Film successfully deleted',
		not_found: 'Film not found',
		cannot_delete_user: 'Film authorized to delete a regular main',
		film_does_not_exist: 'Film does not exist',
	},
	people: {
		created: 'Character successfully created',
		updated: 'Character successfully updated',
		deleted: 'Character successfully deleted',
		not_found: 'Character not found',
		cannot_delete_user: 'Character authorized to delete a regular main',
		character_does_not_exist: 'Character does not exist',
	},
};
