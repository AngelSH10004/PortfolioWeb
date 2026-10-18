export default function ScrollIcon({ text, classNameText, classNameDiv }) {
  return (
    <>
      <div className={classNameText}>{text}</div>
      <div className={classNameDiv}></div>
    </>
  );
}
