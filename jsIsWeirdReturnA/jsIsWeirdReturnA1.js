// Return "a" using only characters below:
// +()[]=!

// ([]+([]==[])) becomes "false"
//      because [] == []  returns false
//      and [] + something returns this something as a string

// [+(!![])] becomes [1]
//      (!![]) becomes true because empty array it's an object, and convert
//             object to bool (!!) becomes true
//      + before bool convert it to 0 (false) or to 1 (true)

// "false"[1] === "a"

const jsIsWeirdReturnA = () => ([]+([]==[]))[+(!![])]

module.exports = jsIsWeirdReturnA;
