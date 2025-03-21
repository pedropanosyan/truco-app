export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@types/(.*)$": "<rootDir>/src/types/$1",
	},
};
