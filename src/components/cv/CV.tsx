import { Experience } from "./Experience";
import { Experiences } from "./Experiences";

const CV = () => {
    return (
        <div className="px-1 xs:px4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-8 lg:space-y-10  max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-[-12px]">Experience</h1>
            <Experiences />
            <h1 className="text-4xl font-bold mb-[-12px]" style={{ marginBottom: -12 }}>Education</h1>

            <Experience>
                <Experience.ImageSection src="/education/makers.jpg" alt="Makers Students learning" />
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title href="https://makers.tech">Makers Academy</Experience.Title>
                        <Experience.Location>LONDON REMOTE</Experience.Location>
                        <Experience.Date>(February 2015 - June 2015)</Experience.Date>
                        <Experience.JobTitle>Full-stack Development</Experience.JobTitle>
                    </Experience.HeadingSection>
                    <Experience.ToolsList tools={[
                        "Ruby",
                        "Rails",
                        "JavaScript",
                        "Agile",
                        "TDD",
                        "Bdd",
                        "OOP",
                        "Pair Programming",
                        "XP Values",
                    ]} />
                    <Experience.List>
                        <Experience.Item>
                            An intensive, full-time coding bootcamp
                        </Experience.Item>
                        <Experience.Item>
                            Formed an incredible foundation enabling me to build
                            high quality applications as part of an agile team
                        </Experience.Item>
                    </Experience.List>
                </Experience.MainSection>
            </Experience>
            <Experience>
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title href="https://www.york.ac.uk/biology/">University of York</Experience.Title>
                        <Experience.Date>(2010 – 2014)</Experience.Date>
                        <Experience.JobTitle>BSc Biology 2:1</Experience.JobTitle>
                    </Experience.HeadingSection>
                    <Experience.ToolsList
                        tools={["Biology", "Python", "Genetics", "Biomedicine", "Statistics"]}
                    />
                    <Experience.List>
                        <Experience.Item>
                            Graduated with a 2:1
                        </Experience.Item>
                        <Experience.Item>
                            Biology department was 2nd in the UK university rankings at the time
                        </Experience.Item>
                        <Experience.Item>
                            Mainly focussing on genetics and molecular biomedicine
                        </Experience.Item>
                        <Experience.Item>
                            Final year project involved computational analysis of DNA
                        </Experience.Item>
                        <Experience.Item>
                            Spanish elective – went from no knowledge to conversational proficiency in one year
                        </Experience.Item>
                    </Experience.List>
                </Experience.MainSection>
                <Experience.ImageSection src="/education/york.jpg" alt="York University" />
            </Experience>
            <Experience>
                <Experience.ImageSection src="/education/piano.jpg" alt="Piano" />
                <Experience.MainSection>
                    <Experience.HeadingSection>
                        <Experience.Title href="https://www.abrsm.org/en-gb/who-we-are/our-history">Piano Exams</Experience.Title>
                        <Experience.Date>(1997 - 2010)</Experience.Date>
                    </Experience.HeadingSection>
                    <Experience.ToolsList tools={["Grade 8 Piano", "Grade 5 Music Theory"]} />
                    <Experience.List>
                        <Experience.Item>
                            Started lessons at 6 years old
                        </Experience.Item>
                        <Experience.Item>
                            Played in concert with the West Yorkshire Symphony Orchestra
                        </Experience.Item>
                        <Experience.Item>
                            Learned how to work hard towards a goal
                        </Experience.Item>
                        <Experience.Item>
                            Still playing now, most recently taking lessons in jazz improvisation
                        </Experience.Item>
                    </Experience.List>
                </Experience.MainSection>
            </Experience>
        </div>
    );

};

export default CV;
