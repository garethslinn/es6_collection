"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
  function Todo(name) {
    _classCallCheck(this, Todo);

    this.name = name;
  }

  _createClass(Todo, [{
    key: "init",
    value: function init() {
      console.log('hello ' + this.name);
      this.config = {
        textInput: document.querySelector(".my-option"),
        itemContainer: document.querySelector("#itemContainer"),
        addButton: document.querySelector(".add")
      };

      this.todos = {
        title: 'this is a title',
        todo: ['a', 'b']
      };

      this.setup();
    }
  }, {
    key: "setup",
    value: function setup() {
      var _this = this;
      this.config.addButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (_this.config.textInput.value.length === 0) {
          console.log('empty');
        } else {
          console.log('not empty');
          _this.todos.todo.push([_this.config.textInput.value]);

          _this.render();
        }
      });
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.destroy();

      var _todos = this.todos,
          title = _todos.title,
          todo = _todos.todo;

      var html = "\n    <this.todos>\n      <header>\n        <h2>" + title + "</h2>\n      </header>\n      <section>\n        <ul id=\"items\">\n          " + todo.map(function (todo) {
        return "<li data-id=\"" + todo + "\">" + todo + "</li><a class=\"remove\" \nonclick=\"console.log( todo )\" href=\"#\">X</a>";
      }).join('\n') + " \n        </ul>\n      </section>\n    </this.todos>\n    ";

      document.getElementById("itemContainer").innerHTML = html;
    }
  }, {
    key: "remove",
    value: function remove() {
      console.log('num');
      //this.todos.todo.splice(num, 1);

    }
  }, {
    key: "destroy",
    value: function destroy() {
      document.getElementById("itemContainer").innerHTML = "";
    }
  }]);

  return Todo;
}();

var todo = new Todo('Slinn.');

todo.init();