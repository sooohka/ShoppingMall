const CracoAlias = require("craco-alias");
module.exports = {
  jest: {
    configure: {
      moduleNameMapper: {
        "@Src/(.*)": "<rootDir>/src/$1",
        "@Assets/(.*)": "<rootDir>/src/assets/$1",
        "@Components/(.*)": "<rootDir>/src/components/$1",
        "@Config/(.*)": "<rootDir>/src/config/$1",
        "@Domains/(.*)": "<rootDir>/src/domains/$1",
        "@Hooks/(.*)": "<rootDir>/src/hooks/$1",
        "@Providers/(.*)": "<rootDir>/src/providers/$1",
        "@Routes/(.*)": "<rootDir>/src/routes/$1",
        "@Types/(.*)": "<rootDir>/src/types/$1",
        "@Utils/(.*)": "<rootDir>/src/utils/$1",
        "@Misc/(.*)": "<rootDir>/src/misc/$1",
        "@Stores/(.*)": "<rootDir>/src/stores/$1",
        "@Contexts/(.*)": "<rootDir>/src/contexts/$1",
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.path.json",
      },
    },
  ],
};
