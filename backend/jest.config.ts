export default {
  clearMocks: true,
  coverageProvider: "v8",
  globals: {

    NODE_ENV: "test"
  },
  moduleDirectories: ["node_modules", 'src'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
   
  },
  verbose: true
};
