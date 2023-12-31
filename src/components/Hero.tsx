import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-wrapper">
        <div className="blur-red"></div>
        <div className="intro-wrapper">
          <h1>FAKE SHOP</h1>
          <h5>
            Welcome at our FAKE SHOP, we sell fake products, you can buy them
            but they are fake.
          </h5>
          <button onClick={() => navigate("/shopping")}>
            Shop now
            <span className="icon-wrapper">
              <svg
                className="arrow-right-svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20398 7.00002H10.796L5.99998 1.51902L1.20398 7.00002ZM0.450983 6.34102L5.24698 0.861022C5.34084 0.753613 5.4566 0.667527 5.58647 0.608543C5.71635 0.549559 5.85734 0.519043 5.99998 0.519043C6.14262 0.519043 6.28362 0.549559 6.41349 0.608543C6.54337 0.667527 6.65912 0.753613 6.75298 0.861022L11.549 6.34102C12.115 6.98802 11.655 8.00002 10.796 8.00002H1.20398C1.01174 8.00019 0.823521 7.94493 0.661871 7.84088C0.500221 7.73683 0.37199 7.58839 0.292534 7.41333C0.213078 7.23827 0.185765 7.04402 0.213867 6.85385C0.241969 6.66367 0.324294 6.48562 0.450983 6.34102Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="sales-wrapper">
          <h2>Products</h2>
          <Timer />
          <h3>Time Limited</h3>
        </div>
      </div>
    </>
  );
}
