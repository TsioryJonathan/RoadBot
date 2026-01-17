import React from "react";

function Dot() {
  return (
    <div className="flex space-x-3 pt-5">
      <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full animate-bounce"></span>
      <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full animate-bounce delay-300"></span>
      <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full animate-bounce delay-600"></span>
    </div>
  );
}

export default Dot;
