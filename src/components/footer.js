import React from "react";

export default () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <p>jfreitas.photos {year} &copy; All rights reserved</p>
      <p className="github-link">
        <a href="https://github.com/juniormfreitas/jfreitas.photos">
          How I built this website.
        </a>
      </p>
    </footer>
  );
};
