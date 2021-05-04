export default function Auth({match}) {
    console.log(match);
    return(
        <h1>
            Auth
            {JSON.stringify(match)}
        </h1>
    )
};
