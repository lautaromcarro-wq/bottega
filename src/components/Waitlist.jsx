import React, { useState, useRef, useEffect } from 'react';

/**
 * Waitlist — inline email capture.
 * Initial state: CTA button (editorial style).
 * On click: expands to [email input] + submit.
 * On submit: success message with hairline.
 *
 * Wire the onSubmit handler to Formspree / ConvertKit / custom
 * endpoint when going to production. Today it only captures
 * client-side and shows the success state.
 */

const STATES = {
  IDLE: 'idle',
  OPEN: 'open',
  SUBMITTING: 'submitting',
  DONE: 'done',
};

export function Waitlist({
  endpoint,
  ctaLabel = 'Solicitar acceso',
  successMessage = 'Gracias. Te vamos a escribir.',
  placeholder = 'tu@correo.com',
}) {
  const [state, setState] = useState(STATES.IDLE);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (state === STATES.OPEN && inputRef.current) {
      inputRef.current.focus();
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Ingresá un correo válido.');
      return;
    }

    setState(STATES.SUBMITTING);

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error('bad response');
      } else {
        /* No endpoint wired yet — simulate latency so UX is consistent */
        await new Promise((r) => setTimeout(r, 600));
      }
      setState(STATES.DONE);
    } catch (err) {
      setError('No pudimos enviarlo. Probá de nuevo.');
      setState(STATES.OPEN);
    }
  };

  if (state === STATES.DONE) {
    return (
      <div className="waitlist waitlist-done">
        <hr className="hairline" />
        <p className="waitlist-success">{successMessage}</p>
      </div>
    );
  }

  if (state === STATES.IDLE) {
    return (
      <button
        type="button"
        className="btn-editorial"
        onClick={() => setState(STATES.OPEN)}
      >
        {ctaLabel}
      </button>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <div className="waitlist-input-row">
        <input
          ref={inputRef}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === STATES.SUBMITTING}
          className="waitlist-input"
          aria-label="Email"
        />
        <button
          type="submit"
          className="waitlist-submit"
          disabled={state === STATES.SUBMITTING}
          aria-label="Enviar"
        >
          {state === STATES.SUBMITTING ? (
            <span className="waitlist-sending">Enviando</span>
          ) : (
            <span aria-hidden="true">→</span>
          )}
        </button>
      </div>
      {error && <p className="waitlist-error">{error}</p>}
    </form>
  );
}
