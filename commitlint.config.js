// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],

  // Customize rules
  rules: {
    // Type must be one of the specified values
    "type-enum": [
      2, // Error level (0=off, 1=warn, 2=error)
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "review",
        "docs", // Documentation
        "style", // Formatting
        "refactor", // Code restructuring
        "perf", // Performance
        "test", // Tests
        "build", // Build system
        "dx", // Developer experience
        "ci", // CI configuration
        "chore", // Maintenance
        "revert", // Revert commit
      ],
    ],

    // Scope configuration: optional
    "scope-empty": [0, "never"],

    // Subject configuration
    "subject-empty": [2, "never"],
    "subject-case": [0, "always", "sentence-case"],
    "subject-full-stop": [1, "never", "."],
    "subject-max-length": [2, "always", 85],

    // Body configuration
    "body-max-line-length": [2, "always", 100],

    // Footer configuration
    "footer-max-line-length": [2, "always", 100],
  },
};
