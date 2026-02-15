module.exports = function (eleventyConfig) {

    // Pass through static assets untouched
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("style.css");

    // Blog posts collection, sorted by date (newest first)
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("blog/posts/*.md").sort((a, b) => {
            return b.date - a.date;
        });
    });

    // Human-readable date filter
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
