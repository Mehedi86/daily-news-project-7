"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchComments } from "./commentsSlice";

export default function CommentsPage() {
  const { comments, isLoading, isError, error } = useAppSelector(
    (state) => state.comments
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  // Loading UI
  if (isLoading) return <div>Loading...</div>;

  // Error UI
  if (isError) return <div>Error: {error}</div>;

  // Success UI
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Comments ({comments.length})</h1>

      <ul className="space-y-4">
        {comments.map((comment: any) => (
          <li key={comment.id} className="p-4 border rounded bg-gray-50">
            <p className="font-bold">{comment.name}</p>
            <p className="text-sm text-gray-600">{comment.email}</p>
            <p className="mt-2">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
