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

    it("it should render show that element exist", () => {
        setUpRenderTodoFooter(5);
        let element = screen.getByTestId("task_number_indicator");
        expect(element).toBeInTheDocument();
    });

    it("it should view correct number of tasks", () => {
        setUpRenderTodoFooter(5);
        let element = screen.getByText(/5 tasks left/i);
        expect(element).toBeInTheDocument();
    });
});