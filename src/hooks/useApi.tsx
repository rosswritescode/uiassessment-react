export type Post = {
	title: string;
	content: string;
}

function useApi() {
	const posts: Post[] = [];

	const addPost = (post: Post) => {
		// alert the post details
		alert(JSON.stringify(post));
		posts.push(post);
	}

	const saveDraft = (post: Post) => {
		console.log('Draft saved:', post);
	}

	return {
		addPost,
		saveDraft,
		posts
	}
}

export default useApi;