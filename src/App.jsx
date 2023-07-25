import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sideber';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas Viana" 
            content="Lorem ipsum dolor sit amet consectetur"
          />
          <Post 
            author="Willy Wonka"
            content="Fabrica de chocolates o filme lança me dezembro nos cinemas"
          />
          <Post 
            author="Gabriela Viana"
            content="Eu Sou linda e Orgulhosa desculpa amores racalque passa reto e português tbm"
          />
        </main>
      </div>
    </div>
  )
}