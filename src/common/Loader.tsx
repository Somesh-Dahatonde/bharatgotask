import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-8 h-8 border-2 border-t-0 border-primary rounded-full animate-spin"></div>
    </div>
  );
}
