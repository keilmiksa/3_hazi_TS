import "./decorators/logAddition";
import { TodoItem } from "./models/todoItem.js";
import { TodoList } from "./services/todoList.js";

const todoList = new TodoList<string | { message: string; dueDate: Date }>();

todoList.addItem({ item: new TodoItem(1, "Tanulás") });

todoList.listItems();