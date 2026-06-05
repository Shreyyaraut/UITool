interface Props {
    label: string;
}

export default function TextareaComponent({ label }: Props) {
    return (
        <textarea
           className="preview-textarea"
           placeholder={label}
           readOnly
        />
    );
}