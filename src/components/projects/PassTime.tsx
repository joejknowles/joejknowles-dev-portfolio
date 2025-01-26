import { Project } from "./Project";

export const PassTime = () => {
    return (
        <Project>
            <Project.MainSection>
                <Project.Title>PassTime</Project.Title>
                <Project.ToolsList tools={["React", "NextJS", "TypeScript", "Material-ui", "Prisma", "GraphQL", "Apollo"]} />
                <Project.DescriptionParagraph>
                    A time management app, based on some recent research on productivity:
                    if you decide <em>when</em> you're going to do something, you're
                    much more likely to actually do it, than if you just add it to a 'to-do'
                    list and forget about it.
                </Project.DescriptionParagraph>
            </Project.MainSection>
            <Project.VideoSection src="/passtime-low.mp4" />
        </Project>
    );
};
