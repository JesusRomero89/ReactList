// src/hooks/useUsers.js
import { useState, useEffect } from 'react';

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Simulate more users by duplicating the results
        const extendedData = [...data, ...data]; // We duplicated the 10 users to simulate more
        setUsers(extendedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}

export default useUsers;
