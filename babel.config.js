const defaultPresets = [
  [
    "@babel/preset-env",
    {
      modules: process.env.BABEL_ENV === "esm" ? false : "commonjs"
    }
  ]
];

const productionPlugins = [
  "@babel/plugin-transform-react-constant-elements",
  "babel-plugin-transform-dev-warning",
  "@babel/plugin-proposal-optional-chaining",
  [
    "babel-plugin-transform-react-remove-prop-types",
    {
      mode: "unsafe-wrap"
    }
  ]
];

module.exports = {
  presets: defaultPresets.concat(["@babel/preset-react"]),
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@styles": "./src/styles",
          "@types": "./src/types",
          "@data": "./src/data"
        }
      }
    ],
    "babel-plugin-optimize-clsx",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
    ["@babel/plugin-transform-runtime", { version: "^7.4.4" }],
    // for IE 11 support
    "@babel/plugin-transform-object-assign"
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  env: {
    cjs: {
      plugins: productionPlugins
    },
    esm: {
      plugins: [
        ...productionPlugins,
        ["@babel/plugin-transform-runtime", { useESModules: true }]
      ]
    }
  }
};
