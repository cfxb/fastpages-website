export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    templateFormats: ["njk"],
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
}
