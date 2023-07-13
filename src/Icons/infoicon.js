import React from "react";

function Infoicon() {
  return (
    <div className="pt-1.5 pl-2">
      <div className="hover:cursor-pointer">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.857 2.5C6.61869 2.5 2.35699 6.7617 2.35699 12C2.35699 17.2383 6.61869 21.5 11.857 21.5C17.0953 21.5 21.357 17.2383 21.357 12C21.357 6.7617 17.0953 2.5 11.857 2.5ZM11.857 19.6C7.66654 19.6 4.25699 16.1905 4.25699 12C4.25699 7.80955 7.66654 4.4 11.857 4.4C16.0474 4.4 19.457 7.80955 19.457 12C19.457 16.1905 16.0474 19.6 11.857 19.6Z"
            fill="#94A3B8"
          />
          <path
            d="M10.9071 11.05H12.8071V16.75H10.9071V11.05ZM10.9071 7.25H12.8071V9.15H10.9071V7.25Z"
            fill="#94A3B8"
          />
        </svg>
      </div>
    </div>
  );
}

export default Infoicon;
