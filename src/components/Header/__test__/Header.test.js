import { render, screen } from '@testing-library/react';
import Header from "../Header";

test('should render the same text', () => {
    render(<Header title="Todo"/>);
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
    render(<Header title="Todo"/>);
    let headingElement = screen.getByTitle('header');
    expect(headingElement).toBeInTheDocument();
});

test('should render the same text by another get Method', () => {
    render(<Header title="Todo"/>);
    let headingElement = screen.getByTestId('Header_Element');
    expect(headingElement).toBeInTheDocument();
});

// Find by syntax

test('should render the same text with Find By syntax', async () => {
    render(<Header title="Todo"/>);
    let headingElement = await screen.findByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

//Query By Syntax

test('should render the same text with query by syntax', () => {
    render(<Header title="Todo"/>);
    let headingElement = screen.queryByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

test('should render the same text with query by syntax', () => {
    render(<Header title="Todo"/>);
    let headingElement = screen.queryByText(/todos/i);
    expect(headingElement).not.toBeInTheDocument();
});