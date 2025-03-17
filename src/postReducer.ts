export type Post = {
	title: string;
	content: string;
}

export type PostsState = {
	posts: Post[];
}

export type PostsAction =
	| {
		type: 'ADD_POST';
		payload: Post;
	}
	| {
		type: 'SAVE_DRAFT';
		payload: Post;
	}

export const initialState: PostsState = {
	posts: []
}

export function postReducer(state: PostsState, action: PostsAction): PostsState {
	switch (action.type) {
		case 'ADD_POST':
			return {
				...state,
				posts: [...state.posts, action.payload]
			}
		case 'SAVE_DRAFT':
			console.log("Draft saved")
			return {
				...state,
			}
		default:
			return state;
	}
}