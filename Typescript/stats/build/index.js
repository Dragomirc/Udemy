"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
var pathToCsv = path_1.default.join(__dirname, '..', 'football.csv');
var csvFileReader = new CsvFileReader_1.CsvFileReader(pathToCsv);
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader
    .load()
    .then(function () { return matchReader.matches; })
    .then(function (matches) {
    var manUnitedWins = 0;
    matches.forEach(function (game) {
        if ((game[1] === 'Man United' && game[5] === MatchResult_1.MatchResult.HomeWin) ||
            (game[2] === 'Man United' && game[5] === MatchResult_1.MatchResult.AwayWin)) {
            manUnitedWins++;
        }
    });
    console.log(manUnitedWins);
});
