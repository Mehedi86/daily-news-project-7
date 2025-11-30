'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchPosts } from './postsSlice';

export default function PostsPage() {
  const { posts, isLoading, isError, error } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Loading UI
  if (isLoading) {
    return <p className="text-blue-600">Loading posts...</p>;
  }

  // Error UI
  if (isError) {
    return <p className="text-red-600">{error}</p>;
  }

  // Success UI
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Posts ({posts.length})</h1>

      <div className="space-y-4">
        {posts.map((post: any) => (
          <div key={post.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
