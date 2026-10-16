import type {CSSProperties, ReactNode} from 'react';

import type {Principle} from './data';
import useReveal from './useReveal';
import styles from './styles.module.css';

interface PrincipleCellProps {
  principle: Principle;
  index: number;
  accentClass: string;
}

function PrincipleCell({principle, index, accentClass}: PrincipleCellProps) {
  const {ref, state} = useReveal<HTMLDivElement>();
  const style = {
    '--reveal-delay': `${Math.min(index * 70, 420)}ms`,
  } as CSSProperties;

  return (
    <div ref={ref} className={styles.cell} data-reveal={state} style={style}>
      <span className={`${styles.cellNumber} ${accentClass}`}>
        {String(principle.number).padStart(2, '0')}
      </span>
      <p className={styles.cellTitle}>{principle.title}</p>
      <p className={styles.cellKicker}>{principle.kicker}</p>
      <p className={styles.cellBody}>{principle.body}</p>
    </div>
  );
}

interface PrincipleGridProps {
  principles: Principle[];
  accent?: 'purple' | 'cyan';
}

/** A divided, scroll-revealed grid of numbered principle cells. */
export default function PrincipleGrid({
  principles,
  accent = 'purple',
}: PrincipleGridProps): ReactNode {
  const accentClass = accent === 'cyan' ? styles.accentCyan : styles.accentPurple;
  return (
    <div className={styles.grid}>
      {principles.map((principle, index) => (
        <PrincipleCell
          key={principle.number}
          principle={principle}
          index={index}
          accentClass={accentClass}
        />
      ))}
    </div>
  );
}
