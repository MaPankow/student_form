import './App.module.css';
import StudentForm from './components/StudentForm/StudentForm';
import styles from './App.module.css';

function App() {


  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>Student Form App</h1>
      <div>
        <StudentForm />
      </div>

    </div>
  )
}

export default App;
