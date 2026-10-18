export default function Titles({ text, classNameText, style }) {
  return (
    <h1 style={style} className={classNameText}>
      {text}
    </h1>
  );
}
