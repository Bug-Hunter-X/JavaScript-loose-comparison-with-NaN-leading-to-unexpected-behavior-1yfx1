# JavaScript Loose Comparison with NaN Bug
This repository demonstrates a common JavaScript bug related to loose comparison (==) and the handling of NaN (Not a Number) values.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

The bug arises from the incorrect use of loose comparison to check for null or undefined. This fails to correctly identify NaN, which is not equal to null using loose comparison, even though it is often treated similarly for null-checks.