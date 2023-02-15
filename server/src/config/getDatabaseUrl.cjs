const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/my-gaming-list_development",
      test: "postgres://postgres:postgres@localhost:5432/my-gaming-list_test",
      e2e: "postgres://postgres:postgres@localhost:5432/my-gaming-list_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
