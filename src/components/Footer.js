import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getFullCurrentYear } from '../utils'

export default function Footer() {
  const siteDataQuery = useStaticQuery(
    graphql`
    query FooterData {
      site {
        siteMetadata {
          siteAddress
          repository
        }
      }
    }
  `
  );

  const { siteAddress, repository } = siteDataQuery.site.siteMetadata;

  return (
    <footer className="container">
      <p>{siteAddress} {getFullCurrentYear()} &copy; All rights reserved</p>
      <p className="github-link">
        <a href={repository}>
          How I built this website
        </a>
      </p>
    </footer>
  );
};
