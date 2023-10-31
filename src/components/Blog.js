import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../firebaseConfig';
import "./css/darkMode.css";
import "./css/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const postsQuery = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const data = await getDocs(postsQuery);
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    
    fetchData();
    
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, []);
    
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <h4>{post.author}</h4>
          {Array.isArray(post.content) ? (
            post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>Error: Post content is not formatted correctly.</p>
          )}
          {user && (
            <div>
              <Link to={`/editblog/${post.id}`}>Edit</Link>
              <Link to={`/deleteblog/${post.id}`}>Delete</Link>
            </div>
          )}
          <hr />
        </div>
      ))}
      {user ? (
        <Link to="/createblog">Create New Post</Link>
      ) : null}
    </div>
  );
}

export default Blog;
