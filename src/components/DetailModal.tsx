import { useEffect } from 'react';

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function DetailModal({ open, onClose, title, subtitle, children }: DetailModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="detail-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
    >
      <div
        className="detail-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="detail-modal-header">
          <h2 id="detail-modal-title" className="detail-modal-title">{title}</h2>
          {subtitle && <p className="detail-modal-subtitle">{subtitle}</p>}
          <button
            type="button"
            className="detail-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="detail-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
