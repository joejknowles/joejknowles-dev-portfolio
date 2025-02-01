import { useEffect, useState } from "react";

export const Name = () => {
    const nameArray = "Joe Knowles".split("");

    useEffect(() => {
        const root = document.documentElement;
        let hue = 214;
        let i = 0;

        root.style.setProperty("--animation-color", `hsl(${hue}, 100%, 62%)`);
        const interval = setInterval(() => {
            hue = hue + 8;
            i++;
            if (hue > 290) {
                hue = 214;
            }
            root.style.setProperty("--animation-color", `hsl(${hue}, 100%, 62%)`);
            if (i > 20) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

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
