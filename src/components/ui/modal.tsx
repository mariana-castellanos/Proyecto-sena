import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="absolute inset-0 bg-black opacity-90 z-40"></div>

      <div
        className="relative z-50 bg-white p-6 rounded-md shadow-lg max-w-md w-full bg-opacity-100 "
        style={{ backgroundColor: "#ffffff" }}
      >
        {children}
      </div>
    </div>
  );
}
