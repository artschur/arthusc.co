import Image from "next/image";
import localFont from "next/font/local";
import Balancer from 'react-wrap-balancer'
import { SkillTinyBlock } from "@/components/skillsRectangle";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
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
          <Balancer>my name is Arthur
            <br />
            and i <RoughNotation type="circle" show={true} color="red"> code web things.</RoughNotation>

          </Balancer>
          <p className={`text-base ${redaction20Italic.className}`}>currently working on  <Link href={'/about'} className="underline decoration-gray-600">recreads</Link></p>
        </div>
        {/* <GooeyText texts={['hello', 'world', 'arthur']} /> */}
        <div className="text-base max-w-2xl">
          I am a fullstack-developer experienced with typescript, nextjs, php and sql <br />
          im passionate about movies, produce music and code as much as i can outside of university and my job.
          <br />
          <br />
          i am a student of information systems at the federal university of santa catarina.
        </div>

        <section>
          <ProjectPreview projectName="recreads" date="2025" link="recreads" />
          <ProjectPreview projectName="revisacard" date="2024" link="revisacard" />
          <ProjectPreview projectName="esse é um projeto com um titulo maior sobre hahah" date="2024" link="about" />
        </section>
      </div>
    </main >
  );
}
