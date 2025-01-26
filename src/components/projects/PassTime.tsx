import { Project } from "./Project";

export const PassTime = () => {
    return (
        <Project>
            <Project.MainSection>
                <Project.Title>PassTime</Project.Title>
                <Project.ToolsList tools={["React", "NextJS", "TypeScript", "Material-ui", "Prisma", "GraphQL", "Apollo"]} />
                <Project.DescriptionParagraph>
                    A time management app, based on recent research on productivity.
                </Project.DescriptionParagraph>
            </Project.MainSection>
            <Project.VideoSection src="/passtime-low.mp4" />
        </Project>
    );
};
