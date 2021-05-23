# jfreitas.photos

This is my photography portfolio built in [GatsbyJs](https://www.gatsbyjs.org/) which is a open source framework based on [React](https://reactjs.org/)

For web design I am using CSS Grid and [SASS](https://sass-lang.com/) as CSS preprocessor.

Before you start you must have Gatsby CLI installed in your computer.

You might need to [set up your environment](https://www.gatsbyjs.org/tutorial/part-zero/) first in order to install [the Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)

After you clone this repository run the following command:

```
yarn
```

and then

```
gatsby develop
```

SCSS will compile automatically due the [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) as long as you are running `gatsby develop` command in your terminal.

The `dev.sh` file will help you to create a production version of this website and deploy to production. In this case I am using [Netlify](https://www.netlify.com/) to deploy this website. You must create an account in order to set up your environment in production.

To build and deploy this website you can use the following command:

```sh
./dev.sh build deploy
```
