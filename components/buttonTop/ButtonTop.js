import Link from "next/link";
import "./buttonTop.scss";

export default function ButtonTop() {
  return (
    <Link href={"#"}>
      <div className="button-top">
        <div className="button-top__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12L12 5L5 12M12 5L12 19"
              stroke="#050F28"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="button-top__title">Наверх</div>
      </div>
    </Link>
  );
}
