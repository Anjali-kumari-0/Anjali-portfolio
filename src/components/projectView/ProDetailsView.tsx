import React from "react";
import { allProjectDetails } from "./allProjectBigList";

interface ProjectDetailsProps {
    id: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
    const [toShow, setShow] = React.useState<string | null>("demo");
    const project = allProjectDetails.find((item) => item.id === id);

    if (!project) {
        return <div className="p-6 text-red-500">Project Not Found</div>;
    }
    const showList = [
        {
            id: "demo",
            label: "Live Demo"

        },
        {
            id: "usageCode",
            label: "Source Code"
        }
    ]

    return (
        <div className="p-6 space-y-6 h-160 z-20 relative app-text-primary w-full overflow-y-scroll">
            {/* Title */}
            <div>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="qtext-gray-500">{project.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-sm qtext-gray-700">{project.description}</p>
            <div className="flex gap-2 w-full">
                <div className="w-[40%]">
                    {/* Features */}
                    <div>
                        <h2 className="font-semibold mb-2">Features</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1">
                            {project.features?.map((f: string, i: number) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h2 className="font-semibold mb-2">Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.implementedTechnologies?.map((tech: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 qbg-gray-200 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h2 className="font-semibold mb-2">Use Cases</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1">
                            {project.useCases?.map((u: string, i: number) => (
                                <li key={i}>{u}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                        <h2 className="font-semibold mb-2">Challenges</h2>
                        <ul className="list-disc ml-5 text-sm space-y-1">
                            {project.challenges?.map((c: string, i: number) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.tags?.map((tag: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 qbg-gray-200 rounded text-xs"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                </div>
                <div className="w-[60%] h-[400px] bg-gray-600">
                    {/* Links */}
                    <div className="flex gap-4 pb-2">
                        {
                            showList.map((item) => (
                                <a
                                    key={item.id}
                                    // href={project.implementation?.[`${item.id}Link`]}
                                    target="_blank"
                                    className={`z-10 ${toShow === item.id ? "font-bold underline text-blue-500" : "cursor-pointer text-white-500 hover:text-blue-500"}`}
                                    onClick={() => setShow(item.id)}
                                >
                                    {item.label}
                                </a>
                            ))
                        }
                    </div>

                    {/* images */}
                    <div className="relative z-20 rounded-lg">{
                        toShow === "demo" ? (
                            <div className="flex flex-col gap-4"><video
                                className="w-full h-full object-cover rounded-lg"
                                src={project.implementation?.demo}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                                <div className="flex gap-4">{project.implementation?.preview1 && (<img className="max-w-full h-auto object-contain" src={project.implementation?.preview1} alt="Code" />)}
                                    {project.implementation?.preview2 && (<img className="max-w-full h-auto object-contain" src={project.implementation?.preview2} alt="Code" />)}
                                </div>
                            </div>
                        ) : toShow === "usageCode" ? (
                            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>
                                    {project.documentation.usage}
                                </code>
                            </pre>
                            // <img className="w-full h-full" src={project.implementation?.previewImage} alt="Code" />
                        ) : null
                    }</div>
                </div>
            </div>




        </div>
    );
};

export default ProjectDetails;