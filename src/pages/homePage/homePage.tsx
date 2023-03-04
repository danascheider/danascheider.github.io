import styles from './homePage.module.css'

const HomePage = () => (
  <main className={styles.root}>
    <h1 className={styles.header}>Home Page</h1>
    <button>Sign in with Google</button>
  </main>
)

export default HomePage