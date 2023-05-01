import React, { useState, useEffect, createContext } from "react";
import blogData from "../utils/blog";

const SharxcContext = createContext();

const SharxcProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogData);
  }, []);

  return (
    <SharxcContext.Provider value={{ blogPosts }}>
      {children}
    </SharxcContext.Provider>
  );
};

export { SharxcProvider, SharxcContext };
