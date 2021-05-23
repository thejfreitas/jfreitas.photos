import React from 'react';
import { getFullCurrentYear } from '../utils'

export default function Footer() {
  return (
    <footer className="container">
      <p>jfreitas.photos {getFullCurrentYear()} &copy; All rights reserved</p>
      <p className="github-link">
        <a href="https://github.com/juniormfreitas/jfreitas.photos">
          How I built this website.
        </a>
      </p>
    </footer>
  );
};
