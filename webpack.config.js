const path = require("path");
const serverConfig = {
    entry: "./index.js",
    target: "node",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.min.js",
    },
};
module.exports = [serverConfig];