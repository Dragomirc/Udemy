"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var pathToCsv = path_1.default.join(__dirname, '..', 'football.csv');
var matchReader = MatchReader_1.MatchReader.fromCsv(pathToCsv);
var winsSummary = Summary_1.Summary.winsAnalysisWithConsoleReport('Man United');
var averageGoalsSummary = Summary_1.Summary.averageGoalsWithHtmlReport('Everton');
matchReader
    .load()
    .then(function () { return matchReader.matches; })
    .then(function (matches) {
    winsSummary.buildAndPrintReport(matches);
    averageGoalsSummary.buildAndPrintReport(matches);
});
