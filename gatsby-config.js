module.exports = {
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
  ],
};
