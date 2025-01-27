import { PolarExperience } from "./cv/PolarExperience";
import { PassTime } from "./projects/PassTime";

export const Home = () => {
    return (
        <div className="py-10 max-w-4xl mx-auto px-10">
            <h1 className="text-center text-4xl font-bold mb-2">Joe Knowles</h1>
            <p className="text-center text-gray-500">
                Full-stack React expert, based in Leeds (UK)
            </p>
            <p className="mt-4">
                With over 9 years of experience, I've built applications that took
                3 very early stage startups from Seed to Series A and beyond.
            </p>

            <p className="mt-2">
                I've worked with React for 8 years, and mostly Node (5 years) and Rails (3 years) on the server.
            </p>

            <section className="my-10 space-y-5">
                <h2 className="text-3xl font-bold">Personal Web Projects</h2>
                <PassTime />
                <div>
                    <a href="/portfolio" className="text-blue-500 hover:underline">
                        See 5 other projects
                    </a>
                </div>
            </section>
            <section className="mb-10 space-y-5">
                <h2 className="text-3xl font-bold">Latest Experience</h2>
                <PolarExperience />
                <div>
                    <a href="/cv" className="text-blue-500 hover:underline">View full CV</a>
                </div>
            </section>
            <footer className="mt-10">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="mt-4">
                    <a href="mailto:joejknowles@gmail.com" className="text-blue-500 hover:underline">joejknowles@gmail.com</a>
                </p>
                <p>
                    <a href="tel:+447513020341" className="text-blue-500 hover:underline">(+44) 7513 020 341</a>
                </p>
            </footer>
        </div>
    );
}