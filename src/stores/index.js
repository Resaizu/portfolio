import { defineStore } from 'pinia';

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    active_section: 'hero',
    project_list: [
      {
        title: 'Example',
        slug: 'example', // Must be the same folder on assets ex. /assets/images/projects/example case sensitive
        images: [
          {
            path: 'bytewebster.png', // Case Sensitive
            description: 'Landing',
          },
          {
            path: 'landmark.png', // Case Sensitive
            description: '',
          },
          {
            path: 'loople.png', // Case Sensitive
            description: '',
          },
          {
            path: 'envato.jpg', // Case Sensitive
            description: '',
          },
          {
            path: 'monst.jpg', // Case Sensitive
            description: '',
          },
        ],
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aliquam, sapiente quae cumque beatae quam ipsum`, // Short Description
        about:
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, sapiente quae cumque beatae quam ipsum,
          nobis nam minima id reprehenderit sequi repellat eos, obcaecati dolorum sunt aut praesentium! Ea consequuntur
          asperiores recusandae natus dicta, ex, officia commodi, quisquam temporibus culpa voluptate neque.
          Totam sit accusamus, facere doloremque tempore sequi iure.`,
        key_features: [
          'Key Feature 1',
          'Key Feature 2',
          'Key Feature 3',
          'Key Feature 4',
          'Key Feature 5',
        ],
        tech_stack: [
          'Laravel',
          'Vue 3',
          'REST API',
          'MySQL',
        ],
        live_link: '#'
      },
      {
        title: 'Example 2',
        slug: 'another-example', // Must be the same folder on assets ex. /assets/images/projects/another-example case sensitive
        images: [
          {
            path: 'another-bytewebster.png', // Case Sensitive
            description: 'Landing',
          },
          {
            path: 'another-landmark.png', // Case Sensitive
            description: '',
          },
          {
            path: 'another-loople.png', // Case Sensitive
            description: '',
          },
          {
            path: 'another-envato.jpg', // Case Sensitive
            description: '',
          },
          {
            path: 'another-monst.jpg', // Case Sensitive
            description: '',
          },
        ],
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, sapiente quae cumque beatae quam ipsum',
        about:
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, sapiente quae cumque beatae quam ipsum,
          nobis nam minima id reprehenderit sequi repellat eos, obcaecati dolorum sunt aut praesentium! Ea consequuntur
          asperiores recusandae natus dicta, ex, officia commodi, quisquam temporibus culpa voluptate neque.
          Totam sit accusamus, facere doloremque tempore sequi iure.`,
        key_features: [
          'Key Feature 1',
          'Key Feature 2',
          'Key Feature 3',
          'Key Feature 4',
          'Key Feature 5',
        ],
        tech_stack: [
          'Laravel',
          'Vue 3',
          'REST API',
          'MySQL',
        ],
        // live_link: '#'
      },
    ]
  }),
  actions: {
    set_active_section(section) {
      this.active_section = section;
    },
    async importImages(slug, image) {
      const modules = import.meta.glob('/src/assets/images/projects/**/*', { eager: false, import: 'default' });
      // Make eager: true if in dev mode

      const path = '/src/assets/images/projects';

      const loader = modules[`${path}/${slug}/${image}`];
      return loader ? await loader() : null;
    }
  },
});
