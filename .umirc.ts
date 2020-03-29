import { defineConfig } from "umi";

export default defineConfig({
  // setting title here is not translated by plugin-locale
  title: "site.title",
  locale: {
    default: "en-US",
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: "-",
  },
  routes: [
    {
      path: "/",
      component: "@/pages/index",
      // setting title here is translated by plugin-locale
      // title: "site.title"
    },
  ],
});
