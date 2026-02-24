import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MessageSuccess from "@/assets/message-success.svg";
import MessageFailed from "@/assets/message-failed.svg";
import Image from "next/image";

type SubmitResultModalProps = {
  status: "success" | "error";
  loading?: boolean;
  onRetry: () => void;
  onClose: () => void;

  /** new optional props */
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
};

const Modal = ({
  status,
  loading = false,
  onRetry,
  onClose,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: SubmitResultModalProps) => {
  const isError = status === "error";

  /* 🔒 Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ⌨️ ESC key close */
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeOnEsc, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={closeOnOverlayClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      {/* MODAL CARD */}
      <div
        className="
    absolute
    w-[479px]
    left-1/2 -translate-x-1/2

    flex flex-col items-center
    px-8 py-10 gap-6

    bg-[#020203]
    border border-[#0F0F0F]
    rounded-[16px]
  "
      >
        {/* ICON */}
        <div className="p-3 text-center h-[160px] md:h-[225px] lg:h-[225px]">
          <Image
            src={isError ? MessageFailed : MessageSuccess}
            alt={isError ? "Error" : "Success"}
            width={225}
            height={225}
            className="
    w-[140px]
    md:w-[180px]
    lg:w-[225px]
    mx-auto
    object-contain
  "
          />
        </div>

        {/* CONTENT */}
        <div className="lg:p-8 md:p-8 p-4 text-center h-[214px] lg:h-[254px] md:h-[254px]">
          <p className="text-lg font-semibold text-neutral-25 dark:text-dark-neutral-25 lg:mb-4">
            {isError ? "Oops! Something went wrong." : "Message Received!"}
          </p>

          <p className="text-neutral-200 p-4 text-sm dark:text-dark-neutral-25 mb-4 lg:text-md">
            {isError
              ? "We couldn’t send your message. Please try again or check your connection."
              : "Thanks for reaching out — we’ll get back to you as soon as possible."}
          </p>

          {isError ? (
            <Button
              disabled={loading}
              onClick={onRetry}
              className="rounded-full"
            >
              Try Again
            </Button>
          ) : (
            <Button onClick={onClose} className="rounded-full">
              Close
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
