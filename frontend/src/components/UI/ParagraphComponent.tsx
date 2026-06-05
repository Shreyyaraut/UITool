interface Props {
    label: string;
}

export default function ParagraphComponent({ label }: Props) {
    return (
        <p className="preview-paragraph">
            {label} content goes here
        </p>
    );
}