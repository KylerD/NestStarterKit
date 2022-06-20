export default () => ({
  PORT: parseInt(process.env.PORT) || 3000,
  MONGO_CONNECTION_STRING:
    process.env.MONGO_CONNECTION_STRING ||
    'mongodb://localhost:27017/YourDatabaseName',
  PG_CONNECTION_STRING:
    process.env.PG_CONNECTION_STRING ||
    'postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName',
});
