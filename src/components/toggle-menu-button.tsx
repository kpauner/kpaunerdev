import { useStore } from "@/lib/store";

export default function ToggleMenuButton() {
  const { isOpen, onOpen, onClose } = useStore();
  return (
    <button
      className="font-spacegrotesk fixed bottom-20  right-24 z-50 flex items-center justify-center text-7xl font-extrabold text-white"
      onClick={isOpen ? onClose : onOpen}
    >
      {isOpen ? "Close" : "Open"}
    </button>
  );
}
