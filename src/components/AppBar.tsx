interface AppBarProps {
    currentPath: string;
}

export const AppBar = ({ currentPath }: AppBarProps) => {
    const getLinkClass = (path: string, options?: { exact: boolean }) => {
        const isActive = options?.exact ? currentPath === path : currentPath.startsWith(path);
        return isActive ? "relative text-black font-bold py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-white rounded-sm" : "text-gray-500 hover:text-gray-700 py-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-white rounded-sm";
    };

    return (
        <div className="flex justify-center mt-0 sm:mt-0 md:mt-8">
            <nav className="bg-white text-black py-2 px-4 sm:py-2 sm:px-4 md:py-4 md:px-6 md:rounded-full shadow-md border border-gray-200 inline-block w-full md:w-auto">
                <ul className="flex justify-center space-x-2 xs:space-x-4 sm:space-x-4 md:justify-center md:space-x-4">
                    <li><a href="/" className={`${getLinkClass("/", { exact: true })} text-center inline-block relative md:min-w-[60px]`}>Home</a></li>
                    <li><a href="/portfolio" className={`${getLinkClass("/portfolio")} text-center inline-block relative md:min-w-[80px]`}>Portfolio</a></li>
                    <li><a href="/cv" className={`${getLinkClass("/cv")} text-center inline-block relative md:min-w-[50px]`}>CV</a></li>
                    <li><a href="/about" className={`${getLinkClass("/about")} text-center inline-block relative md:min-w-[60px]`}>About</a></li>
                    <li><a href="/contact" className={`${getLinkClass("/contact")} text-center inline-block relative md:min-w-[70px]`}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};
