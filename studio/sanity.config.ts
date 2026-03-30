import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'amoodaniel-portfolio',
  title: 'Amoo Daniel Blog',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem()
              .title('Featured RSS Posts')
              .child(
                S.documentTypeList('featuredRssPost').title('Featured RSS Posts')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
