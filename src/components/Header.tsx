import { useLocation, useNavigate } from "react-router-dom";
import ArrowUp from "./ArrowUp";
import { RefObject, useRef } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  let currentUrlRef: RefObject<HTMLLIElement> | null = null;
  const homepageRef = useRef<HTMLLIElement>(null);
  const shoppingRef = useRef<HTMLLIElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  if (location === "/") {
    currentUrlRef = homepageRef;
  } else if (location === "/shopping") {
    currentUrlRef = shoppingRef;
  }

  function placeArrowOnMouseEnter(
    event: React.MouseEvent<Element, MouseEvent>
  ) {
    const target = event.target as HTMLButtonElement;
    if (
      arrowRef.current !== null &&
      target.parentNode?.lastChild !== arrowRef.current
    ) {
      arrowRef.current.remove();
      arrowRef.current.classList.add("animate");
      if (target) target.parentNode?.appendChild(arrowRef.current);
    }
  }

  function placeArrowOnMouseLeave() {
    if (
      arrowRef.current !== null &&
      currentUrlRef?.current !== arrowRef.current.parentNode
    ) {
      arrowRef.current.classList.add("animate");
      arrowRef.current.remove();
      currentUrlRef?.current?.appendChild(arrowRef.current);
    }
  }
  return (
    <header>
      <span className="icon-wrapper" onClick={() => navigate("/checkout")}>
        <svg
          width="71"
          height="70"
          viewBox="0 0 71 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="64.082"
            height="64"
            rx="32"
            stroke="white"
            strokeWidth="6"
          />
          <path
            d="M16.8579 33V32.01C17.0879 32 17.2779 31.97 17.4279 31.92C17.5879 31.87 17.7079 31.755 17.7879 31.575C17.8779 31.395 17.9229 31.105 17.9229 30.705V24.96C17.9229 24.69 17.9279 24.43 17.9379 24.18C17.9579 23.93 17.9729 23.74 17.9829 23.61C17.8229 23.62 17.6229 23.63 17.3829 23.64C17.1429 23.64 16.9679 23.645 16.8579 23.655V22.5H24.3579L24.4479 25.41H23.4579C23.4579 24.86 23.3629 24.445 23.1729 24.165C22.9829 23.885 22.7479 23.7 22.4679 23.61C22.1879 23.51 21.9129 23.465 21.6429 23.475L21.1029 23.49C20.8929 23.49 20.7129 23.52 20.5629 23.58C20.4129 23.63 20.2979 23.75 20.2179 23.94C20.1379 24.12 20.0979 24.405 20.0979 24.795V27.405H21.6429L21.5829 26.115H22.7379V29.76H21.7479C21.7479 29.34 21.6829 29.035 21.5529 28.845C21.4229 28.655 21.2429 28.54 21.0129 28.5C20.7929 28.45 20.5479 28.43 20.2779 28.44H20.0979V30.54C20.0979 30.81 20.0929 31.07 20.0829 31.32C20.0729 31.57 20.0579 31.76 20.0379 31.89C20.1479 31.88 20.2929 31.875 20.4729 31.875C20.6529 31.865 20.8279 31.86 20.9979 31.86C21.1779 31.85 21.3029 31.845 21.3729 31.845V33H16.8579ZM23.9755 33V31.965C24.2555 31.965 24.4805 31.885 24.6505 31.725C24.8205 31.565 24.9605 31.355 25.0705 31.095C25.1905 30.835 25.3055 30.555 25.4155 30.255L28.3405 22.23H29.3905L32.5855 30.405C32.6455 30.555 32.7255 30.785 32.8255 31.095C32.9255 31.395 32.9855 31.66 33.0055 31.89C33.1755 31.87 33.3355 31.86 33.4855 31.86C33.6455 31.85 33.7755 31.845 33.8755 31.845V33H29.8405V32.01C30.1205 32.01 30.3105 31.955 30.4105 31.845C30.5205 31.725 30.5705 31.565 30.5605 31.365C30.5505 31.165 30.4955 30.94 30.3955 30.69L30.0955 29.865L26.8405 29.925L26.6005 30.63C26.5505 30.76 26.4755 30.955 26.3755 31.215C26.2855 31.465 26.2005 31.675 26.1205 31.845C26.2805 31.825 26.4705 31.815 26.6905 31.815C26.9205 31.805 27.0855 31.8 27.1855 31.8V33H23.9755ZM27.2155 28.8H29.7205L29.0305 26.925C28.9005 26.565 28.7855 26.205 28.6855 25.845C28.5855 25.475 28.5105 25.15 28.4605 24.87H28.4455C28.4055 25.04 28.3455 25.295 28.2655 25.635C28.1855 25.975 28.0605 26.38 27.8905 26.85L27.2155 28.8ZM34.6851 33V32.01C34.9151 32 35.1051 31.97 35.2551 31.92C35.4151 31.87 35.5351 31.755 35.6151 31.575C35.7051 31.395 35.7501 31.105 35.7501 30.705V24.96C35.7501 24.69 35.7551 24.43 35.7651 24.18C35.7851 23.93 35.8001 23.74 35.8101 23.61C35.6501 23.62 35.4501 23.63 35.2101 23.64C34.9701 23.64 34.7951 23.645 34.6851 23.655V22.5H38.9901V23.49C38.7701 23.5 38.5801 23.53 38.4201 23.58C38.2601 23.63 38.1351 23.745 38.0451 23.925C37.9651 24.095 37.9251 24.385 37.9251 24.795V27.075H39.0051L40.1601 25.11C40.3301 24.81 40.5101 24.51 40.7001 24.21C40.8901 23.91 41.0501 23.705 41.1801 23.595C41.0201 23.605 40.8501 23.615 40.6701 23.625C40.4901 23.635 40.3451 23.645 40.2351 23.655V22.5H43.9101V23.49C43.6901 23.5 43.4501 23.54 43.1901 23.61C42.9401 23.68 42.6801 23.82 42.4101 24.03C42.1401 24.24 41.8651 24.57 41.5851 25.02L40.1451 27.33C40.3451 27.46 40.5201 27.6 40.6701 27.75C40.8301 27.89 40.9701 28.045 41.0901 28.215L42.6351 30.39C42.8351 30.67 43.0401 30.935 43.2501 31.185C43.4701 31.425 43.6951 31.62 43.9251 31.77C44.1551 31.92 44.3801 32 44.6001 32.01V33H42.2901C42.2101 32.99 42.0801 32.9 41.9001 32.73C41.7201 32.56 41.5301 32.355 41.3301 32.115C41.1301 31.875 40.9601 31.66 40.8201 31.47L39.3351 29.31C39.2051 29.12 39.0601 28.925 38.9001 28.725C38.7501 28.525 38.6051 28.375 38.4651 28.275H37.9251V30.54C37.9251 30.81 37.9201 31.07 37.9101 31.32C37.9001 31.57 37.8851 31.76 37.8651 31.89C38.0251 31.87 38.2251 31.86 38.4651 31.86C38.7151 31.85 38.8901 31.845 38.9901 31.845V33H34.6851ZM50.4638 29.385C50.4638 28.965 50.3988 28.665 50.2688 28.485C50.1388 28.295 49.9588 28.175 49.7288 28.125C49.5088 28.075 49.2638 28.055 48.9938 28.065L48.6038 28.08V30.54C48.6038 30.81 48.5988 31.065 48.5888 31.305C48.5788 31.545 48.5638 31.73 48.5438 31.86H50.5538C50.8538 31.86 51.1438 31.795 51.4238 31.665C51.7038 31.525 51.9338 31.3 52.1138 30.99C52.2938 30.67 52.3838 30.24 52.3838 29.7H53.3588L53.2838 33H45.3638V32.01C45.5938 32 45.7838 31.97 45.9338 31.92C46.0938 31.87 46.2138 31.755 46.2938 31.575C46.3838 31.395 46.4288 31.105 46.4288 30.705V24.96C46.4288 24.69 46.4338 24.43 46.4438 24.18C46.4638 23.93 46.4788 23.74 46.4888 23.61C46.3288 23.62 46.1288 23.63 45.8888 23.64C45.6488 23.64 45.4738 23.645 45.3638 23.655V22.5H52.8638L52.9538 25.41H51.9638C51.9638 24.86 51.8688 24.445 51.6788 24.165C51.4888 23.885 51.2538 23.7 50.9738 23.61C50.6938 23.51 50.4188 23.465 50.1488 23.475L49.6088 23.49C49.3988 23.49 49.2188 23.52 49.0688 23.58C48.9188 23.63 48.8038 23.75 48.7238 23.94C48.6438 24.12 48.6038 24.405 48.6038 24.795V27.045H50.3588L50.2988 25.74H51.4538V29.385H50.4638ZM20.9404 40.86C20.8504 40.3 20.6904 39.835 20.4604 39.465C20.2304 39.085 19.9354 38.8 19.5754 38.61C19.2254 38.42 18.8154 38.33 18.3454 38.34C17.9154 38.34 17.5354 38.46 17.2054 38.7C16.8854 38.94 16.7254 39.25 16.7254 39.63C16.7254 39.94 16.8104 40.21 16.9804 40.44C17.1604 40.67 17.4304 40.885 17.7904 41.085C18.1504 41.285 18.6054 41.5 19.1554 41.73C19.5354 41.88 19.9254 42.055 20.3254 42.255C20.7254 42.455 21.0954 42.695 21.4354 42.975C21.7754 43.245 22.0504 43.565 22.2604 43.935C22.4704 44.295 22.5754 44.72 22.5754 45.21C22.5754 45.8 22.4154 46.325 22.0954 46.785C21.7754 47.245 21.3254 47.605 20.7454 47.865C20.1754 48.115 19.5054 48.24 18.7354 48.24C18.3354 48.24 17.9004 48.175 17.4304 48.045C16.9704 47.925 16.5354 47.745 16.1254 47.505L16.1704 48.135H15.0154V44.625H16.0054C16.1454 45.465 16.4654 46.1 16.9654 46.53C17.4754 46.95 18.0804 47.16 18.7804 47.16C19.1404 47.16 19.4554 47.095 19.7254 46.965C19.9954 46.835 20.2054 46.665 20.3554 46.455C20.5054 46.235 20.5804 46 20.5804 45.75C20.5804 45.4 20.4554 45.11 20.2054 44.88C19.9654 44.65 19.6604 44.455 19.2904 44.295C18.9304 44.135 18.5604 43.98 18.1804 43.83C17.7004 43.63 17.2504 43.42 16.8304 43.2C16.4204 42.97 16.0604 42.71 15.7504 42.42C15.4404 42.13 15.2004 41.8 15.0304 41.43C14.8604 41.05 14.7754 40.615 14.7754 40.125C14.7754 39.815 14.8354 39.495 14.9554 39.165C15.0754 38.825 15.2704 38.515 15.5404 38.235C15.8104 37.945 16.1704 37.71 16.6204 37.53C17.0704 37.35 17.6254 37.26 18.2854 37.26C18.6854 37.26 19.1204 37.32 19.5904 37.44C20.0704 37.56 20.4804 37.74 20.8204 37.98L20.7604 37.365H21.9304V40.86H20.9404ZM23.8452 48V47.01C24.0752 47 24.2652 46.97 24.4152 46.92C24.5752 46.87 24.6952 46.755 24.7752 46.575C24.8652 46.395 24.9102 46.105 24.9102 45.705V39.96C24.9102 39.69 24.9152 39.43 24.9252 39.18C24.9452 38.93 24.9602 38.74 24.9702 38.61C24.8102 38.62 24.6102 38.63 24.3702 38.64C24.1302 38.64 23.9552 38.645 23.8452 38.655V37.5H28.1502V38.49C27.9302 38.5 27.7402 38.53 27.5802 38.58C27.4202 38.63 27.2952 38.745 27.2052 38.925C27.1252 39.095 27.0852 39.385 27.0852 39.795V42.135H31.2102V39.96C31.2102 39.69 31.2152 39.43 31.2252 39.18C31.2352 38.93 31.2502 38.74 31.2702 38.61C31.1102 38.62 30.9102 38.63 30.6702 38.64C30.4302 38.64 30.2552 38.645 30.1452 38.655V37.5H34.4502V38.49C34.2302 38.5 34.0402 38.53 33.8802 38.58C33.7202 38.63 33.5952 38.745 33.5052 38.925C33.4252 39.095 33.3852 39.385 33.3852 39.795V45.54C33.3852 45.81 33.3802 46.07 33.3702 46.32C33.3602 46.57 33.3452 46.76 33.3252 46.89C33.4852 46.87 33.6852 46.86 33.9252 46.86C34.1752 46.85 34.3502 46.845 34.4502 46.845V48H30.1452V47.01C30.3752 47 30.5652 46.97 30.7152 46.92C30.8752 46.87 30.9952 46.755 31.0752 46.575C31.1652 46.395 31.2102 46.105 31.2102 45.705V43.275L27.0852 43.32V45.54C27.0852 45.81 27.0802 46.07 27.0702 46.32C27.0602 46.57 27.0452 46.76 27.0252 46.89C27.1852 46.87 27.3852 46.86 27.6252 46.86C27.8752 46.85 28.0502 46.845 28.1502 46.845V48H23.8452ZM40.764 48.24C39.814 48.24 39.004 48.08 38.334 47.76C37.674 47.44 37.139 47.015 36.729 46.485C36.319 45.945 36.019 45.35 35.829 44.7C35.639 44.05 35.544 43.4 35.544 42.75C35.544 42.12 35.649 41.485 35.859 40.845C36.079 40.195 36.404 39.6 36.834 39.06C37.274 38.52 37.824 38.085 38.484 37.755C39.144 37.425 39.919 37.26 40.809 37.26C41.719 37.26 42.504 37.425 43.164 37.755C43.824 38.085 44.364 38.525 44.784 39.075C45.204 39.615 45.514 40.205 45.714 40.845C45.924 41.485 46.029 42.12 46.029 42.75C46.029 43.37 45.919 44 45.699 44.64C45.489 45.28 45.164 45.875 44.724 46.425C44.294 46.965 43.749 47.405 43.089 47.745C42.429 48.075 41.654 48.24 40.764 48.24ZM40.929 47.145C41.449 47.145 41.884 47.02 42.234 46.77C42.584 46.51 42.864 46.175 43.074 45.765C43.284 45.355 43.434 44.91 43.524 44.43C43.614 43.94 43.659 43.465 43.659 43.005C43.659 42.315 43.599 41.685 43.479 41.115C43.359 40.545 43.174 40.055 42.924 39.645C42.674 39.225 42.354 38.905 41.964 38.685C41.584 38.455 41.134 38.345 40.614 38.355C40.104 38.365 39.674 38.505 39.324 38.775C38.974 39.035 38.694 39.375 38.484 39.795C38.274 40.205 38.124 40.655 38.034 41.145C37.944 41.635 37.899 42.11 37.899 42.57C37.899 43.04 37.949 43.54 38.049 44.07C38.159 44.6 38.329 45.1 38.559 45.57C38.789 46.04 39.099 46.42 39.489 46.71C39.879 47 40.359 47.145 40.929 47.145ZM47.1216 47.01C47.3516 47 47.5416 46.97 47.6916 46.92C47.8516 46.87 47.9716 46.755 48.0516 46.575C48.1416 46.395 48.1866 46.105 48.1866 45.705V39.96C48.1866 39.69 48.1916 39.43 48.2016 39.18C48.2216 38.93 48.2366 38.74 48.2466 38.61C48.0866 38.62 47.8866 38.63 47.6466 38.64C47.4066 38.64 47.2316 38.645 47.1216 38.655V37.5C47.8316 37.49 48.5416 37.485 49.2516 37.485C49.9616 37.485 50.6716 37.48 51.3816 37.47C52.2616 37.46 53.0266 37.575 53.6766 37.815C54.3366 38.055 54.8416 38.425 55.1916 38.925C55.5516 39.425 55.7216 40.075 55.7016 40.875C55.6916 41.275 55.5966 41.67 55.4166 42.06C55.2366 42.44 54.9716 42.79 54.6216 43.11C54.2716 43.42 53.8316 43.675 53.3016 43.875C52.7716 44.075 52.1516 44.185 51.4416 44.205C51.2216 44.215 51.0266 44.22 50.8566 44.22C50.6966 44.22 50.5316 44.215 50.3616 44.205V45.525C50.3616 45.805 50.3566 46.07 50.3466 46.32C50.3366 46.57 50.3216 46.76 50.3016 46.89C50.4116 46.88 50.5516 46.875 50.7216 46.875C50.8916 46.865 51.0566 46.86 51.2166 46.86C51.3866 46.85 51.5066 46.845 51.5766 46.845V48H47.1216V47.01ZM50.3616 43.08C50.4716 43.09 50.5816 43.1 50.6916 43.11C50.8016 43.12 50.9166 43.125 51.0366 43.125C51.5866 43.125 52.0316 43.035 52.3716 42.855C52.7216 42.665 52.9766 42.395 53.1366 42.045C53.2966 41.685 53.3766 41.25 53.3766 40.74C53.3766 40.24 53.3066 39.84 53.1666 39.54C53.0366 39.24 52.8666 39.02 52.6566 38.88C52.4466 38.73 52.2266 38.635 51.9966 38.595C51.7666 38.545 51.5566 38.52 51.3666 38.52C51.1566 38.52 50.9766 38.545 50.8266 38.595C50.6766 38.645 50.5616 38.755 50.4816 38.925C50.4016 39.095 50.3616 39.355 50.3616 39.705V43.08Z"
            fill="white"
          />
        </svg>
      </span>
      <ul>
        <li className="homepage-button" ref={homepageRef}>
          <h6
            onMouseEnter={(event) => placeArrowOnMouseEnter(event)}
            onMouseLeave={() => placeArrowOnMouseLeave()}
            onClick={() => navigate("/")}
          >
            Homepage
          </h6>
          {location === "/" && <ArrowUp arrowRef={arrowRef} />}
        </li>
        <li className="shopping-button" ref={shoppingRef}>
          <h6
            onMouseEnter={(event) => placeArrowOnMouseEnter(event)}
            onMouseLeave={() => placeArrowOnMouseLeave()}
            onClick={() => navigate("/shopping")}
          >
            Shopping
          </h6>
          {location === "/shopping" && <ArrowUp arrowRef={arrowRef} />}
        </li>
      </ul>
      <span className="megaspan">
        <span className="icon-wrapper" onClick={() => navigate("/checkout")}>
          <svg
            className="cart-svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5C0 0.367392 0.0526784 0.240215 0.146447 0.146447C0.240215 0.0526784 0.367392 0 0.5 0H2C2.11153 3.08115e-05 2.21985 0.0373507 2.30773 0.106025C2.39561 0.174699 2.45801 0.270784 2.485 0.379L2.89 2H14.5C14.5734 2.00007 14.6459 2.0163 14.7124 2.04755C14.7788 2.0788 14.8375 2.12429 14.8844 2.1808C14.9313 2.23731 14.9651 2.30345 14.9835 2.37452C15.002 2.44558 15.0045 2.51984 14.991 2.592L13.491 10.592C13.4696 10.7066 13.4087 10.8101 13.3191 10.8846C13.2294 10.9591 13.1166 10.9999 13 11H4C3.88343 10.9999 3.77057 10.9591 3.68091 10.8846C3.59126 10.8101 3.53045 10.7066 3.509 10.592L2.01 2.607L1.61 1H0.5C0.367392 1 0.240215 0.947322 0.146447 0.853553C0.0526784 0.759785 0 0.632608 0 0.5ZM3.102 3L4.415 10H12.585L13.898 3H3.102ZM5 11C4.46957 11 3.96086 11.2107 3.58579 11.5858C3.21071 11.9609 3 12.4696 3 13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15C5.53043 15 6.03914 14.7893 6.41421 14.4142C6.78929 14.0391 7 13.5304 7 13C7 12.4696 6.78929 11.9609 6.41421 11.5858C6.03914 11.2107 5.53043 11 5 11ZM12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11ZM5 12C5.26522 12 5.51957 12.1054 5.70711 12.2929C5.89464 12.4804 6 12.7348 6 13C6 13.2652 5.89464 13.5196 5.70711 13.7071C5.51957 13.8946 5.26522 14 5 14C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12ZM12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12Z"
              fill="black"
            />
          </svg>
        </span>
      </span>
    </header>
  );
}
