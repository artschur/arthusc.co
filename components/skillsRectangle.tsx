interface SkillTinyBlockProps {

    skillName: string;

    skillColor: string;

}

export function SkillTinyBlock({ skillName, skillColor }: SkillTinyBlockProps) {
    return (
        <div className={`flex flex-col items-center h-12 w-24 justify-center hover:py-4 ${skillColor} px-4 py-2 rounded-md`}>
            {skillName}
        </div>
    );

}