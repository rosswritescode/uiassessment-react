import React from 'react';
import CreatePost from './components/CreatePost/CreatePost';
import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <CreatePost />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
