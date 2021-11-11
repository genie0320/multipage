import { useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    // const params = useParams()
    const { id } = useParams()
    // url 가장 뒤에 /을 잊지 말것. 
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    const history = useHistory()

    // id 가 잘못되어 error가 발생한 경우, 사용자를 보내줄 곳.
    // 너무 순식간에 지나가면 알 수 없으니, 2초 지연뒤에 이동.
    useEffect(() => {
        // redirect - 리다이렉트, import 필요
        // history.goBack() - 히스토리백
        if (error) {
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }, [error])

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
