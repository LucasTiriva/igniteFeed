import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sideber';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucastiriva.png',
      name: 'Lucas Viana',
      role: 'CTO é isso'
    },
    content: [
      { type: 'paragraph', content: 'Aqui vai uma publicação' },
      { type: 'paragraph', content: 'faz tempo que não faço isso acho que perdi a pratica' },
      { type: 'paragraph', content: 'ultimamente fico digitando pra cima e pra baixo somente sobre trabalho e estudos de programação' },
      { type: 'paragraph', content: 'mas faz parte né essa é a vida adulta.' },
      { type: 'link', content: '#vidaadulta'},
    ],
    publishedAt: new Date('2023-11-04 10:56:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Publi do maiki' },
      { type: 'paragraph', content: 'faz tempo que não faço isso acho que perdi a pratica' },
      { type: 'paragraph', content: 'ultimamente fico digitando pra cima e pra baixo somente sobre trabalho e estudos de programação' },
      { type: 'paragraph', content: 'mas faz parte né essa é a vida adulta.' },
      { type: 'link', content: '#vidaadulta'},
    ],
    publishedAt: new Date('2023-06-08 07:52:28'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> 
            )
          })}
        </main>
      </div>
    </div>
  )
}