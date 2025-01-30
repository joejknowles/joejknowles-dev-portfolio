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
                <Experience.List>
                    <Experience.Item>
                        Joined as 2nd full-stack engineer
                    </Experience.Item>
                    <Experience.Item>
                        Built user facing application taking us from seed stage through
                        series A funding totalling $18 million
                    </Experience.Item>
                    <Experience.Item>
                        Built the onboarding flow and billing system handling that
                        handled an increase in ARR from $100k to $3M in under 3 years
                    </Experience.Item>
                    <Experience.Item>
                        Built an AI data report generator powered by ChatGPT
                    </Experience.Item>
                    <Experience.Item>
                        Directly supported customers, leading to best-in-class{" "}
                        <a
                            className="text-blue-500 hover:underline"
                            href="https://apps.shopify.com/polar-analytics/reviews">
                            app ratings
                        </a>
                    </Experience.Item>
                </Experience.List>
            </Experience.MainSection>
        </Experience>
    );
};
