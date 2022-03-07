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

    it("it should render the correct amount of tasks", () => {
        setUpRenderTodoFooter(5);
        let element = screen.getByTitle(/5 tasks left/im);
        expect(element).toBeInTheDocument();
    });
});