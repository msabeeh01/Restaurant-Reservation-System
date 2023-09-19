import { createClient } from "redis";

//create test local redis client
const redisClient = createClient({
    host: 'localhost',
    port: 6379
});

redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
})

redisClient.on('connect', () => {
    console.log('Redis Client Connected');
})

redisClient.connect();

export {
    redisClient
}