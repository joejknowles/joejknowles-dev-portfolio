import './TechScroll.css';

const technologies = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Typescript", logo: "/logos/typescript.svg" },
    { name: "GPT API", logo: "/logos/gpt.svg" },
    { name: "Prompt engineering", logo: "/logos/prompt.svg" },
    { name: "Ionic", logo: "/logos/ionic.svg" },
    { name: "threeJS", logo: "/logos/threejs.svg" },
    { name: "react-three-fiber", logo: "/logos/react-three-fiber.svg" },
    { name: "Capacitor", logo: "/logos/capacitor.svg" },
    { name: "Android Studio", logo: "/logos/android-studio.svg" },
    { name: "Firestore", logo: "/logos/firestore.svg" },
    { name: "Cypress", logo: "/logos/cypress.svg" },
    { name: "Firebase Auth", logo: "/logos/firebase-auth.svg" },
    { name: "Ruby on Rails", logo: "/logos/ruby-on-rails.svg" },
    { name: "PostgresQL", logo: "/logos/postgresql.svg" },
    { name: "Styled components", logo: "/logos/styled-components.svg" },
    { name: "Render", logo: "/logos/render.svg" },
    { name: "Expo", logo: "/logos/expo.svg" },
    { name: "NextJS", logo: "/logos/nextjs.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "EC2", logo: "/logos/ec2.svg" },
    { name: "Material-ui", logo: "/logos/material-ui.svg" },
    { name: "Prisma", logo: "/logos/prisma.svg" },
    { name: "GraphQL", logo: "/logos/graphql.svg" },
    { name: "Apollo", logo: "/logos/apollo.svg" },
    { name: "RDS", logo: "/logos/rds.svg" },
    { name: "redux", logo: "/logos/redux.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind-css.svg" },
    { name: "Design Tokens", logo: "/logos/design-tokens.svg" },
    { name: "React Native", logo: "/logos/react-native.svg" },
    { name: "dotnet", logo: "/logos/dotnet.svg" },
    { name: "SASS", logo: "/logos/sass.svg" },
];

const technologiesDoubled = [...technologies, ...technologies];

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
