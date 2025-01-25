export const Home = () => {
    return (
        <div className="py-10 text-center">
            <h1 className="text-4xl font-bold mb-6">Joe J Knowles</h1>
            <p className="mt-2">
                Senior Full-stack React Developer, based in Leeds (UK).
                9 years of experience, played a critical role building the main applications
                at 3 very early stage startups, taking them from Seed to Series A and beyond.
            </p>

            <p className="mt-2">
                On the frontend, I've worked with React for 8 years, and mostly used Node and Rails on the server side.
            </p>

            <section className="my-10">
                <h2 className="text-3xl font-bold">Personal Web Projects</h2>
                <div className="mt-4 p-4 border rounded shadow">
                    <h3 className="text-2xl font-semibold">PassTime</h3>
                    <p className="mt-2">
                        A time management app, based on recent research on productivity.
                    </p>
                    <p className="mt-2">Built with React, NextJS, TypeScript, Material-ui, Prisma, GraphQL, Apollo</p>
                    <div className="mt-4">
                        <a href="/portfolio" className="text-blue-500 hover:underline">View 7 other projects</a>
                    </div>
                </div>
            </section>
            <section className="mb-10">
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
                    <a href="/cv" className="text-blue-500 hover:underline">View full CV</a>
                </div>
            </section>
            <footer className="mt-10">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="mt-4">joejknowles@gmail.com</p>
                <p>07513020341</p>
            </footer>
        </div>
    );
}