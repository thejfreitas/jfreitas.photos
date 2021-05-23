import React from 'react';

export default function Navigation({ externalSites }) {
  return (
    <nav>
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
};
