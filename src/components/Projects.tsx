import { Project } from "./Project";

export const Projects = () => {
    return (
        <section className="py-10 text-center space-y-10">
            <Project>
                <Project.MainSection>
                    <Project.Title>PassTime</Project.Title>
                    <Project.ToolsList tools={["React", "NextJS", "TypeScript", "Material-ui", "Prisma", "GraphQL", "Apollo"]} />
                    <Project.DescriptionParagraph>
                        A time management app, based on recent research on productivity.
                    </Project.DescriptionParagraph>
                </Project.MainSection>
                <Project.VideoSection src="/passtime-low.mp4" alt="PassTime" />
            </Project>
            <Project>
                <Project.ImageSection src="/speed-painter-play-store.png" alt="Speed Painter" />
                <Project.MainSection>
                    <Project.Title>Speed Painter</Project.Title>
                    <Project.ToolsList tools={["React Native", "Styled Components"]} />
                    <Project.DescriptionParagraph>
                        A mobile game. Mix the colours to create the longest chain.
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>
        </section>
    );
};
