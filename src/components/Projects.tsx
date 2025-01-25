import { Project } from "./Project";

export const Projects = () => {
    return (
        <section className="py-10 text-center">
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Project title="PassTime">
                    <p className="mt-2">
                        A time management app, based on recent research on productivity.
                    </p>
                    <p className="mt-2">Built with React, NextJS, TypeScript, Material-ui, Prisma, GraphQL, Apollo</p>
                </Project>
            </div>
        </section>
    );
};
