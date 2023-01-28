export default () => ({
    broker: process.env.KAFKA_BROKER || 'localhost:29092'
});