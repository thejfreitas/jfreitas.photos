import React from "react";
import { Link } from "gatsby";
import Layout from "../templates/layout-wrap";
export default () => {
  return (
    <Layout>
      <main className="four-zero-four">
        <section className="container fallback-area">
          <h1>404 - Page not found</h1>
          <p>Ops! This page is broken or does not exist anymore.</p>
          <Link className="back-top-home" to="/">
            Back to the homepage
          </Link>
        </section>
      </main>
    </Layout>
  );
};
