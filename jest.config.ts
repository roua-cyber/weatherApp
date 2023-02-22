// eslint-disable-next-line import/no-anonymous-default-export
export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['./src/__setup__/setupTests.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    testMatch: ['**/*.test.tsx'],
};
