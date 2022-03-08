import "./Header.css";

export default function Header({
    title
}) {
    return (
        <>
            <h3>Something</h3>
            <h1 className="header" title="header" data-testid="Header_Element">{title}</h1>
        </>
    )
}
