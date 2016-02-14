# LCD Display

This code was taken from [3Quarks](http://www.3quarks.com) where it was published under Creative Commons 3.0 License. It originally took only text strings as input, using `setValue`. This did not work for my project, so I added a function to accept arbitrary digits, using `setDigits`.

This new function accepts an array, whose members should be `Digit`s, or single-character strings of `'#'` (for all coloured), `' '` (for blank), or `':'` or `'.'` for filled-in colons and points.

## Original docs:

 * Dokumentation: http://www.3quarks.com/de/Segmentanzeige
 * Documentation: http://www.3quarks.com/en/SegmentDisplay