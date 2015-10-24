/* */ 
(function(process) {
  var head = {
    task: void 0,
    next: null
  };
  var tail = head;
  var flushing = false;
  var requestFlush = void 0;
  var isNodeJS = false;
  function flush() {
    while (head.next) {
      head = head.next;
      var task = head.task;
      head.task = void 0;
      var domain = head.domain;
      if (domain) {
        head.domain = void 0;
        domain.enter();
      }
      try {
        task();
      } catch (e) {
        if (isNodeJS) {
          if (domain) {
            domain.exit();
          }
          setTimeout(flush, 0);
          if (domain) {
            domain.enter();
          }
          throw e;
        } else {
          setTimeout(function() {
            throw e;
          }, 0);
        }
      }
      if (domain) {
        domain.exit();
      }
    }
    flushing = false;
  }
  if (typeof process !== "undefined" && process.nextTick) {
    isNodeJS = true;
    requestFlush = function() {
      process.nextTick(flush);
    };
  } else if (typeof setImmediate === "function") {
    if (typeof window !== "undefined") {
      requestFlush = setImmediate.bind(window, flush);
    } else {
      requestFlush = function() {
        setImmediate(flush);
      };
    }
  } else if (typeof MessageChannel !== "undefined") {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    requestFlush = function() {
      channel.port2.postMessage(0);
    };
  } else {
    requestFlush = function() {
      setTimeout(flush, 0);
    };
  }
  function asap(task) {
    tail = tail.next = {
      task: task,
      domain: isNodeJS && process.domain,
      next: null
    };
    if (!flushing) {
      flushing = true;
      requestFlush();
    }
  }
  ;
  module.exports = asap;
})(require('process'));
