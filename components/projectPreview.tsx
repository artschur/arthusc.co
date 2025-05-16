import Link from "next/link";

export default function ProjectPreview({
  projectName,
  date,
  link,
  field,
}: {
  projectName: string;
  date: string;
  link: string;
  field: string;
}) {
  return (
    <div className="flex flex-col items-start gap-y-4">
      <div className="flex flex-col items-start">
        <Link
          href={`${link}`}
          className="dark:hover:bg-zinc-800 hover:bg-zinc-100  py-2 px-4 -ml-4 rounded-md
                    transition-all duration-300 ease-in-out
                    hover:scale-[1.02] hover:shadow-sm"
        >
          <h1 className="text-normal underline underline-offset-2 decoration-zinc-200 dark:decoration-zinc-800">
            {projectName}
          </h1>
          <div className="flex flex-row justify-between align-bottom gap-x-12 w-full">
            <p className="text-sm text-zinc-800 dark:text-zinc-300 ">{date}</p>
            <p className="text-xs text-zinc-800 dark:text-zinc-300 font-mono">{field}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
