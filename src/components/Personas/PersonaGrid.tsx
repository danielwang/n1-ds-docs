import type {CSSProperties, ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import useReveal from '@site/src/components/DesignPrinciples/useReveal';
import type {Persona} from './data';
import styles from './styles.module.css';

interface PersonaCardProps {
  persona: Persona;
  index: number;
}

function PersonaCard({persona, index}: PersonaCardProps) {
  const {ref, state} = useReveal<HTMLDivElement>();
  const avatarSrc = useBaseUrl(persona.avatar);
  const style = {
    '--reveal-delay': `${Math.min(index * 80, 480)}ms`,
  } as CSSProperties;
  const accentClass = persona.accent === 'cyan' ? styles.accentCyan : styles.accentPurple;

  return (
    <div ref={ref} className={styles.card} data-reveal={state} style={style}>
      <div className={`${styles.avatar} ${accentClass}`}>
        <img src={avatarSrc} alt="" width={56} height={56} loading="lazy" />
      </div>

      <div className={styles.cardBody}>
        <span className={styles.cardRole}>{persona.role}</span>
        <p className={styles.cardName}>{persona.name}</p>
        <span className={styles.cardBadge}>{persona.badge}</span>
        <p className={styles.cardFocus}>{persona.focus}</p>
      </div>
    </div>
  );
}

interface PersonaGridProps {
  personas: Persona[];
}

/** A scroll-revealed grid of persona cards with a subtle hover lift. */
export default function PersonaGrid({personas}: PersonaGridProps): ReactNode {
  return (
    <div className={styles.grid}>
      {personas.map((persona, index) => (
        <PersonaCard key={persona.id} persona={persona} index={index} />
      ))}
    </div>
  );
}
