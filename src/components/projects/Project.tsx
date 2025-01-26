interface ProjectProps {
    children: React.ReactNode;
}

export const Project = ({ children }: ProjectProps) => {
    return (
        <div className="p-4 border rounded shadow flex gap-4 text-left">
            {children}
        </div>
    );
};

Project.MainSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex-grow">{children}</section>
    );
}

Project.ImageSection = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div
            className="w-[300px] max-w-1/3 border rounded shadow shrink-0"
            style={{ maxWidth: "40%" }}
        >
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}

Project.VideoSection = ({ src }: { src: string }) => {
    return (
        <div
            className="w-[400px] border rounded shadow shrink-0"
            style={{ maxWidth: "40%" }}
        >
            <video src={src} className="w-full" autoPlay muted loop />
        </div>
    );
}

Project.Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="text-2xl font-semibold">{children}</h3>
    );
}

Project.DescriptionParagraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="mt-2">{children}</p>
    );
}

Project.ToolsList = ({ tools }: { tools: string[] }) => {
    return (
        <p className="mt-2">Built with {tools.join(", ")}</p>
    );
}
