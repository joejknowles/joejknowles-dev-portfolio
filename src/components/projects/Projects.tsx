import { Project } from "./Project";
import { PassTime } from "./PassTime";

export const Projects = () => {
    return (
        <section className="px-10 py-10 text-center space-y-10 max-w-4xl mx-auto">
            <PassTime />
            <Project>
                <Project.ImageSection src="/speed-painter-play-store.png" alt="Speed Painter" />
                <Project.MainSection>
                    <Project.Title>Speed Painter</Project.Title>
                    <Project.ToolsList tools={["React Native", "Styled Components"]} />
                    <Project.DescriptionParagraph>
                        A simple but addictive mobile game. Make the longest chain of paint splats,
                        that would mix to make the right the colour in the prompt.
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>
        </section>
    );
};
