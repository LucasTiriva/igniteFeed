import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/lucastiriva.png" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Viana</strong>
                        <span>Tentando vira um dev Neymar.JR</span>
                    </div>
                </div>

                <time title="20 de Julho às 15:01h" dateTime="2023-07-20 15:01:00">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Aqui vai uma publicação</p>
                <p>faz tempo que não faço isso acho que perdi a pratica</p>
                <p>ultimamente fico digitando pra cima e pra baixo somente sobre trabalho e estudos de programação</p>
                <p>mas faz parte né essa é a vida adulta.</p>
                <p><a href="">#vidaadulta</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}