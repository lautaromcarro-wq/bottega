import React from 'react';

/**
 * La Bottega — Main Application
 * Editorial dark-warm composition. See bottega_visual.md + aesthetic_moodboard.md.
 * Voice per bottega_voice.md — calmo, sobrio, sin hype, sin patrones "no X, es Y".
 */

const BrandMark = () => (
  <header className="brand-mark">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12,3 22,21 2,21" />
    </svg>
    <span>La Bottega</span>
  </header>
);

const Hairline = ({ center = false }) => (
  <hr className={`hairline ${center ? 'hairline-center' : ''}`} />
);

function App() {
  return (
    <main className="bottega-web">

      {/* ========== HERO ========== */}
      <section id="hero" className="hero-chapter">
        <div className="hero-content animate-fade">
          <BrandMark />
          <Hairline />
          <h1 className="hero-title">El oficio de entender</h1>
          <p className="hero-subtitle">cómo crecen los negocios en internet.</p>
          <p className="hero-body">
            Un taller digital. Se aprende observando negocios reales,
            practicando sobre cuentas reales, y repitiendo hasta que
            los patrones emergen.
          </p>
          <footer className="hero-footer">
            <span>MMXXVI</span>
            <span>·</span>
            <span>Taller Digital</span>
          </footer>
        </div>
      </section>

      {/* ========== CAPÍTULO I — LA DECLARACIÓN ========== */}
      <section id="declaration" className="chapter-container animate-fade">
        <span className="section-label">Capítulo I · La Declaración</span>
        <Hairline />
        <div className="quote-block">
          <h2 className="quote-heading">
            Internet es el maestro.
          </h2>
          <p className="quote-heading-italic">
            Nosotros, los aprendices.
          </p>
          <p className="quote-body">
            El conocimiento no se transmite de forma directa.
            Se observa, se interpreta y se construye a través de la experiencia.
            Aprender es prestar atención, ejecutar, equivocarse, ajustar.
          </p>
          <footer className="quote-attribution">— La Bottega</footer>
        </div>
      </section>

      {/* ========== CAPÍTULO II — EL RUIDO ========== */}
      <section id="problem" className="chapter-container animate-fade">
        <span className="section-label">Capítulo II · El Ruido</span>
        <Hairline />
        <h2>La mayoría optimiza campañas sin entender el negocio.</h2>
        <div className="chapter-content">
          <p>
            Miles de cursos enseñan tácticas. Casi ninguno enseña a pensar
            el negocio. El resultado son operadores que saben tocar botones
            pero no saben por qué.
          </p>
          <p>
            La asimetría nunca estuvo en la herramienta. Siempre estuvo
            en el criterio del que la usa.
          </p>
        </div>
      </section>

      {/* ========== BREAK ========== */}
      <section id="break-1" className="break-chapter">
        <blockquote className="serif-quote">
          "Sistema antes que táctica. Contexto antes que métrica. Negocio antes que canal."
        </blockquote>
      </section>

      {/* ========== CAPÍTULO III — EL OFICIO ========== */}
      <section id="craft" className="chapter-container animate-fade">
        <span className="section-label">Capítulo III · El Oficio</span>
        <Hairline />
        <h2>Práctica, observación, repetición.</h2>
        <div className="chapter-content">
          <p>
            En el Renacimiento, las <em>botteghe</em> eran talleres donde
            se aprendía trabajando. El aprendiz observaba al maestro.
            Copiaba. Fallaba. Volvía a empezar. Hasta que la técnica
            dejaba de ser técnica y se volvía criterio.
          </p>
          <p>
            El método no cambió. Cambió el material. Hoy el taller es
            digital y el oficio es otro: entender cómo crecen los
            negocios en internet.
          </p>
        </div>
      </section>

      {/* ========== CAPÍTULO IV — EL TALLER ========== */}
      <section id="workshop" className="chapter-container animate-fade">
        <span className="section-label">Capítulo IV · El Taller</span>
        <Hairline />
        <h2>Cómo operamos.</h2>
        <div className="chapter-content">
          <p>
            Cada semana se analiza un negocio, una campaña, una decisión real.
            Se desarma en público. Se discute con quienes están operando algo
            parecido. Se vuelve a armar.
          </p>
          <p>
            El ritmo es pausado. El contenido es denso. La frecuencia no
            importa tanto como la consistencia.
          </p>
        </div>
      </section>

      {/* ========== CAPÍTULO V — DENTRO DE LA BOTTEGA ========== */}
      <section id="inside" className="chapter-container animate-fade">
        <span className="section-label">Capítulo V · Dentro de la Bottega</span>
        <Hairline />
        <h2>Lo que vas a trabajar.</h2>
        <div className="chapter-content">
          <p>
            <em>Operator Calls.</em> Análisis de campañas y negocios reales,
            una vez por semana. En vivo.
          </p>
          <p>
            <em>Auditorías.</em> Revisión de cuentas, funnels, landings —
            con criterio, no con checklist.
          </p>
          <p>
            <em>Playbooks.</em> Conocimiento sistematizado en documentos
            que se pueden ejecutar.
          </p>
          <p>
            <em>Frameworks.</em> Modelos mentales reutilizables para pensar
            negocios digitales.
          </p>
          <p>
            <em>Comunidad privada.</em> Gente seria, sin ruido, que está
            construyendo algo.
          </p>
        </div>
      </section>

      {/* ========== BREAK 2 ========== */}
      <section id="break-2" className="break-chapter">
        <blockquote className="serif-quote">
          "El maestro no es una persona. Es Internet."
        </blockquote>
      </section>

      {/* ========== CAPÍTULO VI — LA GENTE ========== */}
      <section id="community" className="chapter-container animate-fade">
        <span className="section-label">Capítulo VI · La Gente</span>
        <Hairline />
        <h2>Para quién es este taller.</h2>
        <div className="chapter-content">
          <p>
            Marketers, freelancers, founders, media buyers, operadores de
            e-commerce. Gente entre 22 y 35 años que trabaja en digital
            o quiere entrar en serio.
          </p>
          <p>
            El perfil común: ambición, ganas de claridad, cansancio del
            contenido superficial. Interés real por entender cómo
            funcionan las cosas.
          </p>
          <p>
            La Bottega no busca crear seguidores. Busca formar operadores
            capaces de entender, decidir y construir.
          </p>
        </div>
      </section>

      {/* ========== INVITACIÓN FINAL ========== */}
      <section id="invitation" className="chapter-container animate-fade">
        <span className="section-label">Capítulo Final · La Invitación</span>
        <Hairline />
        <h2>Entrar al taller.</h2>
        <div className="chapter-content">
          <p>
            Si llegaste hasta acá, probablemente estés buscando un lugar
            donde pensar mejor.
          </p>
          <p>
            La puerta está abierta. El ritmo lo marcás vos.
          </p>
          <a href="#" className="btn-editorial">Solicitar acceso</a>
        </div>
      </section>

      <footer className="bottega-footer">
        <p>
          La Bottega Digital · MMXXVI · <em>Memento Audere Semper</em>
        </p>
      </footer>
    </main>
  );
}

export default App;
