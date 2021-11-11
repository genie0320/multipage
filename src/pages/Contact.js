import { useLocation } from "react-router"

export default function Contact() {
    const searchString = useLocation().search
    const searchParams = new URLSearchParams(searchString)
    const keyword = searchParams.get('name')
    // console.log(searchParams, keyword)

    return (
        <div>
            <h2>Hi {keyword}! Thank you for Contacting us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos temporibus quisquam perferendis voluptas corporis deleniti deserunt, placeat optio officia eum ad. Consectetur, at? Ipsam culpa consectetur eaque autem atque!</p>
        </div>
    )
}
