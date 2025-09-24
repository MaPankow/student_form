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
        <button onClick={onToggleTheme}>{isDarkTheme ? "Switch to 🌞 mode" : "Switch to 🌚 mode"}</button>
        {/* Emojis copied from https://emojipedia.org */}
        <StudentForm />
      </div>

    </div>
  )
}

export default App;
