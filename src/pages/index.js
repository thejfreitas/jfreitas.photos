import React, {useState} from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../templates/layout-wrap';
import Navigation from '../components/Navigation';
import SEO from '../components/Seo';
import Img from 'gatsby-image';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

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
  const [modalElement, setModalElement] = useState(false);

  const handleOpenModal = (image) => {
    setModalOpen(true);
    setModalElement(
      <Img 
        fluid={image.childImageSharp.fluid} 
        style={{ maxHeight: 'calc(100vh)' }}
        imgStyle={{ objectFit: 'contain' }} 
      />
    )
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }

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
              <div key={image.id} onClick={() => handleOpenModal(image)} onKeyPress={() => handleOpenModal(image)} role="presentation">
                <Img fluid={image.childImageSharp.fluid} />
              </div>
          ))}

          <Modal isOpen={isModalOpen} contentLabel="onRequestClose Example" onRequestClose={handleCloseModal} closeTimeoutMS={200}>
            {modalElement}
            <button className="ReactModal__Content--close" onClick={() => handleCloseModal()}>Close</button>
          </Modal>
        </section>
      </main>
    </Layout>
  );
};
