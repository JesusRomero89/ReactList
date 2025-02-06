// src/components/UserList.js
import React, { useState } from 'react';
import useUsers from '../hooks/useUsers'; // Import custom hook
import UserCard from './UserCard'; // Import UserCard component
import '../styles/UserList.css'; // Import external CSS

function UserList() {
  const { users, loading, error } = useUsers(); // Consume custom hook

  const [visibleUsers, setVisibleUsers] = useState(5); // Show 5 users initially

  // Show 5 more users
  const showMoreUsers = () => {
    setVisibleUsers((prev) => Math.min(prev + 5, users.length));
  };

  // Reset to 5 users
  const resetUsers = () => {
    setVisibleUsers(5);
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">Error loading users: {error.message}</p>;
  }

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <div className="user-list-wrapper">
        <ul className="user-list">
          {users.slice(0, visibleUsers).map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
      <div className="buttons-container">
        {visibleUsers < users.length && (
          <button className="more-results-btn" onClick={showMoreUsers}>
            More Results
          </button>
        )}
        <button className="reset-btn" onClick={resetUsers}>
          Reset List
        </button>
      </div>
    </div>
  );
}

export default UserList;
