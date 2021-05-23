import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../templates/layout-wrap';
import Navigation from '../components/Navigation';
import Seo from '../components/Seo';
import ModalGallery from '../components/ModalGallery';

const Index = () => {
  const siteDataAndImagesQuery = useStaticQuery(
    graphql`
      query PageData {
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
        allFile {
          nodes {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH) 
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
      <GatsbyImage
        className="ReactModal__Content--image-wrapper"
        image={image.childImageSharp.gatsbyImageData}
        alt="image"
        imgStyle={{ objectFit: 'contain' }}
      />
    );
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const { name, description, headline, externalSites, greeting } = siteDataAndImagesQuery.site.siteMetadata;
  const gallery = siteDataAndImagesQuery.allFile.nodes;

  return (
    <Layout>
      <Seo title={name} description={description} />
      <main>
        <header className="headline">
          <h1>
            <Link to="/">{headline}</Link>
          </h1>
        </header>

        <Navigation externalSites={externalSites} />

        <p className="greeting">
          {greeting} {name}. {description}
        </p>

        <section className="gallery-area">

          {gallery.map(image => (
            <div
              key={image.id}
              onClick={() => handleOpenModal(image)}
              onKeyPress={() => handleOpenModal(image)}
              role="presentation"
            >
              <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="image" />
            </div>
          ))}

          <ModalGallery
            isModalOpen={isModalOpen}
            modalInnerElement={modalInnerElement}
            handleCloseModal={handleCloseModal}
          />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
