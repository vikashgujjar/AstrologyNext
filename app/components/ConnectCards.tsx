import Link from "next/link";

export default function ConnectCards() {
  return (
    <div className="">
      <div className="pt-8 px-4 sm:pt-10 md:pt-14 lg:pt-20 sm:px-10 md:px-14 lg:px-20">
        <h1 className="sm:hidden block font-playfair-display text-secondary text-2xl font-medium leading-5 mb-3">
          Connect with Us
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2.5 md:gap-5">

          {/* Chat with Astrologer */}
          <Link className="w-full" href="/connect-with-astrologer">
            <div className="rounded-xl border bg-card text-card-foreground shadow border-foreground/40 flex flex-col items-center justify-center p-4 h-24 sm:h-28">
              <span className="[&>svg]:size-6 [&>svg]:fill-secondary sm:bg-gradient-to-r from-violet-300 to-violet-200 bg-none sm:p-2.5 p-0 rounded-full mb-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2C8.24566 2 6.08365 2.89553 4.48959 4.48959C2.89553 6.08365 2 8.24566 2 10.5C2 12.7543 2.89553 14.9163 4.48959 16.5104C6.08365 18.1045 8.24566 19 10.5 19H14.75C16.0703 19 16.7305 19 17.2509 18.7847C17.5948 18.6423 17.9072 18.4335 18.1704 18.1704C18.4335 17.9072 18.6423 17.5948 18.7847 17.2509C19 16.7305 19 16.0703 19 14.75V10.5C19 8.24566 18.1045 6.08365 16.5104 4.48959C14.9163 2.89553 12.7543 2 10.5 2ZM6.72222 9.55556C6.72222 9.30507 6.82173 9.06485 6.99884 8.88773C7.17596 8.71061 7.41618 8.61111 7.66667 8.61111H13.3333C13.5838 8.61111 13.824 8.71061 14.0012 8.88773C14.1783 9.06485 14.2778 9.30507 14.2778 9.55556C14.2778 9.80604 14.1783 10.0463 14.0012 10.2234C13.824 10.4005 13.5838 10.5 13.3333 10.5H7.66667C7.41618 10.5 7.17596 10.4005 6.99884 10.2234C6.82173 10.0463 6.72222 9.80604 6.72222 9.55556ZM9.55556 13.3333C9.55556 13.0829 9.65506 12.8426 9.83218 12.6655C10.0093 12.4884 10.2495 12.3889 10.5 12.3889H13.3333C13.5838 12.3889 13.824 12.4884 14.0012 12.6655C14.1783 12.8426 14.2778 13.0829 14.2778 13.3333C14.2778 13.5838 14.1783 13.824 14.0012 14.0012C13.824 14.1783 13.5838 14.2778 13.3333 14.2778H10.5C10.2495 14.2778 10.0093 14.1783 9.83218 14.0012C9.65506 13.824 9.55556 13.5838 9.55556 13.3333Z" fill="#4E3C7F" />
                </svg>
              </span>
              <span className="text-primary text-base sm:text-xl font-semibold font-quicksand text-center sm:whitespace-nowrap whitespace-pre sm:mt-3 mt-0 leading-4">
                {`Chat with\nAstrologer`}
              </span>
            </div>
          </Link>

          {/* Talk to Astrologer */}
          <Link className="w-full" href="/connect-with-astrologer">
            <div className="rounded-xl border bg-card text-card-foreground shadow border-foreground/40 flex flex-col items-center justify-center p-4 h-24 sm:h-28">
              <span className="[&>svg]:size-6 [&>svg]:fill-secondary sm:bg-gradient-to-r from-violet-300 to-violet-200 bg-none sm:p-2.5 p-0 rounded-full mb-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M15.6218 18.9999C14.881 18.9999 13.8403 18.7319 12.2819 17.8614C10.3868 16.7989 8.92101 15.818 7.03621 13.9385C5.21896 12.1227 4.33463 10.9471 3.09694 8.69538C1.69871 6.15293 1.93706 4.82024 2.2035 4.25066C2.5208 3.56989 2.98915 3.16272 3.59452 2.75859C3.93837 2.53335 4.30224 2.34027 4.68153 2.18179C4.71949 2.16548 4.75478 2.14992 4.78629 2.13588C4.97416 2.05126 5.25882 1.92337 5.61938 2.05998C5.86001 2.1503 6.07483 2.3351 6.4111 2.66713C7.10073 3.34714 8.04313 4.8616 8.39079 5.60536C8.62421 6.10664 8.77869 6.43754 8.77907 6.80866C8.77907 7.24315 8.56045 7.57822 8.29515 7.93985C8.24543 8.00778 8.19609 8.07267 8.14827 8.13566C7.85944 8.51513 7.79605 8.62479 7.8378 8.8206C7.92244 9.21411 8.55362 10.3855 9.59091 11.4203C10.6282 12.4552 11.7661 13.0464 12.1612 13.1306C12.3654 13.1742 12.4773 13.1082 12.869 12.8092C12.9252 12.7663 12.9829 12.7219 13.0432 12.6775C13.4478 12.3766 13.7674 12.1637 14.1917 12.1637H14.194C14.5633 12.1637 14.8794 12.3239 15.4032 12.588C16.0864 12.9325 17.6467 13.8626 18.331 14.5529C18.6639 14.8883 18.8495 15.1023 18.9402 15.3425C19.0768 15.7042 18.9481 15.9876 18.8643 16.1774C18.8502 16.2089 18.8346 16.2434 18.8183 16.2817C18.6586 16.6603 18.4643 17.0233 18.238 17.3662C17.8346 17.9696 17.4258 18.4367 16.7434 18.7543C16.393 18.9201 16.0095 19.004 15.6218 18.9999Z" fill="#4E3C7F" />
                </svg>
              </span>
              <span className="text-primary text-base sm:text-xl font-semibold font-quicksand text-center sm:whitespace-nowrap whitespace-pre sm:mt-3 mt-0 leading-4">
                {`Talk to\nAstrologer`}
              </span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
