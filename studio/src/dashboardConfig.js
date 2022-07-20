export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d80118b2b4ec241f3638d3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-b6jqhqwk",
                  apiId: "a3711e59-3b94-43dd-8d44-d8f3d5f0cf96",
                },
                {
                  buildHookId: "62d80119b335a15150f85e30",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cd44phmi",
                  apiId: "aa0daac6-e0db-4a14-8ba1-432b2a48beb9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/grafium/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cd44phmi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
