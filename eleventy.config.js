import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Rewrite every <img> into a <picture> with AVIF/WebP versions. The originals
  // are still copied above for CSS backgrounds and og:image.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "auto"],
    widths: ["auto"],
    urlPath: "/assets/images/optimised/",
    outputDir: "_site/assets/images/optimised/",
    defaultAttributes: { loading: "lazy", decoding: "async" },
  });

  // Tailwind writes CSS straight to _site; reload the browser when it changes
  eleventyConfig.setServerOptions({ watch: ["_site/assets/css/**/*.css"] });
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
