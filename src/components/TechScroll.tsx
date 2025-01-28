import './TechScroll.css';

const technologies = [
    { name: "React", logo: "/logos/react.png" },
    { name: "Node.js", logo: "/logos/nodejs.png" },
    { name: "Typescript", logo: "/logos/typescript.png" },
    { name: "GPT API", logo: "/logos/gpt.png" },
    { name: "Prompt engineering", logo: "/logos/prompt.png" },
    // Add more technologies and their logos here
];

const technologiesDoubled = [...technologies, ...technologies, ...technologies, ...technologies];

const numberOfTechs = technologiesDoubled.length;

export const TechScroll = () => {
    return (
        <div className="tech-scroll-container">
            <div className="tech-scroll" style={{
                animationDuration: `${numberOfTechs * 1}s`
            }}>
                {technologiesDoubled.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
}
