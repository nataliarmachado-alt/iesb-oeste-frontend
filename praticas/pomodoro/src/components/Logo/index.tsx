//import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';


export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href='/'>
         <img
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={150}
/>
        <span>Estudos Pomodoro</span>
      </RouterLink>
    </div>
  );
}