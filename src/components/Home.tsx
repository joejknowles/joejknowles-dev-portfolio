export const Home = () => {
    return (
        <div className="py-10 text-center">
            <h1 className="text-4xl font-bold mb-6">Joe J Knowles</h1>
            <section className="mb-10">
                <h2 className="text-3xl font-bold">Highlighted Project</h2>
                <div className="mt-4 p-4 border rounded shadow">
                    <h3 className="text-2xl font-semibold">Project One</h3>
                    <p className="mt-2">Description of project one.</p>
                    <a href="/portfolio" className="text-blue-500 hover:underline">View more projects</a>
                </div>
            </section>
            <section className="mb-10">
                <h2 className="text-3xl font-bold">Latest Experience</h2>
                <div className="mt-4 p-4 border rounded shadow">
                    <h3 className="text-2xl font-semibold">Job Title</h3>
                    <p className="mt-2">Description of the latest experience.</p>
                    <a href="/cv" className="text-blue-500 hover:underline">View full CV</a>
                </div>
            </section>
            <footer className="mt-10">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="mt-4">Email: joe@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </footer>
        </div>
    );
}