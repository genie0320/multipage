import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

export default function Home() {
    const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')
    return (
        <div className="home">
            <h2>Articles</h2>
            {error && <div>Something Wrong {error}</div>}
            {isPending && <div>... ...Loading</div>}
            {articles && articles.map((article) => (
                <div key={article.id} className="card">
                    <h2>{article.title}</h2>
                    <p>Author : {article.author}</p>
                    <Link to={`/articles/${article.id}`}>Read more</Link>
                    {/* /article 이 아니라, 위에서 찍어준 fetch 주소의 뒷쪽인 /article's' 이다. */}
                </div>
            ))}
        </div>
    )
}
