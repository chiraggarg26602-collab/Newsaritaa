import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#1E2B3A] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#D4A359]/30 flex items-center gap-3 animate-slideUp">
      <CheckCircle className="w-5 h-5 text-[#D4A359] shrink-0" />
      <span className="text-xs font-semibold">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-white/60 hover:text-white"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
