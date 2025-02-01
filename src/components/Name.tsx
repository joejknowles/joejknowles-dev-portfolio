export const Name = () => {
    const nameArray = "Joe Knowles".split("");

    return (
        <h1 className="text-center text-4xl font-bold mb-2">
            {nameArray.map((letter, index) => (
                <span
                    key={index}
                    className="animate-bounce"
                    style={{
                        display: "inline-block",
                        paddingRight: letter === " " ? "1rem" : "0",
                        animationDelay: `${(index > 2 ? index - 1 : index) * 0.2}s`,
                        animationIterationCount: 1,
                    }}
                >
                    {letter}
                </span>
            ))}
        </h1>
    );
}
