interface AppBarProps {
    currentPath: string;
}

export const AppBar = ({ currentPath }: AppBarProps) => {
    const getLinkClass = (path: string, options?: { exact: boolean }) => {
        const isActive = options?.exact ? currentPath === path : currentPath.startsWith(path);
        return isActive ? "relative text-black font-bold flex items-center justify-center h-full px-1 xs:px-2 sm:px-4 text-sm xs:text-base sm:text-base after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:rounded-tl-[4px] after:rounded-tr-[4px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-white rounded-sm" : "text-gray-500 hover:text-gray-700 flex items-center justify-center h-full px-1 xs:px-2 sm:px-4 text-xs 2xs:text-sm before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-white rounded-sm";
    };

    return (
        <div className="flex justify-center mt-0 xs:mt-0 sm:mt-8">
            <nav className="bg-white text-black py-0 px-4 xs:py-0 xs:px-4 sm:py-0 sm:px-6 sm:rounded-full shadow-md border border-gray-200 inline-block w-full sm:w-auto">
                <ul className="flex justify-center sm:justify-center h-12 sm:h-12">
                    <li className="h-full"><a href="/" className={`${getLinkClass("/", { exact: true })} text-center inline-block relative sm:min-w-[80px]`}>Home</a></li>
                    <li className="h-full"><a href="/portfolio" className={`${getLinkClass("/portfolio")} text-center inline-block relative sm:min-w-[100px]`}>Portfolio</a></li>
                    <li className="h-full"><a href="/cv" className={`${getLinkClass("/cv")} text-center inline-block relative sm:min-w-[70px]`}>CV</a></li>
                    <li className="h-full"><a href="/about" className={`${getLinkClass("/about")} text-center inline-block relative sm:min-w-[80px]`}>About</a></li>
                    <li className="h-full"><a href="/contact" className={`${getLinkClass("/contact")} text-center inline-block relative sm:min-w-[95px]`}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};
