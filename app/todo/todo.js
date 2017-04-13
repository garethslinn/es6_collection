class Todo {
  constructor(name) {
    this.name = name;
  }

  init() {
    console.log('hello ' + this.name);
    this.config = {
      textInput: document.querySelector(".my-option"),
      itemContainer: document.querySelector("#itemContainer"),
      addButton: document.querySelector(".add")
    };

  this.todos = {
    title: 'this is a title',
    todo: ['a','b']
  };

    this.setup();
  }

  setup() {
    let _this = this;
    this.config.addButton.addEventListener('click', function(e) {
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

  render() {
    this.destroy();

    const  {title,todo} = this.todos;
    var html = `
    <this.todos>
      <header>
        <h2>${title}</h2>
      </header>
      <section>
        <ul id="items">
          ${todo.map(todo => `<li data-id="${todo}">${todo}</li><a class="remove" 
onclick="console.log( todo )" href="#">X</a>`).join('\n')} 
        </ul>
      </section>
    </this.todos>
    `;



    document.getElementById("itemContainer").innerHTML= html;


  }

  remove() {
    console.log('num')
    //this.todos.todo.splice(num, 1);


  }

  destroy() {
    document.getElementById("itemContainer").innerHTML="";
  }

}

let todo = new Todo('Slinn.');

todo.init();



