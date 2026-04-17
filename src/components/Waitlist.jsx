import React, { useState, useRef, useEffect } from 'react';

/**
 * Waitlist — inline email capture.
 * Initial state: CTA button (editorial style).
 * On click: expands to [email input] + submit.
 * On submit: success message with hairline.
 *
 * Integration — ConvertKit (Kit):
 *   Reads VITE_CONVERTKIT_API_KEY and VITE_CONVERTKIT_FORM_ID
 *   from Vite env. Posts to api.convertkit.com/v3/forms/{formId}/subscribe.
 *   Both values are configured in the Vercel dashboard, not in code.
 *
 * Fallback: if env vars are absent, the component still renders
 * and simulates a successful submit so UX is consistent in dev.
 * Useful for local work without hitting the real API.
 *
 * Pass `endpoint` prop to override with a different provider
 * (Formspree, custom serverless, etc.) — we'll POST { email }
 * as JSON to whatever URL you give us.
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

    const ckApiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
    const ckFormId = import.meta.env.VITE_CONVERTKIT_FORM_ID;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error('bad response');
      } else if (ckApiKey && ckFormId) {
        /* ConvertKit subscribe endpoint */
        const res = await fetch(
          `https://api.convertkit.com/v3/forms/${ckFormId}/subscribe`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_key: ckApiKey, email }),
          }
        );
        if (!res.ok) throw new Error('ConvertKit rejected request');
        const data = await res.json();
        if (data.error) throw new Error(data.error);
      } else {
        /* No provider configured — simulate latency for dev UX */
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
