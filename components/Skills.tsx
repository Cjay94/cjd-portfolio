"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
    "html5",
    "css3",
    "javascript",
    "bootstrap",
    "tailwindcss",
    "mui",
    "appwrite",
    "git",
    "github",
    "vite",
    "bitbucket",
    "nextdotjs",
    "nodedotjs",
    "react",
    "typescript",
    "vercel",
    "figma",
    "npm",
    "threedotjs",
    "webpack",
    "visualstudiocode",
];

const Skills = () => {

    return (
        <section className="my-10 py-10">
            <h1 className="heading">
                Skills &amp;{" "}
                <span className="text-purple">Technologies</span>
            </h1>

            <IconCloud iconSlugs={slugs} />

        </section>
    )
}

export default Skills