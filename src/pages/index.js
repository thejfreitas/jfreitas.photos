import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Navigation from '../components/Navigation';
import SEO from '../components/Seo';
import Img from 'gatsby-image';
import ModalGallery from "../components/ModalGallery"

export default () => {
  const pageData = useStaticQuery(
    graphql`
      query Images {
        gal: allFile {
          nodes {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        site {
          siteMetadata {
            headline
            greeting
            name
            description
            externalSites {
              name
              url
            }
          }
        }
      }
    `
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalInnerElement, setModalInnerElement] = useState(false);

  const handleOpenModal = image => {
    setModalOpen(true);
    setModalInnerElement(
      <Img
        className="ReactModal__Content--image-wrapper"
        fluid={image.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
      />
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const site = pageData.site.siteMetadata;

  return (
    <Layout>
      <SEO title={site.name} description={site.description} />
      <main>
        <header className="headline">
          <h1>
            <Link to="/">{site.headline}</Link>
          </h1>
        </header>

        <Navigation externalSites={site.externalSites} />

        <p className="greeting">
          {site.greeting} {site.name}. {site.description}
        </p>

        <section className="gallery-area">
          {pageData.gal.nodes.map(image => (
            <div
              key={image.id}
              onClick={() => handleOpenModal(image)}
              onKeyPress={() => handleOpenModal(image)}
              role="presentation"
            >
              <Img fluid={image.childImageSharp.fluid} />
            </div>
          ))}

          <ModalGallery isModalOpen={isModalOpen} modalInnerElement={modalInnerElement} handleCloseModal={handleCloseModal} />
        </section>
      </main>
    </Layout>
  );
};
