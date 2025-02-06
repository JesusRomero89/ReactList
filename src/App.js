// src/App.js
import React from 'react';
import UserList from './components/UserList'; // Import UserList component

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <UserList /> {/* Render UserList component */}
    </div>
  );
}

export default App;
