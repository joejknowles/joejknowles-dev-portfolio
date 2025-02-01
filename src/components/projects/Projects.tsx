import { Project } from "./Project";
import { PassTime } from "./PassTime";

export const Projects = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-center space-y-6 sm:space-y-8 lg:space-y-10  max-w-4xl mx-auto">
            <PassTime />
            <Project>
                <Project.ImageSection src="/ysp.jpg" alt="YSP Explore screenshot" />
                {/* more screenshots here: https://photos.google.com/album/AF1QipMVf1V8GI0snTojq0BJ8LWMCcT7hTIMjA0C85Vq */}
                <Project.MainSection>
                    <Project.Title>YSP Explore</Project.Title>
                    <Project.ToolsList tools={[
                        "React",
                        "Ionic",
                        "threeJS",
                        "react-three-fiber",
                        "Capacitor",
                        "Android Studio",
                        "Firestore",
                        "Cypress",
                        "Firebase Auth"
                    ]} />
                    <Project.DescriptionParagraph>
                        A 3D Pokémon Go like user interface, but as a tour guide for the Yorkshire Sculpture Park.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        GPS location is used to show their character on the map with pins for sculptures for info and photos.
                        It also tracks which sculptures the user has visited,
                        and at the end of the day shows a summary of what they've seen that day.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Preview on web: <a
                            href="https://yspexplore.com"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            yspexplore.com
                        </a>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>
            <Project>
                <Project.MainSection>
                    <Project.Title>sayitright.academy</Project.Title>
                    <Project.ToolsList tools={["React", "Ruby on Rails", "PostgresQL", "Styled components", "Firebase Auth", "Render"]} />
                    <Project.DescriptionParagraph>
                        A fully customisable language learning app that uses AI to generate lessons based on a user provided subject.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Try at: <a
                            href="https://sayitright.academy"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            sayitright.academy
                        </a>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
                <Project.VideoSection src="/sayitright-low.mp4" />
            </Project>
            <Project>
                <Project.ImageSection src="/speed-painter-play-store.png" alt="Speed Painter play store screenshot" />
                {/* more screenshots here: https://photos.google.com/album/AF1QipOMt4LJXV8mjhFB0jyrw4QxSBO8ZHEWmrCn-2Gg */}
                <Project.MainSection>
                    <Project.Title>Speed Painter</Project.Title>
                    <Project.ToolsList tools={["React Native", "Expo", "Styled Components"]} />
                    <Project.DescriptionParagraph>
                        A simple but addictive mobile game. Make the longest chain of paint splats,
                        that would mix to make the right the colour in the prompt.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Try on android: <a
                            href="https://play.google.com/store/apps/details?id=com.joejknowles.speedpainter"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Google Play
                        </a>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>
            <Project>
                <Project.MainSection>
                    <Project.Title>SourceShine</Project.Title>
                    <Project.ToolsList tools={["React", "Ruby on Rails", "Firebase Auth", "PostgresQL"]} />
                    <Project.DescriptionParagraph>
                        Continuously communicate code quality, not just in Pull Requests.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        A fast growing company needs to acknowledge technical debt, without
                        fixing everything immediately. With SourceShine, you can record issues
                        when you notice them, and then see them later when you're working in
                        the relevant area.
                    </Project.DescriptionParagraph>

                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Try at: <span
                            // href="https://sourceshine.io"
                            className="text-gray-500 hover:underline cursor-not-allowed"
                        >
                            sourceshine.io
                        </span>
                        <br />
                        <div className="text-gray-400 text-sm max-w-xs">
                            (sign up currently disabled. Contact me at{" "}
                            <a href="mailto:joejknowles@gmail.com">
                                joejknowles@gmail.com
                            </a> to join the waitlist)
                        </div>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
                <Project.ImageSection src="/projects/sourceshine.png" alt="SourceShine screenshot" />
            </Project>
            <Project>
                <Project.VideoSection src="/projects/predictable.mp4" />
                <Project.MainSection>
                    <Project.Title>Predictable</Project.Title>
                    <Project.ToolsList tools={["React", "Styled Components", "GCP", "Cloud Functions", "Serverless", "Firebase Auth", "Firebase Realtime Database", "Firebase Hosting"]} />
                    <Project.DescriptionParagraph>
                        A simple, premier league match prediction game. 1 point per correct prediction, win lose or draw.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        Scores are updated live as games are played. Sends email reminders and leaderboard
                        updates flexibly, adapting as matches are postponed and rescheduled.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        Create your own minileague to compete with friends.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Try at: <a
                            href="https://predictable.app"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            predictable.xyz
                        </a>
                        <br />
                        <div className="text-gray-400 text-sm max-w-xs">(Best to join before a new season starts)</div>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>
            <Project>
                <Project.MainSection>
                    <Project.Title>Tadash</Project.Title>
                    <Project.ToolsList tools={["Ruby on Rails", "chartkick"]} />
                    <Project.DescriptionParagraph>
                        Overview of your house's temperature and humidity recorded by
                        Tado's smart home system.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        Tado's app only lets you see one day at a time. I was trying to
                        investigate some damp issues in my house, and needed a better
                        overview of the data, so I built it myself, and open sourced the code.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Codebase: <a
                            href="https://github.com/joejknowles/tadash"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <br />
                        <div className="text-gray-400 text-sm max-w-xs">(An open source dashboard, for self-hosting.)</div>
                    </Project.DescriptionParagraph>
                </Project.MainSection>
                <Project.ImageSection src="/projects/tadash.png" alt="Tadash screenshot" />
            </Project>
            <Project>
                <Project.ImageSection src="/joejknowles-site-screenshot.jpg" alt="joejknowles.com screenshot" />
                <Project.MainSection>
                    <Project.Title>joejknowles.com</Project.Title>
                    <Project.ToolsList tools={["React", "Tailwind CSS", "Astro", "Render"]} />
                    <Project.DescriptionParagraph>
                        This personal website, built with React and Tailwind CSS.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Codebase: <a
                            href="https://github.com/joejknowles/joejknowles-dev-portfolio"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        See it: <a
                            href="https://joejknowles.com"
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            joejknowles.com
                        </a> (you're already here!)
                    </Project.DescriptionParagraph>
                </Project.MainSection>
            </Project>

            <Project>
                <Project.MainSection>
                    <Project.Title>Anventory</Project.Title>
                    <Project.ToolsList tools={["React", "Styled Components", "Downshift", "Firebase Auth", "Firestore", "Firebase Hosting"]} />
                    <Project.DescriptionParagraph>
                        A beautifully designed, bespoke shopping list app.
                    </Project.DescriptionParagraph>
                    <Project.DescriptionParagraph>
                        Instantly syncs between devices and users in the same home.
                    </Project.DescriptionParagraph>
                    <br />
                    <Project.DescriptionParagraph style={{ marginTop: "auto" }}>
                        Try at: <span
                            // href="https://anventory.com"
                            className="text-gray-500 hover:underline cursor-not-allowed"
                        // target="_blank"
                        // rel="noreferrer"
                        >
                            anventory.com
                        </span>
                        <br />
                        <div className="text-gray-400 text-sm max-w-xs">(sign up currently disabled. Contact me at <a href="mailto:joejknowles@gmail.com">
                            joejknowles@gmail.com
                        </a> to join the waitlist)</div>
                    </Project.DescriptionParagraph>
                </Project.MainSection >
                <Project.VideoSection src="/anventory-low.mp4" />
            </Project >
        </section >
    );
};
