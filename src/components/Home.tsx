import { PassTime } from "./projects/PassTime";

export const Home = () => {
    return (
        <div className="py-10 max-w-4xl mx-auto px-10">
            <h1 className="text-center text-4xl font-bold mb-2">Joe Knowles</h1>
            <p className="text-center text-gray-500">
                Full-stack React expert, based in Leeds (UK)
            </p>
            <p className="mt-4">
                With over 9 years of experience, I've played a critical role building the main applications
                at 3 very early stage startups, taking them from Seed to Series A and beyond.
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
                <div className="mt-4 p-4 border rounded shadow">
                    <h3 className="text-2xl font-semibold">
                        Polar Analytics – Senior Full-stack Developer
                    </h3>
                    <p className="mt-2">UK Remote (April 2022 - September 2024)</p>
                    <p className="mt-2">
                        After joining as the second full-stack engineer, I've built much of the user facing application,
                        taking us from seed stage through two rounds of series A funding totalling $24 million raised.
                    </p>
                    <p className="mt-2">
                        Work includes building an AI data report generator powered by ChatGPT and a billing system
                        that handles over $3M in ARR.
                    </p>
                </div>
                <div>
                    <a href="/cv" className="text-blue-500 hover:underline">View full CV</a>
                </div>
            </section>
            <footer className="mt-10">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="mt-4">joejknowles@gmail.com</p>
                <p>07513020341</p>
            </footer>
        </div>
    );
}