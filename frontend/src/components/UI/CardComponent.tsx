interface Props {
  label: string;
  children?: React.ReactNode;
}

export default function CardComponent({
  label,
  children,
}: Props) {
  return (
    <div className="preview-card">
      <h4>{label}</h4>
      <p>This is card component</p>

      <div className="card-children">
        {children}
      </div>
    </div>
  );
}