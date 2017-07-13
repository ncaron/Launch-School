var findObjs = function(element, props, multiple) {
  var match = multiple ? [] : undefined;

  element.some(function(obj) {
    var allMatch = true;

    for (var prop in props) {
      if (!(prop in obj) || obj[prop] !== props[prop]) {
        allMatch = false;
      }
    }

    if (allMatch) {
      if (multiple) {
        match.push(obj);
      } else {
        match = obj;
        return true;
      }
    }
  });

  return match;
}

var _ = function(element) {
  u = {
    last: function() {
      return element[element.length - 1];
    },
    first: function() {
      return element[0];
    },
    without: function() {
      var args = Array.prototype.slice.call(arguments);

      return element.filter(function(el) {
        if (args.indexOf(el) === -1) {
          return el;
        }
      });
    },
    lastIndexOf: function(value) {
      var lastIndex = -1;

      for (i = element.length - 1; i >= 0; i -= 1) {
        if (element[i] === value) {
          lastIndex = i;
          break;
        }
      }

      return lastIndex;
    },
    sample: function(quantity) {
      var sampled = [];
      var copy = element.slice();
      var i;

      var getRandom = function() {
        var index = Math.floor(Math.random() * copy.length);
        var el = copy[index];

        copy.splice(index, 1);

        return el;
      };

      if (!quantity) {
        return getRandom();
      }

      while (quantity) {
        sampled.push(getRandom());
        quantity -= 1;
      }

      return sampled;
    },
    findWhere: function(props) {
      return findObjs(element, props, false);
    },
    where: function(props) {
      return findObjs(element, props, true);
    },
    pluck: function(query) {
      var values = [];

      element.forEach(function(obj) {
        if (obj[query]) {
          values.push(obj[query]);
        }
      });

      return values;
    },
    keys: function() {
      var keys = [];

      for (var prop in element) {
        keys.push(prop);
      }

      return keys;
    },
    values: function() {
      var values = [];

      for (var prop in element) {
        values.push(element[prop]);
      }

      return values;
    },
    pick: function() {
      var args = Array.prototype.slice.call(arguments);
      var newObj = {};

      args.forEach(function(prop) {
        if (prop in element) {
          newObj[prop] = element[prop];
        }
      });

      return newObj;
    },
    omit: function() {
      var args = Array.prototype.slice.call(arguments);
      var newObj = {};

      for (var prop in element) {
        if (args.indexOf(prop) === -1) {
          newObj[prop] = element[prop];
        }
      }

      return newObj;
    },
    has: function(prop) {
      return {}.hasOwnProperty.call(element, prop);
    }
  };

  (['isElement', 'isArray', 'isObject', 'isFunction', 'isBoolean', 'isString', 'isNumber']).forEach(function(method) {
    u[method] = function() {
      _[method].call(u, element);
    }
  });

  return u;
};

_.range = function(start, end) {
  var range = [];
  var i;

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (i = start; i < end; i += 1) {
    range.push(i);
  }

  return range;
}

_.extend = function() {
  var args = Array.prototype.slice.call(arguments);
  var oldObj = args.pop();
  var newObj = args[args.length - 1];

  for (var prop in oldObj) {
    newObj[prop] = oldObj[prop];
  }

  return args.length === 1 ? newObj : _.extend.apply(_, args);
};

_.isElement = function(obj) {
  return obj && obj.nodeType === 1
};

_.isArray = Array.isArray || function(obj) {
  return toString.call(obj) === '[object Array]';
};

_.isObject = function(obj) {
  var type = typeof obj;

  return type === 'function' || type === 'object' && !!obj;
};

_.isFunction = function(obj) {
  var type = typeof obj;

  return type === 'function';
};

(['Boolean', 'String', 'Number']).forEach(function(method) {
  _['is' + method] = function(obj) {
    return toString.call(obj) === '[object ' + method + ']';
  }
});