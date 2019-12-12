// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.register = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.register[eventName]) {
      this.register[eventName].push(callback);
    } else {
      this.register[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.register[eventName]) {
      this.register[eventName].forEach(cb => {
        cb();
      });
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.register[eventName]) {
      delete this.register[eventName];
    }
  }
}

module.exports = Events;
