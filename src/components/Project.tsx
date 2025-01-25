interface ProjectProps {
    title: string;
    children: React.ReactNode;
}

export const Project = ({ title, children }: ProjectProps) => {
    return (
        <div className="p-4 border rounded shadow">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="mt-2">{children}</div>
        </div>
    );
};
