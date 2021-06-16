// package.json
declare module "*/package.json" {
  export const version: string;
  export const author: string;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module "disqus-react" {
  export class DiscussionEmbed extends React.Component<{
    shortname: string,
    config: {
      url?: string,
      identifier?: string,
      title?: string,
    },
  }, {}> { }
}

declare interface PageContext {
  index: boolean;
  i18n: {
    language: string;
    defaultLanguage: string;
    languages: string[];
    originalPath: string;
    path: string;
  };
  tag?: string; // only set into `templates/tags-pages.tsx`
}

declare interface PageProps {
  pageContext: PageContext;
}
