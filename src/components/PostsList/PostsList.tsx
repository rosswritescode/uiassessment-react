import React from 'react';
import useApi from '../../hooks/useApi';

function CreatePost() {
	const { posts } = useApi();
	
	// return an element that shows a preformatted versino of the posts
	return (
		<pre>POSTS: {JSON.stringify(posts)}</pre>
	)
}

export default CreatePost;
