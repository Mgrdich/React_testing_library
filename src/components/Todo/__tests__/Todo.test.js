import {render, screen, fireEvent} from '@testing-library/react';
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";

describe('Todo', () => {
    function setUpRenderTodo() {
        return render(
            <BrowserRouter>
                <Todo/>
            </BrowserRouter>
        );
    }

    /**
     * @param {String | String[]} task
     * */
    function addTask(task) {
        let tasks = [];

        if (typeof task === 'string') {
            tasks.push(task);
        } else if(Array.isArray(task)) {
            tasks = task;
        }

        tasks.forEach(function (item) {
            fireEvent.change(inputElement , {
                target: {value: item}
            });
            fireEvent.click(buttonElement);
        });
    }

    let inputElement
    let buttonElement

    beforeEach(() => {
        setUpRenderTodo();
        inputElement = screen.getByTestId('todo_input');
        buttonElement = screen.getByTestId('add_btn');
    });

    it('should render everything correctly', () => {
        expect(inputElement).toBeVisible();
        expect(buttonElement).toBeVisible();
    });

    it('should add the element to Todo after click the element', () => {
        let value = 'Buy some stuff';
        addTask(value);

        let taskInTodoElement = screen.getByText(value);

        expect(taskInTodoElement).toBeInTheDocument();
    });

    it('should add multiple elements to the Todo after click the element', () => {
        addTask(['Buy Stuff', 'Sell Stuff']);

        let elements = screen.getAllByTestId('todo_task');
        expect(elements.length).toBe(2);
    });

    it('should view the right number of content during initial render', () => {
        addTask(['Buy Stuff', 'Sell Stuff']);

        let elements = screen.getAllByTestId('todo_task');
        expect(elements.length).toBe(2);
    });

    it('should not view the styling changes after click on a Todo', () => {
        addTask('Buy Stuff');

        let elements = screen.getByTestId('todo_task');
        expect(elements).not.toHaveClass('todo-item-active')
    });

    it('should have view the styling changes after click on a Todo', () => {
        addTask('Buy Stuff');

        let element = screen.getByTestId('todo_task');
        fireEvent.click(element);
        expect(element).toHaveClass('todo-item-active');
    });

    it('should toggle between classes when ckic', () => {
        addTask('Buy Stuff');

        let element = screen.getByTestId('todo_task');
        fireEvent.click(element);
        expect(element).toHaveClass('todo-item-active');

        fireEvent.click(element);
        expect(element).not.toHaveClass('todo-item-active');
    });
});