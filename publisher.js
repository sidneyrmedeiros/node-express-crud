const amqplib = require('amqplib');
const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5673';

(async (req, res) => {
    const connection = await amqplib.connect(amqpUrl, 'heartbeat=60');
    const channel = await connection.createChannel();
    try {
        console.log('Publishing', req);
        const exchange = 'request.url';
        const queue = 'request.url';
        const routingKey = 'url';

        await channel.assertExchange(exchange, 'direct', { durable: true });
        await channel.assertQueue(queue, { durable: true });
        await channel.bindQueue(queue, exchange, routingKey);

        const msg = { 'id': Math.floor(Math.random() * 1000), 'url': 'http://...' };
        await channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(msg)));
        console.log('Message published');
    } catch (e) {
        console.error('Error in publishing message', e);
    } finally {
        console.info('Closing channel and connection if available');
        await channel.close();
        // await connection.close();
        console.info('Channel and connection closed');
    }
    //process.exit(0);
})();