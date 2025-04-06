import Typewriter from "typewriter-effect";

interface ITypewriterBuilderProps {
    initialText?: string;
    sequences: {
        text?: string;
        pause?: number;
        deleteChars?: number;
        deleteAll?: boolean;
    }[];
    loop?: boolean;
    className?: string;
}

const TypewriterBuilder: React.FC<ITypewriterBuilderProps> = ({
    initialText = "",
    sequences,
    loop = true,
    className = ''
}) => {
    return (
        <div className={className}>
            <Typewriter
                options={{
                    loop,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: "_",
                }}
                onInit={(typewriter) => {
                    if (initialText) typewriter.typeString(initialText).pauseFor(1000);

                    sequences.forEach((step) => {
                        if (step.deleteAll) typewriter.deleteAll();
                        else if (step.deleteChars) typewriter.deleteChars(step.deleteChars);

                        typewriter.typeString(step.text || '');

                        if (step.pause) typewriter.pauseFor(step.pause);
                    });

                    typewriter.start();
                }}
            />
        </div>

    );
};

export default TypewriterBuilder;
