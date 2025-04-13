import {z} from 'zod';

const zodCommentSchema = z.object({
    content : z.string().min(5, {message : "comment of minimum length 5 is required"})
})

export default zodCommentSchema;