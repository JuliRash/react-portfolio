import {useState, useEffect} from "react";

export function Main({login}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!login) setLoading(true);
        fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(setData)
            .then(() => setLoading(false)).then(setError);
    }, [login]);

    if(loading) return <h1>Loading</h1>;
    if(error) {
        return <pre>{JSON.stringify(error)}</pre>
    }
    if(!data) return null;
    return (
        <>
            <main role="main" className="inner cover">
                <h3 className="cover-heading">About {data.login}</h3>
                <img src={data.avatar_url}  alt="avatar" height={200}/>
                <p className="lead">I am a  {data.bio} and i also write php/laravel and small cyber security for money. <img
                    src="" alt=""/></p>
                <p className="lead">
                    <a href="https://docs.google.com/document/d/19mwpd3bPUGVG3b8E5uodIIv7M5ZsK1O-0efbXbf0XmI/edit?usp=sharing" className="btn btn-lg btn-secondary">Download CV</a>
                </p>
            </main>
        </>
    );
}