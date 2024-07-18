const report = require("multiple-cucumber-html-reporter");
const path = require("path");

report.generate({
  jsonDir: path.join(__dirname, "cypress", "cucumberReports"),
  reportPath: "./newreports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "81",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
});
