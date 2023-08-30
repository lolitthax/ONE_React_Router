
import styles from './Inicio.module.css';
import Post from "componentes/Post";

import posts from '../../json/posts.json'

export default function Inicio() {
    return (
        <main>
       

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}>

                        </Post>
                    </li>
                ))}
            </ul>
        </main>
    )
}