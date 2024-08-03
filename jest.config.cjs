module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: [
    "**/__tests__/**/*.test.js",
    "**/__tests__/**/*.spec.js",
    "**/__tests__/**/*.test.jsx",
    "**/__tests__/**/*.spec.jsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
