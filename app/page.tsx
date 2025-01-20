import localFont from "next/font/local";
import Balancer from 'react-wrap-balancer'
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectPreview from "@/components/projectPreview";


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
    <main className="flex flex-col items-center justify-center min-h-screen py-6 text-base">
      <div className={`flex flex-col gap-y-8`}>
        <div className={`${redaction35.className} text-4xl`}>
          <Balancer>welcome to my portfolio,
            <br />
            where i show my <RoughNotation type="underline" show={true} color="#f87171" padding={-5}>web things</RoughNotation>

          </Balancer>
          <p className={`text-base ${redaction20Italic.className}`}>arthur is working on  <Link href={'/about'} className="underline decoration-gray-600">recreads</Link>...</p>
        </div>
        <div className="text-base max-w-2xl ">
          my name is <span className="underline decoration-dotted decoration-zinc-200">arthur schurhaus</span>, and the tools im experienced in are: typescript, nextjs, php and sql - and i focus on <RoughNotation type="highlight" show={true} color="#f87171" animationDelay={1500}>user-experience and performance</RoughNotation><br /> <br />
          and when i'm not coding, you'll find me producing music, reading some fiction or diving deep into theories about my favorite tv shows.

          <br />
          i am a student of  <span className="underline decoration-zinc-200"> information systems</span> at the federal university of santa catarina, securing 3rd place in the university's startup competition and <span className="underline decoration-red-400"> winning</span> startup weekend floripa by creating a <Link href={'cybersure'} className="font-mono">cybersec</Link> startup 👨🏻‍💻.
        </div>

        <section className="">
          <ProjectPreview projectName="recreads" date="2025" link="recreads" field="fullstack" />
          <ProjectPreview projectName="revisacard" date="2024" link="revisacard" field="landing page" />
          <ProjectPreview projectName="esse é um projeto com um titulo maior sobre hahah" date="2024" link="about" field="landing page" />
        </section>
      </div>
    </main >
  );
}
