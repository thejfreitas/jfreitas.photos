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
    // console.log(image)
    setModalOpen(true);
    setModalElement(<Img key={image.id} fluid={image.childImageSharp.fluid} />)
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
              <div key={image.id} onClick={() => handleOpenModal(image)}>
                <Img key={image.id} fluid={image.childImageSharp.fluid} />
              </div>
          ))}

          <Modal isOpen={isModalOpen} contentLabel="onRequestClose Example" onRequestClose={handleCloseModal}>
            {/* <p onClick={() => handleCloseModal()}>Close</p> */}
            {modalElement}
            
          </Modal>
        </section>
      </main>
    </Layout>
  );
};
