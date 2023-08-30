import Banner from "componentes/Banner";
import styles from './Inicio.css';
import Post from "../../json/posts.json";

import posts from '../../json/posts.json'

export default function Inicio() {
    return (
        <main>
            <Banner />

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