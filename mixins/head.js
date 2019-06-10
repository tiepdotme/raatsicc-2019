/*
 * Head mixin
 *
 * Used in pages to set meta tags pulled from Dato
 */

import config from "../config";

// This snippet is used to fetch metaTags on all pages
export const metaTagsQuery = `
  metaTags {
    title
    description
  }
`;

export default {
  head() {
    const { metaTags } = this.page;

    return {
      /* prettier-ignore */
      title: `${metaTags.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${metaTags.description}`
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `${config.SITE_URL}${this.$route.path}`
        }
      ]
    };
  }
};
