import React, { useRef, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = React.useState<'idle'|'loading'|'success'|'error'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020] rounded-2xl shadow-2xl p-8 m-4 animate-fadeIn"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4 text-white text-center">Contact Us</h3>
        <form className="flex flex-col gap-4" onSubmit={async e => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
  const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
  if (!name || !email || !message) return;
  setStatus('loading');
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    if (res.ok) {
      setStatus('success');
      setTimeout(() => { setStatus('idle'); onClose(); }, 1200);
      form.reset();
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
}}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="rounded-lg px-4 py-3 bg-[#23243a] text-white placeholder-gray-400 border border-transparent focus:border-blue-400 outline-none transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="rounded-lg px-4 py-3 bg-[#23243a] text-white placeholder-gray-400 border border-transparent focus:border-blue-400 outline-none transition"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="rounded-lg px-4 py-3 bg-[#23243a] text-white placeholder-gray-400 border border-transparent focus:border-blue-400 outline-none transition"
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg hover:brightness-110 transition disabled:opacity-60"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send'}
          </button>
          {status === 'error' && (
            <div className="text-red-400 text-center mt-2">Something went wrong. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
