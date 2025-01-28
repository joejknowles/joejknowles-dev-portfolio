import { PolarExperience } from "./cv/PolarExperience";
import { PassTime } from "./projects/PassTime";
import { ContactInfo } from "./ContactInfo";
import { TechScroll } from "./techScroll/TechScroll";

export const Home = () => {
    return (
        <>
            <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-center text-4xl font-bold mb-2">Joe Knowles</h1>
                <p className="text-center text-gray-500">
                    Full-stack React expert, based in Leeds (UK)
                </p>
                <p className="mt-4">
                    With over 9 years of experience, I've built applications that took
                    3 very early stage startups from Seed stage to Series A and beyond.
                </p>

                <p className="mt-2">
                    I've worked with React for 8 years, with Node or Rails on the backend.
                </p>
            </div>

            <TechScroll />

            <div className="pb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="my-7 lg:my-10 space-y-5">
                    <h2 className="text-3xl font-bold">Personal Web Projects</h2>
                    <PassTime />
                    <div>
                        <a href="/portfolio" className="text-blue-500 hover:underline">
                            See 5 other projects
                        </a>
                    </div>
                </section>
                <section className="mb-7 lg:mb-10 space-y-5">
                    <h2 className="text-3xl font-bold">Experience</h2>
                    <PolarExperience />
                    <div>
                        <a href="/cv" className="text-blue-500 hover:underline">View full CV</a>
                    </div>
                </section>
                <footer className="mt-10">
                    <ContactInfo />
                </footer>
            </div>
        </>
    );
}