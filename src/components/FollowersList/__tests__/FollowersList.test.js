import {render, screen, fireEvent} from '@testing-library/react';
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

describe('FollowersList', () => {
    function setUpFollowersList() {
        return render(
            <BrowserRouter>
                <FollowersList/>
            </BrowserRouter>
        );
    }

    beforeEach(() => setUpFollowersList());

    it('should view the component correctly', function () {
        
    });
});