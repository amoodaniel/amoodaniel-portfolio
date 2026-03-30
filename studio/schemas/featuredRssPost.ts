// Schema for curating which Substack / Medium posts appear on the public blog
const featuredRssPost = {
  name: 'featuredRssPost',
  title: 'Featured RSS Post',
  type: 'document',
  fields: [
    {
      name: 'rssLink',
      title: 'Post URL',
      type: 'url',
      description: 'Paste the full URL of the Substack or Medium post to feature.',
      validation: (R: any) => R.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'AI', value: 'ai' },
          { title: 'Living', value: 'living' },
        ],
        layout: 'radio',
      },
      validation: (R: any) => R.required(),
    },
  ],
  preview: {
    select: { title: 'rssLink', subtitle: 'category' },
  },
};

export default featuredRssPost;
