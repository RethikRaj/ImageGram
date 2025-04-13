import {rateLimit} from 'express-rate-limit';

const rateLimiter = rateLimit({
	windowMs: 0.5 * 60 * 1000, // 30 seconds
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

export default rateLimiter;