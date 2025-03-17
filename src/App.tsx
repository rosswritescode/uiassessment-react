import React from 'react';
import CreatePost from './components/CreatePost/CreatePost';
import PostsList from './components/PostsList/PostsList';
import { PostProvider } from './PostContext';

function App() {
  return (
    <PostProvider>
      <div className="row justify-content-center">
        <div className="col-6">
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
