import {render, screen, fireEvent, getAllByText} from '@testing-library/react';
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
                target : { value:`${value}${i}` }
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
        fireEvent.change(inputElement , {
           target : { value }
        });
        fireEvent.click(buttonElement);

        let taskInTodoElement = screen.getByText(value);

        expect(taskInTodoElement).toBeInTheDocument();
    });

    it('should add multiple elements to the Todo after click the element', () => {
        let value = 'Buy some stuff';
        for (let i = 0; i < 3; i++) {
            fireEvent.change(inputElement , {
                target : { value:`${value}${i}` }
            });
            fireEvent.click(buttonElement);
        }

        let regex = new RegExp(value , 'i');
        // let elements = getAllByText(regex);
        //
        //
        // expect(elements).toBeInTheDocument();
    });
});