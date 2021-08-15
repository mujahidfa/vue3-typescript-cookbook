import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Vue 3 TypeScript Cookbook",
  description: "A guide to writing Vue 3 with TypeScript.",
  bundler: "@vuepress/vite",
  themeConfig: {
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true,
    sidebar: {
      "/": [
        { text: "Installation", link: "/" },
        {
          text: "Basics",
          children: [
            { text: "Ref", link: "/basics/ref" },
            { text: "Reactive", link: "/basics/reactive" },
            { text: "Computed", link: "/basics/computed" },
            { text: "Watch", link: "/basics/watch" },
            { text: "Props", link: "/basics/props" },
            { text: "Emit", link: "/basics/emit" },
            { text: "Event handlers", link: "/basics/event-handlers" },
          ],
        },
        {
          text: "Advanced",
          children: [
            { text: "Context", link: "/advanced/context" },
            { text: "Slots", link: "/advanced/slots" },
            { text: "toRefs", link: "/advanced/torefs" },
            { text: "Provide / Inject", link: "/advanced/provide-inject" },
            { text: "Custom Directives", link: "/advanced/custom-directives" },
            { text: "Plugins", link: "/advanced/plugins" },
          ],
        },
        {
          text: "Vuex",
          children: [{ text: "Getting Started", link: "/vuex/" }],
        },
        {
          text: "Vue Router",
          children: [{ text: "Getting Started", link: "/vue-router/" }],
        },
        {
          text: "Vue Test Utils",
          children: [{ text: "Getting Started", link: "/vue-test-utils/" }],
        },
        {
          text: "Tooling",
          children: [
            { text: "ESLint", link: "/tooling/eslint" },
            { text: "VSCode Extensions", link: "/tooling/vscode-extensions" },
            { text: "Bundlers", link: "/tooling/bundlers" },
            { text: "Generate *.d.ts", link: "/tooling/generate-d.ts" },
            { text: "Type Checking", link: "/tooling/type-checking" },
          ],
        },
        {
          text: "Others",
          children: [
            { text: "Nuxt", link: "/others/nuxt" },
            { text: "", link: "/others/" },
            { text: "", link: "/others/" },
            { text: "", link: "/others/" },
            { text: "", link: "/others/" },
          ],
        },
      ],
    },
  },
});
