.pragma library

var VERBOSE = 0
var TRACE = 1
var DEBUG = 2
var INFO = 3
var WARN = 4
var ERROR = 5
var CRITICAL = 6

var LOG_PRIORITY = DEBUG

var _logStrings = [qsTr("VERBOSE"), qsTr("TRACE"), qsTr("DEBUG"), qsTr("INFO"), qsTr("WARN"), qsTr("ERROR"), qsTr("CRITICAL")]

/**
  Logs directly to console without checking log level
  */
function log(msg) {
    console.log(msg)
}

function verbose(msg) {
    write(msg, VERBOSE)
}

function trace(msg) {
    write(msg, TRACE)
}

function debug(msg) {
    write(msg, DEBUG)
}

function info(msg) {
    write(msg, INFO)
}

function warn(msg) {
    write(msg, WARN)
}

function error(msg) {
    write(msg, ERROR)
}

function critical(msg) {
    write(msg, CRITICAL)
}

function write(msg, logLevel) {
    if(logLevel >= LOG_PRIORITY) {
        var logLvlString = _logStrings[logLevel];
        console.log(logLvlString + ": " + msg)
    }
}
