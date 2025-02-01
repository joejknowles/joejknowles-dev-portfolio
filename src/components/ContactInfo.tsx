import { Envelope, Phone, User, Code } from './Icons';

export const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4 flex items-center mb-4">
                <Envelope />
                <a href="mailto:joejknowles@gmail.com" className="text-blue-500 hover:underline ml-2">joejknowles@gmail.com</a>
            </p>
            <p className="flex items-center mb-4">
                <Phone />
                <a href="tel:+447513020341" className="text-blue-500 hover:underline ml-2">(+44) 7513 020 341</a>
            </p>
            <p className="flex items-center mb-4">
                <User />
                <a href="https://www.linkedin.com/in/joejknowles/" className="text-blue-500 hover:underline ml-2">linkedin.com/in/joejknowles</a>
            </p>
            <p className="flex items-center mb-4">
                <Code />
                <a href="https://github.com/joejknowles" className="text-blue-500 hover:underline ml-2">github.com/joejknowles</a>
            </p>
        </div>
    );
}
