"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var node_http_1 = require("node:http");
var graphql_1 = __importDefault(require("../pages/api/graphql"));
var server = (0, node_http_1.createServer)(graphql_1["default"]);
server.listen(4000, function () {
    console.info('Server is running on http://localhost:4000/graphql');
});
