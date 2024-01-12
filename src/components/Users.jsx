import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <button onClick={() => getUserPosts(user.id)}>Posts</button>
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.userId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {/* <button onClick={() => getUserPosts(user.id)}>Posts</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
