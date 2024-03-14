import React from 'react';
import useApi from '../../hooks/useApi';

function CreatePost() {
	const { addPost, saveDraft } = useApi();

	// 1. Call the addPost function when the "Add Post" is clicked
	// 2. Add validation to require a title and content
	// 3. Auto-save after 5 seconds of inactivity

	return (
		<form>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input type="text" id="title" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="content">Content</label>
				<textarea id="content" rows={5} className="form-control"></textarea>
			</div>
			<button type="submit" className="btn btn-primary">Add Post</button>
		</form>
	)
}

export default CreatePost;
