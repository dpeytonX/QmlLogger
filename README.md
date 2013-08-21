QmlLogger
==============

Logging Utility (JavaScript) file for managing console output.

OVERVIEW
I created this project for the reason that QML does not provide a decent mechanism for managing output for debugging purposes. Therefore, developers may spend a significant amount of time trying to remove or comment verbose log messages. QmlLogger allows you to toggle the priority of log messages that appear in the console using the <pre>LOG_LEVEL</pre> constant. It provides standard Apache Log4J log levels from VERBOSE to CRITICAL which are inclusive of higher log levels.

NOTES
I have not verified the performance gains (or penalties) for using this util over straight console.log() logging. Therefore, use at your own discretion. Thanks!


This project is licensed under the MIT License.

https://github.com/prplmnky/QmlLogger.git
