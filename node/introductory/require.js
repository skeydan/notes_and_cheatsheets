require("./exports.js")

// node require.js prints
/* ()
{ answer: 42 }
{ answer: 42 }
 */

// -> we get exports.js' module.exports == exports

// these do not do anything because of module caching
require("./exports.js")
require("./exports.js")

// creating a closure instead does result in repeated output
require("./exports-closure.js")() // call function
/* {}
{ answer: 42 }
{ answer: 42 }
hello
*/

require("./exports-closure.js")()
/* {}
{ answer: 42 }
{ answer: 42 }
hello
hello
*/

require("./exports-object.js").f1();
// hi