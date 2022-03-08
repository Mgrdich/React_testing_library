import {render, screen} from '@testing-library/react';
import Header from "../Header";


describe('Header', () => {
    // mostly repetition for learning purposes
    beforeEach(() => render(<Header title="Todo"/>));

    test('should render the same text', () => {
        let headingElement = screen.getByText(/todo/i);
        expect(headingElement).toBeInTheDocument();
    });

    // test('should render the same text by another Selector method', () => {
    //     render(<Header title="myElement"/>);
    //     // let headingElement = screen.getByRole('heading', {name:/myElement/i});
    //     let headingElement = screen.getByRole('heading', {name:"myElement"});
    //     expect(headingElement).toBeInTheDocument();
    // });

    test('should render the same text by another get Method', () => {
        let headingElement = screen.getByTitle('header');
        expect(headingElement).toBeInTheDocument();
    });

    test('should render the same text by another get Method', () => {
        let headingElement = screen.getByTestId('Header_Element');
        expect(headingElement).toBeInTheDocument();
    });

    // Find by syntax

    test('should render the same text with Find By syntax', async () => {
        let headingElement = await screen.findByText(/todo/i);
        expect(headingElement).toBeInTheDocument();
    });

    //Query By Syntax

    test('should render the same text with query by syntax', () => {
        let headingElement = screen.queryByText(/todo/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('should render the same text with query by syntax', () => {
        let headingElements = screen.getAllByRole("heading");
        expect(headingElements.length).toBe(2);
    });
})
