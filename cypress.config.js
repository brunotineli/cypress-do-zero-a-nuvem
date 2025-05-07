const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress Cloud
  projectId: "on7ry1",
  // Default configs
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
  video: true
});
