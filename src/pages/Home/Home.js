import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getDataFromApiByFetch } from '../../ApiService';
import './Home.scss';

function Home(){
    const [query, setQuery] = useState('');
    const [response, setResponse ] = useState('');
    const [underProgress, setUnderProgress] = useState(false);

    const getResponseFromBot = (text) => {
        setUnderProgress(true);
        getDataFromApiByFetch(text).then(json => {
            setResponse(json.Return);
            setUnderProgress(false);
        });
    }

    return (
        <div className='home'>
            <textarea
                className='home__textquery'
                rows='5' cols='60'
                value={query}
                onChange={event => setQuery(event.target.value)}
            />

            <Button
                className='home__button'
                variant="contained"
                color='primary'
                onClick={() => getResponseFromBot(query)}
            >
                {underProgress ? <CircularProgress size={24} color="white" /> : 'Query'}
            </Button>
            <div>
                <p>{response}</p>
            </div>
        </div>
    )
}

export default Home;