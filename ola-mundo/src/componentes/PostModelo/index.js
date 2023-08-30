import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, título, children }) {
    return (
        <article className={styles.PostModeloContainer}>
            <div className={styles.FotoCapa} style={{ backgroundImage: `url(${FotoCapa})` }}></div>
            <h2 className={styles.Título}>{título}</h2>
            <div className={styles.PostContainer}>{children}</div>
        </article>
    )
}
