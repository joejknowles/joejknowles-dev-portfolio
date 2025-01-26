import { Project } from "./Project";

export const PassTime = () => {
    return (
        <Project>
            <Project.MainSection>
                <Project.Title>PassTime</Project.Title>
                <Project.ToolsList
                    tools={[
                        "React",
                        "NextJS",
                        "AWS",
                        "PostgresQL",
                        "EC2",
                        "TypeScript",
                        "Material-ui",
                        "Prisma",
                        "GraphQL",
                        "Apollo",
                        "RDS"
                    ]}
                />
                <Project.DescriptionParagraph>
                    A time management app, based on some recent research on productivity:
                    if you decide <em>when</em> you're going to do something, you're
                    much more likely to actually do it, than if you just add it to a 'to-do'
                    list and forget about it.
                </Project.DescriptionParagraph>
                <br />
                <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                    Try at: <a
                        href="https://passti.me"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        passti.me
                    </a>
                </Project.DescriptionParagraph>
                <Project.DescriptionParagraph>
                    Codebase: <a
                        href="https://github.com/joejknowles/pass-time"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </Project.DescriptionParagraph>
            </Project.MainSection>
            <Project.VideoSection src="/passtime-low.mp4" />
        </Project>
    );
};
