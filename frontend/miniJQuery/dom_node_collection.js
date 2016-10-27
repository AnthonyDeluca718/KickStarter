class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  each(callBack) {
    if (this.array.length === 0) {
      return -1;
    }
    this.array.forEach(callBack);
  }

  html(string) {
    if (string === undefined && this.array.length > 0 ) {
      return this.array[0].innerHTML;
    } else if (typeof string === "string"){
      this.each( (el) => {
        el.innerHTML = string;
      });
    } else {
      return -1;
    }
  }

  empty() {
    this.each( (el ) => {
      el.innerHTML = "";
    });
    this.array = [];
  }

  append(arg) {
    if (arg instanceof DOMNodeCollection) {
      arg.each( (child) => {
        this.each( (el) => {
          el.appendChild(child.cloneNode(true));
        });
      });
    } else if (arg instanceof HTMLElement){
      this.each( (el) => {
        el.appendChild(arg.cloneNode(true));
      });
      // arg.parentNode.removeChild(arg);
    } else if (typeof arg === "string"){
      this.each( (el) => {
        el.innerHTML += arg;
      });
    } else {
      return -1;
    }
  }

  addClass(newClass){
    this.each( (el) => {
      el.classList.add(newClass);
    });
  }

  removeClass(oldClass) {
    this.each( (el) => {
      el.classList.remove(oldClass);
    });
  }

  toggleClass(newClass) {
    this.array.each( (el) => {
      el.classList.toggle(oldClass);
    });
  }

  children() {
    let childArr = [];
    this.each( (child) => {
      childArr = childArr.concat(Array.from(child.children));
    });
    return new DOMNodeCollection(childArr);
  }

  parents() {
    let parentArr = [];
    this.each( (el) => {
      let parent = el.parentNode;
      if (!parentArr.includes(parent)) {
        parentArr.push(parent);
      }
    });

    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let results = [];
    this.array.each( (el) => {
      results = results.concat(Array.from(el.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(results);
  }

  remove() {
    this.each( (el) => {
      el.parentNode.removeChild(el);
    });

    this.array = [];
  }

  on(e, callback) {
    this.each( (el) => {
      el.addEventListener(e, callback);
      const k = `miniJQ-${e}`;
      if (el[k] === undefined) {
        el[k] = [];
      }
      el[k].push(callback);
    });
  }

  off(e) {
    this.each( (el) => {
      const k = `miniJQ-${e}`;
      if (el[k] && el[k].length > 0 ) {
        el[k].forEach(callback => {
          el.removeEventListener(e, callback);
        });
        el[k] = [];
      }
    });
  }

  attr(key, value) {
    if (value === undefined) {
      if (this.array.length === 0) {
        return -1;
      } else {
        return this.array[0].getAttribute(key);
      }
    } else {
      this.each( (el) => {
        el.setAttribute(key, value);
      });
    }
  }

  data(key, value) {
    if (value === undefined) {
      if (this.array.length === 0) {
        return -1;
      } else {
        return JSON.parse(this.array[0].getAttribute(key));
      }
    } else {
      this.each( (el) => {
        el.setAttribute(key, JSON.stringify(value) );
      });
    }
  }

  get(ind) {
    let el = this.arr[ind];
    if (el) {
      return el;
    } else {
      return -1;
    }
  }

  first() {
    return this.get(0);
  }
}

module.exports = DOMNodeCollection;
