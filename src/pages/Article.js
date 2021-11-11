import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    // const params = useParams()
    const { id } = useParams()
    // url 가장 뒤에 /을 잊지 말것. 
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)

    return (
        <>
            {error && <div> Something wrong {error}</div>}
            {isPending && <div>... Loading </div>}
            {article && (
                <div className='article'>
                    <p> episode - {id} </p>
                    <h2>{article.title}</h2>
                    <p>by.{article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
            {console.log(id, url, article)}
        </>

    )
}
