/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '.*',
  testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/generated/**',
  ],
  verbose: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}

module.exports = config
