import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from "../AddInput";


const mockedSetTodo = jest.fn();

describe('Add Input', () => {

    let inputElement;

    beforeEach(() => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo}/>);
        inputElement = screen.getByTestId("todo_input");
    });

    it('should render input Element', () => {
        expect(inputElement).toBeVisible();
    });

    it('should render input Element and change should be triggered', () => {
        let value = 'Buy clothes';
        fireEvent.change(inputElement, {
            target : {
                value : value
            }
        });
        expect(inputElement.value).toBe(value);
    });

    it('should render input Element and change and emptied by the button', () => {
        let value = 'Buy clothes';
        fireEvent.change(inputElement, {
            target : {
                value : value
            }
        });

        expect(inputElement.value).toBe(value);

        let buttonElement = screen.getByTestId('add_btn');
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBeFalsy();
    });
});