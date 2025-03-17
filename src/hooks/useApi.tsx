import { usePostContext } from "../PostContext";

export type Post = {
	title: string;
	content: string;
}

function useApi() {
	const { state, dispatch } = usePostContext();

	const addPost = (post: Post) => {
		// alert the post details
		alert(JSON.stringify(post));
		dispatch({ type: 'ADD_POST', payload: post });
	}

	const saveDraft = (post: Post) => {
		dispatch({ type: 'SAVE_DRAFT', payload: post });
	}

	return {
		addPost,
		saveDraft,
		posts: state.posts
	}
}

export default useApi;