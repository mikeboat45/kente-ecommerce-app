import { CheckCircle, Info, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Toast = () => {
  const { toast } = useCart();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md ${
        toast.type === "success" 
          ? "bg-amber-400/90 text-white" 
          : "bg-gray-800/90 text-white"
      }`}>
        {toast.type === "success" ? (
          <CheckCircle size={20} className="text-white" />
        ) : (
          <Info size={20} className="text-white" />
        )}
        <p className="text-sm font-bold tracking-wide">
          {toast.message}
        </p>
      </div>
    </div>
  );
};

export default Toast;
