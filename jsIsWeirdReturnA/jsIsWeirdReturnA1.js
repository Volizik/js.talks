// Return "a" using only characters below:
// +()[]=!

// ([]+([]==[])) returns "false"
//      because [] == []  returns false
//      and [] + something returns this something as a string
// [+(!![])] returns [1]
//      (!![]) becomes true because empty array it's an object, and convert object to bool (!!) becomes true
//      + before bool convert it to 0 (false) or to 1 (true)
const jsIsWeirdReturnA = () => ([]+([]==[]))[+(!![])]

module.exports = jsIsWeirdReturnA;
