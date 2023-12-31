// /** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "test",
        mongodb_password: "KLYlFalofnaq0eB9",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "test",
      mongodb_password: "KLYlFalofnaq0eB9",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
