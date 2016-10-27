const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(selector) {
  let arr;
  let regHTML = /^<|>$>/ ;

  if ( typeof selector === "function" ) {
    document.addEventListener("DOMContentLoaded", selector);
    return 1; //we don't want to return any collection
  } else if ( typeof selector === "string" && regHTML.test(selector) ) {
    var d = document.createElement('div');
    d.innerHTML = selector;
    arr = [d.firstChild];
    d = null;
  } else if( selector instanceof HTMLElement) {
    arr = [selector];
  }else if (typeof selector === "string" ) {
    arr = Array.from(document.querySelectorAll(selector));
  } else {
    return -1;
  }
  return new DOMNodeCollection(arr);
};

$l.extend = function(target, ...sources) {
  Object.assign(target, ...sources);
  return target;
};

function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += encodeURI(prop + '=' + object[prop]);
        }
    }
    return encodedString;
}

    // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
$l.ajax = (options) => {
  const request = new XMLHttpRequest();
  const defaults = {
    method: "GET",
    url: "",
    success: () => {},
    error: () => {},
    data: {},
    processData: true,
    contentType: 'application/json'
  };
  options = $l.extend(defaults, options);
  options.method = options.method.toUpperCase();

  if (options.method === "GET"){
    options.url += "?" + toQueryString(options.data);
  }

  request.open(options.method, options.url, true);

  //automatically add csrf tokens
  const csrfToken = $l('meta[name=csrf-token]').attr('content');
  if (csrfToken) {
    request.setRequestHeader('X-CSRF-Token', csrfToken);
  }

  if (options.contentType) {
    request.setRequestHeader('Content-Type', options.contentType);
  }

  request.onload = e => {
    if (request.status === 200) {
      options.success(JSON.parse(request.response));
    } else {
      options.error(JSON.parse(request.response));
    }
  };

  if (options.processData) {
    request.send(JSON.stringify(options.data));
  } else {
    request.send(options.data);
  }
};

const toQueryString = function(obj) {
  let result = "";
  for(let prop in obj){
    if (obj.hasOwnProperty(prop)){
      result += prop + "=" + obj[prop] + "&";
    }
  }
  return result.substring(0, result.length - 1);
};
