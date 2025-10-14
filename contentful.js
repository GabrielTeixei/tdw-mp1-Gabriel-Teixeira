import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_TOKEN,
  accessToken: process.env.PREVIEW_TOKEN,
});
