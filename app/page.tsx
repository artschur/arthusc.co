import localFont from "next/font/local";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectPreview from "@/components/projectPreview";
import { ModeToggle } from "@/components/theme-toggle";

const redaction35Italic = localFont({
  src: "../public/font/Redaction35-Italic.otf",
});
const redaction35 = localFont({
  src: "../public/font/Redaction35-Regular.otf",
});
const redaction35Bold = localFont({
  src: "../public/font/Redaction35-Bold.otf",
});
const redaction20 = localFont({
  src: "../public/font/Redaction20-Regular.otf",
});
const redaction20Italic = localFont({
  src: "../public/font/Redaction20-Italic.otf",
});
const redaction10 = localFont({
  src: "../public/font/Redaction10-Regular.otf",
});
const redaction10Italic = localFont({
  src: "../public/font/Redaction10-Italic.otf",
});
const redaction = localFont({ src: "../public/font/Redaction-Regular.otf" });

export default function Home() {
  return (
    <main className="flex dark:bg-zinc-900 dark:text-white bg-zinc-50 text-zinc-950 flex-col items-center justify-center p-12 min-h-screen text-base md:py-6">
      <div className={`flex flex-col gap-y-8`}>
        <ModeToggle />
        <div className={`${redaction35.className} text-4xl`}>
          <Balancer>
            welcome to my portfolio,
            <br />
            where i show my{" "}
            <RoughNotation type="underline" show={true} color="#f87171" padding={-5}>
              web things
            </RoughNotation>
          </Balancer>
          <p className={`text-base ${redaction20Italic.className}`}>
            arthur is working on{" "}
            <Link href={"/about"} className="underline dark:decoration-gray-600">
              recreads
            </Link>
            ...
          </p>
        </div>
        <div className="text-base max-w-2xl ">
          my name is{" "}
          <span className="underline decoration-dotted dark:decoration-zinc-800 italic">
            arthur schurhaus
          </span>
          , and my weapons of choice are: golang, typescript and nextjs - and i focus on{" "}
          <RoughNotation
            type="highlight"
            multiline={true}
            show={true}
            color="#f87171"
            animationDelay={1500}
          >
            user-experience and performance
          </RoughNotation>
          <br /> <br />
          and when i'm not coding, you'll find me producing music or reading some good books.
          <br />i am a student of{" "}
          <span className="underline dark:decoration-zinc-200"> information systems</span> at the
          federal university of santa catarina, and i work as a software engineer at a company
          called costao do santinho, where i build several, performant golang microservices and API's.
        </div>

        <section className="">
          <h3 className={`${redaction20Italic.className}`}>Let me introduce myself 💫</h3>
          <ProjectPreview projectName="recreads" date="2025" link="recreads" field="fullstack" />
          <ProjectPreview
            projectName="revisacard"
            date="2024"
            link="revisacard"
            field="landing page"
          />
          <ProjectPreview
            projectName="esse é um projeto com um titulo maior sobre hahah"
            date="2024"
            link="about"
            field="landing page"
          />
        </section>
      </div>
    </main>
  );
}
