import Redis from "ioredis";

const redisString: string = process.env.REDIS_URL || "redis://localhost:6379"
export const redis = new Redis(redisString)