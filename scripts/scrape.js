var axios = require("axios");
var cheerio = require("cheerio");

// Scrapes the NYTimes
var scrape = function() {
  return axios.get("https://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Empty array to save article info
    var articles = [];
    // Find and loop through each element that has the ".css-1l4spti" class
    $(".assetWrapper").each(function(i, element) {
      var head = $(this)
        .find("h2")
        .text()
        .trim();

      // Grab the URL of the article
      var url = $(this)
        .find("a")
        .attr("href");

      var sum = $(this)
        .find("p")
        .text()
        .trim();

      if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, "").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, "").trim();

        // Initialize an object we will push to the articles array
        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.nytimes.com" + url
        };

        // Push new article into articles array
        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;
