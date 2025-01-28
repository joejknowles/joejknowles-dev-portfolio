import { technologies } from './technologies';
import './TechScroll.css';

const technologiesDoubled = [...technologies, ...technologies];

const numberOfTechs = technologiesDoubled.length;

export const TechScroll = () => {
    return (
        <div className="tech-scroll-container">
            <div className="tech-scroll" style={{
                animationDuration: `${numberOfTechs * 0.7}s`
            }}>
                {technologiesDoubled.map((tech, index) => (
                    <div key={index} className="tech-item">
                        <img src={tech.logo} alt={tech.name} className="tech-logo" />
                        <div className="tech-name">{tech.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
