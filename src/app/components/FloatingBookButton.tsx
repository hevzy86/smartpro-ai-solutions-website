"use client";

interface FloatingBookButtonProps {
  onClick: () => void;
}

export default function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  return (
    <button
      onClick={onClick}
      className="custom-book-my-cal-btn z-[999999999999] fixed md:bottom-6 bottom-4 flex h-16 origin-center bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 cursor-pointer items-center rounded-full py-4 px-6 text-base outline-none drop-shadow-md transition focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95 md:right-10 right-4 text-white font-semibold hover:scale-105"
    >
      <div className="mr-3 flex items-center justify-center">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div className="font-semibold leading-5 antialiased">Book my Cal</div>
    </button>
  );
}
