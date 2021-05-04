import {useParams} from 'react-router-dom'

export default function Blog() {
    const params = useParams()
    console.log(params);
    return(
        <h1>
            Blog
            {JSON.stringify(params)}
        </h1>
    )
};
