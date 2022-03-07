import { render, screen } from '@testing-library/react';
import Header from "../Header";

test('should render the same text', () => {
    render(<Header title="Todo"/>);
    let headingElement = screen.getByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
});

test('should render the same text by another Selector method', () => {
    render(<Header title="myElement"/>);
    let headingElement = screen.getByRole('heading', {name:"myElement"});
    expect(headingElement).toBeInTheDocument();
});

test('should render the same text by another get Method', () => {
    render(<Header title="Todo"/>);
    let headingElement = screen.getByTitle('header')
    expect(headingElement).toBeInTheDocument();
});

