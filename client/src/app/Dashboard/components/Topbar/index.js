import React from "react";

const Topbar = () => {
  return (
    <div className="p-6 flex justify-between gap-4 items-center">
      <div className="text-dark text-xl font-bold">Home</div>
      <div className="flex items-center justify-between gap-2 rounded-full border border-secondary-shade shadow-sm py-2 px-3">
        <div className="rounded-full w-6 h-6 bg-primary-tint flex justify-center items-center text-sm font-semibold text-secondary-tint">
          RB
        </div>
        <div className="text-dark">raed bahri</div>
        <i className="fas fa-chevron-down text-dark"></i>
      </div>
    </div>
  );
};

export default Topbar;
