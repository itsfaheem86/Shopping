module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@db/(.*)$': '<rootDir>/src/db/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/src/**/*.test.(ts|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  sandboxInjectedGlobals: [],
  setupFilesAfterEnv: ['./src/test/setup.ts'],
};
