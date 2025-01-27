export const ContactInfo = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-4">
                Email: <a href="mailto:joejknowles@gmail.com" className="text-blue-500 hover:underline">joejknowles@gmail.com</a>
            </p>
            <p>
                Phone: <a href="tel:+447513020341" className="text-blue-500 hover:underline">(+44) 7513 020 341</a>
            </p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/joejknowles/" className="text-blue-500 hover:underline">linkedin.com/in/joejknowles</a>
            </p>
            <p>
                GitHub: <a href="https://github.com/joejknowles" className="text-blue-500 hover:underline">github.com/joejknowles</a>
            </p>
        </div>
    );
}
