'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Ghost CMS configuration
const GHOST_API_URL = 'https://cyber-alamo.ghost.io';
const GHOST_API_KEY = '48e49c23754dd332c99abca422';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  html?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch all posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${GHOST_API_URL}/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}&fields=title,slug,excerpt,published_at`
        );
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Fetch a single post by slug
  const fetchPostBySlug = async (slug: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${GHOST_API_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${GHOST_API_KEY}&fields=title,html,published_at`
      );
      const data = await response.json();
      setSelectedPost(data.posts ? data.posts[0] : null);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  // Render post list if no post is selected
  if (!selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
        <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">Blog</h1>
        
        {loading ? (
          <p className="text-center text-gray-300">Loading posts...</p>
        ) : (
          <section className="max-w-5xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <div
                    key={post.id} // Use unique post.id as the key
                    className="bg-gradient-to-b from-black to-red-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <p className="text-sm text-gray-400 mb-4">
                      Published on: {new Date(post.published_at).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => fetchPostBySlug(post.slug)}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-300">No posts available.</p>
            )}
          </section>
        )}
      </div>
    );
  }

  // Render selected post view
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white p-12">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
        <p className="text-sm text-gray-400 mb-6">
          Published on: {new Date(selectedPost.published_at).toLocaleDateString()}
        </p>
        <div
          className="text-lg leading-8 text-gray-300"
          dangerouslySetInnerHTML={{ __html: selectedPost.html || '' }}
        ></div>
        <button
          onClick={() => setSelectedPost(null)} // Go back to the list view
          className="text-red-600 hover:underline mt-8 block"
        >
          Back to Blog
        </button>
      </div>
    </div>
  );
}
