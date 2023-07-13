import { useRef } from "react";

const SearchBar = () => {
  return (
    <div className="pt-3">
      <div className=" flex flex-1 flex-col">
        <div className="absolute pt-2.5 pl-3">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0124 20H11.9876V18.5734C14.1004 18.465 15.5271 17.237 15.5271 15.0339C15.5271 13.0655 14.4255 11.9097 12.5293 11.1693L11.9876 10.9526V7.35892C12.6557 7.55756 13.0892 8.08126 13.2156 8.80361H15.202C15.202 6.97968 13.7573 5.6614 11.9876 5.40858V4H11.0124V5.39052C8.95371 5.51693 7.50902 6.7991 7.50902 8.83973C7.50902 10.6275 8.55642 11.8375 10.3984 12.5418L11.0124 12.7765V16.605C10.1636 16.4244 9.56771 15.8284 9.45936 14.7449H7.4729C7.50902 17.0384 9.06207 18.3205 11.0124 18.5553V20ZM9.49547 8.82167C9.49547 8.02709 10.0914 7.43115 11.0124 7.30474V10.5734C9.98306 10.14 9.49547 9.63431 9.49547 8.82167ZM13.5406 15.088C13.5406 15.9549 12.8724 16.5327 11.9876 16.6591V13.1558C12.9989 13.6253 13.5406 14.149 13.5406 15.088Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <input
          type="text"
          className="pb-3.5 p-2 pl-10 font-cusweight font-custom text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
