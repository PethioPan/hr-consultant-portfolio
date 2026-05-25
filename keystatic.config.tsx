import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'PethioPan/hr-consultant-portfolio',
  },
  singletons: {
    landing: singleton({
      label: 'Landing Page',
      path: 'src/content/landing',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Hero Headline' }),
        subheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),
        aboutTitle: fields.text({ label: 'About Title' }),
        aboutContent: fields.text({ label: 'About Content', multiline: true }),
        yearsExperience: fields.number({ label: 'Years of Experience' }),
      },
    }),
  },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'authorName',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      schema: {
        authorName: fields.slug({ name: { label: 'Author Name' } }),
        authorTitle: fields.text({ label: 'Author Title' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
      },
    }),
  },
});
