import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/lucastiriva.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Viana</strong>
                            <time title="20 de Julho às 15:01h" dateTime="2023-07-20 15:01:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Lucas parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>23</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}