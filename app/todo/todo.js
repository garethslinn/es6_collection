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
    todo: [
      {
        id: 0,
        item: 'a'
      },
      {
        id: 1,
        item: 'b'
      }
    ]
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
    let i = 0;

    console.log(this.todos);

    var html = `
    <this.todos>
      <header>
        <h2>${title}</h2>
      </header>
      <section>
        <ul id="items">
          ${todo.map(todo => `<li data-id="${todo.id}">${todo.item}</li><a class="remove" 
onclick="this.destroy(${todo.id})" href="#">X</a>`).join('\n')} 
        </ul>
      </section>
    </this.todos>
    `;



    document.getElementById("itemContainer").innerHTML= html;


  }

  remove(num) {
    alert('remove');
    this.destory();
    //console.log('num');
    //this.todos.todo.splice(num, 1);
    //this.render();

  }

  destroy() {
    document.getElementById("itemContainer").innerHTML="";
  }

}

let todo = new Todo('Slinn.');

todo.init();



