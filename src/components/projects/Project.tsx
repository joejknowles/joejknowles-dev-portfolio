import React from "react";

interface ProjectProps {
    children: React.ReactNode;
}

export const Project = ({ children }: ProjectProps) => {
    const childrenArray = React.Children.toArray(children);
    const isImageSectionFirst = (childrenArray[0] as any).type === Project.ImageSection || (childrenArray[0] as any).type === Project.VideoSection;
    return (
        <div className={
            `p-0 sm:p-4 border rounded shadow flex ${isImageSectionFirst ? "flex-col" : "flex-col-reverse"} sm:flex-row sm:gap-4 text-left items-start overflow-hidden`}>
            {children}
        </div>
    );
};

Project.MainSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="p-4 sm:p-0 flex-grow flex flex-col self-stretch">{children}</section>
    );
}

Project.ImageSection = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div className="w-full sm:w-[400px] sm:border sm:rounded sm:shadow sm:shrink-0 sm:overflow-hidden sm:max-w-[40%]">
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}

Project.VideoSection = ({ src }: { src: string }) => {
    return (
        <div className="w-full sm:w-[400px] sm:border sm:rounded sm:shadow sm:shrink-0 sm:overflow-hidden sm:max-w-[40%]">
            <video src={src} className="w-full" autoPlay muted loop />
        </div>
    );
}

Project.Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="text-2xl font-semibold">{children}</h3>
    );
}

Project.DescriptionParagraph = ({
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

Project.ToolsList = ({ tools }: { tools: string[] }) => {
    return (
        <p className="mt-1 text-gray-500 italic">Built with {tools.join(", ")}</p>
    );
}
