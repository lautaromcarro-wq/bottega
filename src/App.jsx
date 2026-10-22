import React, { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ReadingProgress } from './components/motion';
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
            cómo crecen los negocios en internet.
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
            <h2 className="quote-heading">El negocio es el maestro.</h2>
            <p className="quote-heading-italic">Nosotros, los aprendices.</p>
            <p className="quote-body">
              Cada negocio es un mundo, igual que cada persona. Tiene sus
              números y tiene su gente: clientes y audiencia que enseñan con
              lo que dicen y con lo que hacen. Los números dicen qué pasa.
              La gente dice por qué. Todo es distinto, pero hay buenas
              prácticas, y si las hacés bien el camino aparece. Eso no lo da
              un curso. Se observa, se prueba, se ajusta.
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
          La ventaja nunca estuvo en la herramienta. Siempre estuvo
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
            se aprendía trabajando sobre encargos reales. El aprendiz observaba al maestro.
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
          Se empieza de a uno: un negocio, un caso real, una conversación por
          vez. Se desarma, se discute, se vuelve a armar. Cuando el método se
          prueba en varios casos, pasa a grupos chicos. La comunidad viene al
          final, con gente que ya trabajó.
        </p>
        <p>
          El ritmo es pausado. El contenido, denso. Importa más la
          constancia que el volumen.
        </p>
      </Chapter>

      {/* ========== CAPÍTULO V — DENTRO DE LA BOTTEGA ========== */}
      <div className="bg-backdrop bg-bottega">
        <Chapter
          id="inside"
          label="Capítulo V · Dentro de la Bottega"
          title="Lo que vas a trabajar."
        >
          <p><em>Asesoría 1:1.</em> Un negocio real y los seis módulos del método: ecosistema, adquisición, CRO, compra, retención y loops.</p>
          <p><em>Auditorías.</em> Revisión de cuentas, funnels y landings, con criterio y no con checklist.</p>
          <p><em>Playbooks.</em> Conocimiento sistematizado en documentos que se pueden ejecutar.</p>
          <p><em>Frameworks.</em> Modelos mentales reutilizables para pensar negocios digitales.</p>
          <p><em>Cohortes y comunidad.</em> Más adelante: grupos chicos y, al final, una comunidad privada de gente seria que ya trabajó el método.</p>
        </Chapter>
      </div>

      {/* ========== BREAK 2 ========== */}
      <div className="bg-backdrop bg-maestro">
        <BreakQuote text='"El maestro no es un curso. Es un negocio funcionando."' />
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
          <p>Se entra por invitación. El ritmo lo marcás vos.</p>
          <p>
            El taller lo lleva{' '}
            <a href="https://lauti.vercel.app" target="_blank" rel="noopener noreferrer">
              Lautaro Manuel
            </a>
            , que lidera performance en Nebulab.
          </p>
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
