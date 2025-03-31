import dotenv from 'dotenv';

dotenv.config();

export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const AWS_REGION = process.env.AWS_REGION;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;