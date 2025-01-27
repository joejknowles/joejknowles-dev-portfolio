import { Experience } from "./Experience";
import { PolarExperience } from "./PolarExperience";

export const Experiences = () => {
    return (
        <section className="px-10 py-10 text-center space-y-10 max-w-5xl mx-auto">
            <PolarExperience />
            <Experience>
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title>Zen Educate</Experience.Title>
                        <Experience.Location>UK REMOTE</Experience.Location>
                        <Experience.Date>(August 2020 - April 2022)</Experience.Date>
                        <Experience.JobTitle>Senior Full-stack Developer</Experience.JobTitle>
                    </Experience.HeadingSection>
                    <Experience.ToolsList tools={[
                        "React",
                        "Ruby on Rails",
                        "Styled Components",
                        "redux",
                        "React Native",
                        "GraphQL",
                        "Tailwind CSS",
                        "Design Tokens"
                    ]} />
                    <Experience.DescriptionParagraph>
                        Working as a full-stack engineer I led a complete transformation of the development process:
                        - introduced end to end tests with cypress and trained the team in how to write effective
                        tests that ensure a high level of accessibility in the UI
                        - Initiated a move towards more stringent code reviews and focused heavily on improving
                        code quality, transferring my knowledge of long-term maintainable coding patterns to the
                        team via code reviews, pair programming, and presentations highlighting some of the
                        weakest parts of our codebase and how to improve them.
                    </Experience.DescriptionParagraph>
                </Experience.MainSection>
            </Experience>
            <Experience>
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title>WealthKernel</Experience.Title>
                        <Experience.Location>UK REMOTE</Experience.Location>
                        <Experience.Date>(April 2017 - July 2020)</Experience.Date>
                        <Experience.JobTitle>Senior Full-stack Developer</Experience.JobTitle>
                    </Experience.HeadingSection>
                    <Experience.ToolsList tools={[
                        "React",
                        "redux",
                        "dotnet",
                        "Styled Components",
                        "Design Tokens",
                        "SASS",
                    ]} />
                    <Experience.DescriptionParagraph>
                        As the 5th employee at this startup, I led the development of our most important applications
                        from initial planning through to shipping to customers. The success of these applications allowed
                        us to raise a £4.5m series A.
                    </Experience.DescriptionParagraph>
                </Experience.MainSection>
            </Experience>
            <Experience>
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title>FNZ</Experience.Title>
                        <Experience.Location>Brno, The Czech Republic</Experience.Location>
                        <Experience.Date>(August 2015 - December 2016)</Experience.Date>
                        <Experience.JobTitle>Full-stack Developer</Experience.JobTitle>
                    </Experience.HeadingSection>
                    <Experience.ToolsList tools={[
                        "React",
                        "dotnet"
                    ]} />
                    <Experience.DescriptionParagraph>
                        I began working in a small internal agile team developing a proof of concept application in .NET
                        for a new innovative product. I quickly learned React and later started working on the
                        development of a new site for a £multibillion platform, taking ownership of this project a few
                        months later.
                    </Experience.DescriptionParagraph>
                </Experience.MainSection>
            </Experience>
        </section>
    );
};
