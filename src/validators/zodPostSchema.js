import {z} from 'zod';

export const zodPostSchema = z.object({
    // send a custom error message if caption is not provided
    caption: z.string({ message: "Caption is required" }).min(1),
})