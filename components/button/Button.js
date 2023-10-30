import "./button.scss";

export default function Button({ title = "Написать", onClick, name }) {
  return (
    <button name={name} className="button-new-note" onClick={onClick}>
      {title}
    </button>
  );
}
