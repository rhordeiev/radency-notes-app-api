"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello world!");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
