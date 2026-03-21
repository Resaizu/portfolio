import { defineStore } from 'pinia';

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    active_section: 'hero',
    project_list: [
      {
        title: 'Example',
        slug: 'example', // Must be the same folder on assets ex. /assets/images/projects/example case sensitiv
        images: [
          {
            path: '/example/bytewebster.png', // Case Sensitive
            description: 'Landing',
          },
          {
            path: '/example/landmark.png', // Case Sensitive
            description: '',
          },
          {
            path: '/example/loople.png', // Case Sensitive
            description: '',
          },
          {
            path: '/example/envato.jpg', // Case Sensitive
            description: '',
          },
          {
            path: '/example/monst.jpg', // Case Sensitive
            description: '',
          },
        ],
        description: 'An Example Project showcasing admin panel and landing pages.', // Short Description
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
            path: '/another-example/another-bytewebster.png', // Case Sensitive
            description: 'Landing',
          },
          {
            path: '/another-example/another-landmark.png', // Case Sensitive
            description: '',
          },
          {
            path: '/another-example/another-loople.png', // Case Sensitive
            description: '',
          },
          {
            path: '/another-example/another-envato.jpg', // Case Sensitive
            description: '',
          },
          {
            path: '/another-example/another-monst.jpg', // Case Sensitive
            description: '',
          },
        ],
        description: 'An Example Project showcasing admin panel and landing pages.',
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
    resolveImages () { 
      const imageModules = import.meta.glob(
        '/src/assets/images/projects/**/*.{jpg,png,webp}', // Add image extensions as needed
        { eager: true, import: 'default' }
      );

      const basePath =  '/src/assets/images/projects';

      this.project_list = this.project_list.map(project => ({
        ...project,
        images: project.images.map(image => ({
          ...image,
          path: imageModules[basePath + image.path]
        }))
      }))
    },
  },
});
