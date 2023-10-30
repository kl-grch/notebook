import "./buttonMore.scss";

export default function ButtonMore({ onClick }) {
  return (
    <div className="button-more" onClick={onClick}>
      Показать больше
    </div>
  );
}
