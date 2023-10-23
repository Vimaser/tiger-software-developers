import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import '../firebaseConfig';

const EditBlog = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAuthor, setUpdatedAuthor] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const { blogId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const postRef = doc(db, 'posts', blogId);
      const postDoc = await getDoc(postRef);
      
      if (postDoc.exists()) {
        setPost(postDoc.data());
        setUpdatedTitle(postDoc.data().title);
        setUpdatedAuthor(postDoc.data().author);
        setUpdatedContent(postDoc.data().content);
        setLoading(false);
      } else {
        console.error("Post does not exist!");
      }
    };

    fetchData();
  }, [postId]);

  const handleUpdate = async () => {
    const db = getFirestore();
    const postRef = doc(db, 'posts', postId);
    
    await updateDoc(postRef, {
      title: updatedTitle,
      author: updatedAuthor,
      content: updatedContent
    });
    
    alert('Post updated successfully!');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Post</h2>
      <div>
        <label>Title:</label>
        <input 
          value={updatedTitle} 
          onChange={e => setUpdatedTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input 
          value={updatedAuthor} 
          onChange={e => setUpdatedAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea 
          value={updatedContent} 
          onChange={e => setUpdatedContent(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
}

export default EditBlog;
