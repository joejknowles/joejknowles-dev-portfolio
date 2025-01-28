import './TechScroll.css';

const technologies = [
    { name: "React", logo: "/logos/react.png" },
    { name: "Node.js", logo: "/logos/nodejs.png" },
    { name: "Typescript", logo: "/logos/typescript.png" },
    { name: "GPT API", logo: "/logos/gpt.png" },
    { name: "Prompt engineering", logo: "/logos/prompt.png" },
    { name: "Ionic", logo: "/logos/ionic.png" },
    { name: "threeJS", logo: "/logos/threejs.png" },
    { name: "react-three-fiber", logo: "/logos/react-three-fiber.png" },
    { name: "Capacitor", logo: "/logos/capacitor.png" },
    { name: "Android Studio", logo: "/logos/android-studio.png" },
    { name: "Firestore", logo: "/logos/firestore.png" },
    { name: "Cypress", logo: "/logos/cypress.png" },
    { name: "Firebase Auth", logo: "/logos/firebase-auth.png" },
    { name: "Ruby on Rails", logo: "/logos/ruby-on-rails.png" },
    { name: "PostgresQL", logo: "/logos/postgresql.png" },
    { name: "Styled components", logo: "/logos/styled-components.png" },
    { name: "Render", logo: "/logos/render.png" },
    { name: "Expo", logo: "/logos/expo.png" },
    { name: "NextJS", logo: "/logos/nextjs.png" },
    { name: "AWS", logo: "/logos/aws.png" },
    { name: "EC2", logo: "/logos/ec2.png" },
    { name: "Material-ui", logo: "/logos/material-ui.png" },
    { name: "Prisma", logo: "/logos/prisma.png" },
    { name: "GraphQL", logo: "/logos/graphql.png" },
    { name: "Apollo", logo: "/logos/apollo.png" },
    { name: "RDS", logo: "/logos/rds.png" },
    { name: "redux", logo: "/logos/redux.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind-css.png" },
    { name: "Design Tokens", logo: "/logos/design-tokens.png" },
    { name: "React Native", logo: "/logos/react-native.png" },
    { name: "dotnet", logo: "/logos/dotnet.png" },
    { name: "SASS", logo: "/logos/sass.png" },
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
