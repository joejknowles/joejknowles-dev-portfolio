interface ExperienceProps {
    children: React.ReactNode;
}

export const Experience = ({ children }: ExperienceProps) => {
    return (
        <div className="p-4 border rounded shadow flex gap-4 text-left items-start">
            {children}
        </div>
    );
};

Experience.MainSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex-grow flex flex-col self-stretch">{children}</section>
    );
}

Experience.ImageSection = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div
            className="w-[400px] border rounded shadow shrink-0 overflow-hidden"
            style={{ maxWidth: "40%" }}
        >
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}

Experience.VideoSection = ({ src }: { src: string }) => {
    return (
        <div
            className="w-[400px] border rounded shadow shrink-0 overflow-hidden"
            style={{ maxWidth: "40%" }}
        >
            <video src={src} className="w-full" autoPlay muted loop />
        </div>
    );
}

Experience.Title = ({ children, href }: { children: React.ReactNode, href?: string }) => {
    return (
        <a
            href={href}
            className="text-xl text-blue-700 font-semibold mr-2 hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

Experience.DescriptionParagraph = ({
    children,
    ...rest
}: {
    children: React.ReactNode,
    style?: React.CSSProperties
}) => {
    return (
        <p className="mt-2" {...rest}>{children}</p>
    );
}

Experience.ToolsList = ({ tools }: { tools: string[] }) => {
    return (
        <p className="mt-1 text-gray-500 italic">{tools.join(", ")}</p>
    );
}

Experience.HeadingSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-xl">
            {children}
        </div>
    );
}

Experience.Location = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 font-semibold mr-2">– {children}</span>
    );
}

Experience.Date = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 mr-2">{children}</span>
    );
}

Experience.JobTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 italic mr-2">{children}</span>
    );
}
