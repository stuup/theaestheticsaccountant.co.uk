export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

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
