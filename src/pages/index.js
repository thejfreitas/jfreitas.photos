import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../templates/layout-wrap';
import Navigation from '../components/Navigation';
import Seo from '../components/Seo';
import ModalGallery from '../components/ModalGallery';

import { extractFileNameFromSrc } from '../utils';

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
        imgStyle={{ objectFit: 'contain' }}
        alt={extractFileNameFromSrc(image.childImageSharp.gatsbyImageData.images.fallback.src)}
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
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={extractFileNameFromSrc(image.childImageSharp.gatsbyImageData.images.fallback.src)}
              />
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
