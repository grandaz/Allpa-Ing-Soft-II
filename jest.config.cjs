// jest.config.js
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['@testing-library/react'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
  