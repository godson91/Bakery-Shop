import React, { useState, useEffect } from "react";
//the hooks version of 'page load' or componentDidMount

function UseEffectExample() {
  const [user, setUser] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("Bret");

  useEffect(() => {
      console.log("if people don't make stuff, there will be no stuff")
    const fetchfunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${SearchQuery}`
      );
      const resJson = await response.json()
      setUser(resJson[0])

    }
    fetchfunc();
  },[]);

  return (
    <div>
      <input
        type="search"
        value={SearchQuery}
        placeholder="enter text"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}

export default UseEffectExample;
