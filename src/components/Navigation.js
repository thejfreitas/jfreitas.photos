import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

export default function Navigation({ externalSites }) {
  return (
    <nav>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const switchString = theme === 'dark' ? 'Light' : 'Dark';
          return (
            <label className="theme-toggle" htmlFor="theme-toggle">
              <input
                className="theme-toggle-switch"
                name="theme-toggle"
                id="theme-toggle"
                type="checkbox"
                onChange={(event) =>
                  toggleTheme(event.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />
              Switch to {switchString} Mode
            </label>
          );
        }}
      </ThemeToggler>

      <ul className="social-links">
        {externalSites.map((site, index) => {
          const { name, url } = site;

          return (
            <li key={index}>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
