import Link from "next/link";

export default function ProjectPreview({ projectName, date, link }: { projectName: string, date: string, link: string }) {
    return (
        <div className="flex flex-col items-start gap-y-4">
            <div className="flex flex-col items-start">
                <Link
                    href={`${link}`}
                    className="hover:bg-neutral-100 py-2 px-4 -ml-4 rounded-md
                    transition-all duration-300 ease-in-out
                    hover:scale-[1.02] hover:shadow-sm"
                >
                    <h1 className="text-normal underline underline-offset-2 decoration-zinc-100">{projectName}</h1>
                    <p className="text-sm text-zinc-400">{date}</p>
                </Link>
            </div>
        </div>
    );
}