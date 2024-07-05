// Primereac
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Custom CSS
import styles from "./page.module.css";

// Components
import HookDecision from './components/HookDecision';

export default function Home() {
  return (
    <main className={styles}>

      <HookDecision />

    </main>
  );
}
