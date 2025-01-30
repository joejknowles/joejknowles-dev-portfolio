import React from "react";

interface ExperienceProps {
    children: React.ReactNode;
}

export const Experience = ({ children }: ExperienceProps) => {
    const childrenArray = React.Children.toArray(children);
    const isImageSectionFirst = (childrenArray[0] as any).type === Experience.ImageSection || (childrenArray[0] as any).type === Experience.VideoSection;
    return (
        <div className={
            `p-0 sm:p-4 border rounded shadow flex ${isImageSectionFirst ? "flex-col" : "flex-col-reverse"} sm:flex-row sm:gap-4 text-left items-start overflow-hidden`}>
            {children}
        </div>
    );
};

Experience.MainSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="p-4 sm:p-0 flex-grow flex flex-col self-stretch">{children}</section>
    );
}

Experience.ImageSection = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div className="w-full sm:w-[400px] sm:border sm:rounded sm:shadow sm:shrink-0 sm:overflow-hidden sm:max-w-[40%]">
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}

Experience.VideoSection = ({ src }: { src: string }) => {
    return (
        <div className="w-full sm:w-[400px] sm:border sm:rounded sm:shadow sm:shrink-0 sm:overflow-hidden sm:max-w-[40%]">
            <video src={src} className="w-full" autoPlay muted loop />
        </div>
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

Experience.List = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ul className="mt-2 list-disc ml-3">{children}</ul>
    );
}

Experience.Item = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <li className="">{children}</li>
    );
}

Experience.ToolsList = ({ tools }: { tools: string[] }) => {
    return (
        <p className="mt-1 text-gray-500 italic">{tools.join(", ")}</p>
    );
}

Experience.HeadingSection = ({ children }: { children: React.ReactNode }) => {
    const childrenArray = React.Children.toArray(children);
    const childrenWithSpacing = childrenArray.reduce((acc: React.ReactNode[], child, index) => {
        if (index === 0) {
            return [child];
        }
        return [...acc, " ", child];
    }, [] as React.ReactNode[]);
    return (
        <div className="text-xl">
            {childrenWithSpacing}
        </div>
    );
}


Experience.Title = ({ children, href }: { children: React.ReactNode, href?: string }) => {
    return (
        <a
            href={href}
            className="text-xl text-blue-700 font-semibold hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

Experience.Location = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 font-semibold whitespace-nowrap">
            <span className="hidden xs:inline">– </span>{children}
        </span>
    );
}

Experience.Date = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 whitespace-nowrap">{children}</span>
    );
}

Experience.JobTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-gray-500 italic whitespace-nowrap">{children}</span>
    );
}
