interface Props {
    label: string;
}

export default function InputComponent({ label }: Props) {
    return (
        <input 
           className="preview-input"
           placeholder={label}
           readOnly
        />
    );
}