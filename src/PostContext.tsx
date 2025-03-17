import React, { createContext, Dispatch, useReducer, ReactNode, useContext } from 'react';
import { PostsAction, PostsState, initialState, postReducer } from './postReducer';

type PostContextType = {
    state: PostsState;
    dispatch: Dispatch<PostsAction>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    )
}

export function usePostContext() {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext must be used within a PostProvider');
    }
    return context;
}