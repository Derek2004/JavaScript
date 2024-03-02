/**
 * initial_model is a simple JavaScript Object with two keys and no methods.
 * it is used both as the "initial" model when mounting the Todo List App
 * and as the "reset" state when all todos are deleted at once.
 */
var initial_model = {
    todos: [], // empty array which we will fill shortly
    hash: "#/" // the hash in the url (for routing)
  }
  
  /* module.exports is needed to run the functions using Node.js for testing! */
  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      model: initial_model
    }
  }