import {render, screen, fireEvent} from '@testing-library/react';
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";
import {act} from "react-dom/test-utils";

describe('FollowersList', () => {
    function setUpFollowersList() {
        return render(
            <BrowserRouter>
                <FollowersList/>
            </BrowserRouter>
        );
    }


    const waitForComponentToPaint = async function (wrapper)  {
        await act(async function () {
            await new Promise(resolve => setTimeout(resolve));
            wrapper.update();
        });
    };

    beforeEach(() => {
        setUpFollowersList();
    });

    it('should view the component and its first element correctly', async () => {
        let firstFollowerElement = await screen.findByTestId('follower-item-0');
        expect(firstFollowerElement).toBeInTheDocument();
    });


        // it('should view the component and all its children', async () => {
        //     let firstFollowerElements = await screen.findAllByTestId(/follower-item/i);
        //     expect(firstFollowerElements.length).toBe(5);
        // });
});