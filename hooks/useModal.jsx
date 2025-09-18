import { useState, useEffect } from "react";

let externalResolve, externalReject;

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({});

  function Modal(options = {}) {
    setOptions(options);
    setIsOpen(true);

    return new Promise((resolve, reject) => {
      externalResolve = resolve;
      externalReject = reject;
    });
  }

  function ModalComponent() {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        {/* Backdrop with blur effect */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => {
            setIsOpen(false);
            externalReject();
          }}
        ></div>
        {/* Modal content */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
          {/* Header section with icon */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {options.title || "Confirm Action"}
              </h3>
            </div>
          </div>

          {/* Message content */}
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              {options.message ||
                "Are you sure you want to proceed with this action? This cannot be undone."}
            </p>
          </div>

          {/* Action buttons */}
          <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              onClick={() => {
                setIsOpen(false);
                externalReject();
              }}
              className="px-6 py-2.5 text-gray-700 bg-gray-100 border border-gray-200 rounded-lg font-medium transition-all duration-200 hover:bg-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                externalResolve();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transform"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }

  return { Modal, ModalComponent };
}
