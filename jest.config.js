module.exports = {
  displayName: "heni-fe-test",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "./coverage",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  transform: {
    "^.+\\.[t]sx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
    '@api/(.*)': '<rootDir>/api/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@containers/(.*)': '<rootDir>/containers/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
  },
};
