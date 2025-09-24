import './App.module.css';
import StudentForm from './components/StudentForm/StudentForm';
import styles from './App.module.css';
import { useTheme } from './hooks/useTheme';

function App() {

  const { onToggleTheme, isDarkTheme } = useTheme();


  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Student Form App</h1>
      <div>
        <button onClick={onToggleTheme}>Switch to light/dark mode</button>
        <StudentForm />
      </div>

    </div>
  )
}

export default App;
