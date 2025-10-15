import nextJest from "next/jest.js";

const createJestConfig = nextJest({

  dir: "./",
});

const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  collectCoverage: true,
};

export default createJestConfig(config);
