import {render, screen} from '@testing-library/react';
import TodoFooter from "../TodoFooter";
import {BrowserRouter} from "react-router-dom";

describe('TodoFooter', () => {
    /**
     * @param num {Number}
     * */
    function setUpRenderTodoFooter(num) {
        return render(
            <BrowserRouter>
                <TodoFooter numberOfIncompleteTasks={num}/>
            </BrowserRouter>
        );
    }

    describe('TodoFooter with multiple Tasks', () => {
        beforeEach(() => setUpRenderTodoFooter(5));

        it("it should render show that element exist", () => {
            let element = screen.getByTestId("task_number_indicator");
            expect(element).toBeInTheDocument();
        });

        it("it should view correct number of tasks", () => {
            let element = screen.getByText(/5 tasks left/i);
            expect(element).toBeInTheDocument();
        });
    });

    describe('TodoFooter with single Task', () => {
        beforeEach(() => setUpRenderTodoFooter(1));

        it("it should view correct number of task", () => {
            let element = screen.getByText(/1 task left/i);
            expect(element).toBeInTheDocument();
        });

        it("it should view should be visible in the Document", () => {
            let element = screen.getByText(/1 task left/i);
            expect(element).toBeVisible();
        });

        it("it should view should contain in the Document", () => {
            let element = screen.getByText(/1 task left/i);
            expect(element).toContainHTML('p');
        });

        it("it should view should contain in the Document", () => {
            let element = screen.getByTestId("task_number_indicator");
            expect(element).toHaveTextContent('1 task left');
        });

        it("it should view should contain in the Document", () => {
            let element = screen.getByTestId("task_number_indicator");
            expect(element.textContent).toBe('1 task left');
        });
    });
});