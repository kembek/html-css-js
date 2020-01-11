enum todoStatus {
  complete,
  ignore,
  current
}

class Todo {
  id: number;
  title: string;
  status: number;
}

class TodoList {
  list: Array<Todo> = [];

  add(todo: Todo): Todo {
    const tmp = this.list.push(todo);

    return this.list[tmp];
  }

  remove(idx: number): void {
    const s = this.list.splice(idx, 1);
  }

  all(): Todo[] {
    return Array.from(this.list);
  }
}

const todayTodo = new TodoList();
const wayUp = new Todo();
wayUp.id = 1;
wayUp.title = "Проснуться";
wayUp.status = todoStatus.complete;

const washTeas = new Todo();
washTeas.id = 2;
washTeas.title = "Помыть зубы";
washTeas.status = todoStatus.current;

const someTodo = new Todo();
someTodo.id = 3;
someTodo.title = "La la la";
someTodo.status = todoStatus.ignore;

todayTodo.add(wayUp);
todayTodo.add(washTeas);
todayTodo.add(someTodo);

todayTodo.all().forEach(t => {
  console.log(t.title);
});

todayTodo.remove(2);

todayTodo.all().forEach(t => {
  console.log(t.title);
});
