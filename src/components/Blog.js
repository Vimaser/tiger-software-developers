import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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
          const data = await getDocs(collection(db, 'posts'));
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
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h4>{post.author}</h4>
            <p>{post.content}</p>
            {user && <Link to={`/editblog/${post.id}`}>Edit</Link>}
            {user && <Link to={`/deleteblog/${post.id}`}>Delete</Link>}
            <hr />
          </div>
        ))}
        {user ? (
          <Link to="/createblog">Create New Post</Link>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
  
  export default Blog;