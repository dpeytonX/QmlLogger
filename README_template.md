QmlLogger
==============
<p>
Logging Utility (JavaScript) file for managing console output.

<p>
<h2>OVERVIEW</h2>
I created this project for the reason that QML does not provide a decent mechanism for managing output for debugging purposes. Therefore, developers may spend a significant amount of time trying to remove or comment verbose log messages. QmlLogger allows you to toggle the priority of log messages that appear in the console using the <code>LOG_LEVEL</code> constant. It provides standard Apache Log4J log levels from <code>VERBOSE</code> to <code>CRITICAL</code> which are inclusive of higher log levels.

<p>
<h2>NOTES</h2>
I have not verified the performance gains (or penalties) for using this util over straight console.log() logging. Therefore, use at your own discretion. Thanks!

<p>
This project is licensed under the MIT License.
<p>
https://github.com/prplmnky/QmlLogger.git

$$FOOTER$$
