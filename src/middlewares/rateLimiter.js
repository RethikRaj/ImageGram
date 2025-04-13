import {rateLimit} from 'express-rate-limit';

const rateLimiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	limit: 100, 
});

export default rateLimiter;