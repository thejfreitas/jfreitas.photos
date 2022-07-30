import React from 'react';
import { Link } from 'gatsby';

export default function Header({ headline }) {
  return (
    <header className="headline">
      <h1>
        <Link to="/">{headline}</Link>
      </h1>
    </header>
  );
}
