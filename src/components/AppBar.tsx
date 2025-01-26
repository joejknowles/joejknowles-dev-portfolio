interface AppBarProps {
    currentPath: string;
}

export const AppBar = ({ currentPath }: AppBarProps) => {
    const getLinkClass = (path: string) => {
        return currentPath === path ? "" : "text-gray-300 hover:text-gray-400";
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center space-x-4">
                <li><a href="/" className={getLinkClass("/")}>Home</a></li>
                <li><a href="/portfolio/" className={getLinkClass("/portfolio/")}>Portfolio</a></li>
                <li><a href="/cv/" className={getLinkClass("/cv/")}>CV</a></li>
                <li><a href="/about/" className={getLinkClass("/about/")}>About</a></li>
                <li><a href="/contact/" className={getLinkClass("/contact/")}>Contact</a></li>
            </ul>
        </nav>
    );
};
