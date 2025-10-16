import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,           // mantém o mesmo
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,        // atualizado para o nome do secret
});
