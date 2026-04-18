import React, { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { WordRotator, ReadingProgress } from './components/motion';
import { Waitlist } from './components/Waitlist';

/**
 * La Bottega — Main Application
 * Editorial dark-warm composition with measured motion:
 *   - Stagger fade-in per element in hero
 *   - Hairline draw-in (width 0 → 48px)
 *   - Soft parallax on the Vermeer backdrop
 *   - Scroll-triggered reveal per chapter (IntersectionObserver)
 */

const BrandMark = ({ i = 0 }) => (
  <header className="brand-mark stagger-item" style={{ '--i': i }}>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12,3 22,21 2,21" />
    </svg>
    <span>La Bottega</span>
  </header>
);

const Hairline = ({ i = 0, center = false }) => (
  <hr
    className={`hairline stagger-hairline ${center ? 'hairline-center' : ''}`}
    style={{ '--i': i }}
  />
);

const StaggerText = ({ as: Tag = 'p', className = '', i = 0, children, ...rest }) => (
  <Tag className={`stagger-item ${className}`} style={{ '--i': i }} {...rest}>
    {children}
  </Tag>
);

const Chapter = ({ id, label, title, children }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id={id} ref={ref} className="chapter-container reveal-outer">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <span className="section-label stagger-item" style={{ '--i': 0 }}>{label}</span>
        <Hairline i={1} />
        {title && <StaggerText as="h2" i={2}>{title}</StaggerText>}
        <div className="chapter-content">
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child, {
              style: { ...(child.props.style || {}), '--i': 3 + idx },
              className: `${child.props.className || ''} stagger-item`.trim(),
            });
          })}
        </div>
      </div>
    </section>
  );
};

function App() {
  /* Soft parallax for the Vermeer backdrop */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty('--hero-parallax', `${y * 0.35}px`);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bottega-web">
      <ReadingProgress />
      {/* ========== HERO ========== */}
      <section id="hero" className="hero-chapter">
        <div className="hero-content">
          <BrandMark i={0} />
          <Hairline i={1} />
          <StaggerText as="h1" className="hero-title" i={2}>
            El oficio de entender
          </StaggerText>
          <StaggerText as="p" className="hero-subtitle" i={3}>
            cómo crecen los negocios en{' '}
            <WordRotator
              words={['internet.', 'pantallas.', 'feeds.', 'algoritmos.']}
              interval={4500}
            />
          </StaggerText>
          <StaggerText as="p" className="hero-body" i={5}>
            Un taller digital. Se aprende observando negocios reales,
            practicando sobre cuentas reales, y repitiendo hasta que
            los patrones emergen.
          </StaggerText>
          <footer className="hero-footer stagger-item" style={{ '--i': 7 }}>
            <span>MMXXVI</span>
            <span>·</span>
            <span>Taller Digital</span>
          </footer>
        </div>
      </section>

      {/* ========== CAPÍTULO I — LA DECLARACIÓN ========== */}
      <div className="bg-backdrop bg-declaracion">
        <Chapter id="declaration" label="Capítulo I · La Declaración" title={null}>
          <div className="quote-block">
            <h2 className="quote-heading">Internet es el maestro.</h2>
            <p className="quote-heading-italic">Nosotros, los aprendices.</p>
            <p className="quote-body">
              El conocimiento no se transmite de forma directa.
              Se observa, se interpreta y se construye a través de la experiencia.
              Aprender es prestar atención, ejecutar, equivocarse, ajustar.
            </p>
            <footer className="quote-attribution">— La Bottega</footer>
          </div>
        </Chapter>
      </div>

      {/* ========== CAPÍTULO II — EL RUIDO ========== */}
      <Chapter
        id="problem"
        label="Capítulo II · El Ruido"
        title="La mayoría optimiza campañas sin entender el negocio."
      >
        <p>
          Miles de cursos enseñan tácticas. Casi ninguno enseña a pensar
          el negocio. El resultado son operadores que saben tocar botones
          pero no saben por qué.
        </p>
        <p>
          La asimetría nunca estuvo en la herramienta. Siempre estuvo
          en el criterio del que la usa.
        </p>
      </Chapter>

      {/* ========== BREAK ========== */}
      <div className="bg-backdrop bg-sistema">
        <BreakQuote text='"Sistema antes que táctica. Contexto antes que métrica. Negocio antes que canal."' />
      </div>

      {/* ========== CAPÍTULO III — EL OFICIO ========== */}
      <div className="bg-backdrop bg-oficio">
        <Chapter
          id="craft"
          label="Capítulo III · El Oficio"
          title="Práctica, observación, repetición."
        >
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
        </Chapter>
      </div>

      {/* ========== CAPÍTULO IV — EL TALLER ========== */}
      <Chapter
        id="workshop"
        label="Capítulo IV · El Taller"
        title="Cómo operamos."
      >
        <p>
          Cada semana se analiza un negocio, una campaña, una decisión real.
          Se desarma en público. Se discute con quienes están operando algo
          parecido. Se vuelve a armar.
        </p>
        <p>
          El ritmo es pausado. El contenido es denso. La frecuencia no
          importa tanto como la consistencia.
        </p>
      </Chapter>

      {/* ========== CAPÍTULO V — DENTRO DE LA BOTTEGA ========== */}
      <div className="bg-backdrop bg-bottega">
        <Chapter
          id="inside"
          label="Capítulo V · Dentro de la Bottega"
          title="Lo que vas a trabajar."
        >
          <p><em>Operator Calls.</em> Análisis de campañas y negocios reales, una vez por semana. En vivo.</p>
          <p><em>Auditorías.</em> Revisión de cuentas, funnels, landings — con criterio, no con checklist.</p>
          <p><em>Playbooks.</em> Conocimiento sistematizado en documentos que se pueden ejecutar.</p>
          <p><em>Frameworks.</em> Modelos mentales reutilizables para pensar negocios digitales.</p>
          <p><em>Comunidad privada.</em> Gente seria, sin ruido, que está construyendo algo.</p>
        </Chapter>
      </div>

      {/* ========== BREAK 2 ========== */}
      <div className="bg-backdrop bg-maestro">
        <BreakQuote text='"El maestro no es una persona. Es Internet."' />
      </div>

      {/* ========== CAPÍTULO VI — LA GENTE ========== */}
      <Chapter
        id="community"
        label="Capítulo VI · La Gente"
        title="Para quién es este taller."
      >
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
      </Chapter>

      {/* ========== INVITACIÓN FINAL ========== */}
      <div className="bg-backdrop bg-invitacion">
        <Chapter
          id="invitation"
          label="Capítulo Final · La Invitación"
          title="Entrar al taller."
        >
          <p>Si llegaste hasta acá, probablemente estés buscando un lugar donde pensar mejor.</p>
          <p>
            <em>El conocimiento queda abierto. El acceso al taller, no.</em>
          </p>
          <p>La puerta está abierta. El ritmo lo marcás vos.</p>
          <Waitlist />
        </Chapter>
      </div>

      <footer className="bottega-footer">
        <p>
          La Bottega · MMXXVI ·{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bajo Creative Commons
          </a>{' '}
          · <em>Memento Audere Semper</em>
        </p>
      </footer>
    </main>
  );
}

function BreakQuote({ text }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.35 });
  return (
    <section ref={ref} className="break-chapter reveal-outer">
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <blockquote className="serif-quote">{text}</blockquote>
      </div>
    </section>
  );
}

export default App;
