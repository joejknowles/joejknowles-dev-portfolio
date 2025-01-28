import { Experience } from "./Experience";

export const PolarExperience = () => {
    return (
        <Experience>
            <Experience.ImageSection src="/polar-team.jpg" alt="Polar Analytics team photo" />
            <Experience.MainSection>
                <Experience.HeadingSection>
                    <Experience.Title href="https://www.polaranalytics.com">Polar Analytics</Experience.Title>
                    <Experience.Location>UK REMOTE</Experience.Location>
                    <Experience.Date>(April 2022 - September 2024)</Experience.Date>
                    <Experience.JobTitle>Senior Full-stack Developer</Experience.JobTitle>
                </Experience.HeadingSection>
                <Experience.ToolsList
                    tools={[
                        "React",
                        "Node.js",
                        "Typescript",
                        "GPT API",
                        "Prompt engineering"
                    ]}
                />
                <Experience.DescriptionParagraph>
                    After joining as the second full-stack engineer, I've built much of the user facing application,
                    taking us from seed stage through two rounds of series A funding totalling $24 million raised.
                    Work includes building an AI data report generator powered by ChatGPT and a billing system
                    that handles over $3M in ARR.
                </Experience.DescriptionParagraph>
            </Experience.MainSection>
        </Experience>
    );
};
