"use client";

export default function ContactForm() {
  return (
    <form
      className="card-surface flex flex-col gap-5 p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-taupe">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            required
            className="rounded-xl border border-taupe/25 bg-transparent px-4 py-3 text-sm text-forest focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-widest2 text-taupe">
            Correo
          </label>
          <input
            id="email"
            type="email"
            required
            className="rounded-xl border border-taupe/25 bg-transparent px-4 py-3 text-sm text-forest focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs uppercase tracking-widest2 text-taupe">
          Asunto
        </label>
        <input
          id="subject"
          type="text"
          className="rounded-xl border border-taupe/25 bg-transparent px-4 py-3 text-sm text-forest focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-taupe">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="resize-none rounded-xl border border-taupe/25 bg-transparent px-4 py-3 text-sm text-forest focus:outline-none"
        />
      </div>
      <button type="submit" className="btn-primary mt-2 self-start">
        Enviar mensaje
      </button>
    </form>
  );
}
