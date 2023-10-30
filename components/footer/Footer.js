import ButtonTop from "../buttonTop/ButtonTop";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">Мой Дневничок</div>
      <div className="footer__btn">
        <ButtonTop />
      </div>
    </footer>
  );
}
