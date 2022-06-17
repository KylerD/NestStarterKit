export default () => ({
  PORT: parseInt(process.env.PORT) || 3000,
  DATABASE: 'some connection string',
});