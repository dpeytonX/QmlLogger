import QtQuick 1.1
import "Logger.js" as Console

Rectangle {
    width: 400
    height: 400

    Component.onCompleted: {
        Console.log("log: setting to VERBOSE")
        Console.LOG_PRIORITY = Console.VERBOSE
        Console.critical("critical")
        Console.debug("debug")
        Console.error("error")
        Console.info("info")
        Console.trace("trace")
        Console.verbose("verbose")
        Console.warn("warn")
        Console.LOG_PRIORITY = Console.CRITICAL
        Console.log("only critical should display now")
        Console.critical("critical")
        Console.debug("debug")
    }
}
