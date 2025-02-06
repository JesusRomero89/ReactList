// src/components/UserCard.js
import React from 'react';
import '../styles/UserCard.css'; // Import external CSS for styling

function UserCard({ user }) {
  return (
    <li className="user-card">
      <span className="user-name">{user.name}</span>
      <span className="user-email">{user.email}</span>
    </li>
  );
}

export default UserCard;
