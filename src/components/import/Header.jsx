function Header() {
    return (
        <header>
            <div className="flex py-2 px-4 items-center justify-between border-b">
                <h1>ToDolist</h1>
                <div>
                    <nav>
                        <ul>
                            <li>Connexion</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export { Header };