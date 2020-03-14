import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { map } from 'lodash';
import Lottie from 'react-lottie';

import { getDataFromApiByFetch } from '../../ApiService';
import './Home.scss';
import LoadingIndicator from '../../components/LoadingIndicator';
import animationData from '../../assets/relaxing-time.json';

function Home(){
    const [query, setQuery] = useState('');
    const [response, setResponse ] = useState('');
    const [underProgress, setUnderProgress] = useState(false);
    const [ questions, setQuestions ] = useState(['who are you ?']);
    const [ answers, setAnwsers ] = useState(['my name is Thanh']);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const getResponseFromBot = (text) => {
        setUnderProgress(true);
        getDataFromApiByFetch(text).then(json => {
            setResponse(json.Return);
            setUnderProgress(false);
        });
    }

    return (
        <div className='home'>
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '80%'}}>
                <Lottie options={defaultOptions} />
            </div>
            <div className='home_chat'>
                {
                    map(questions,  (question, i) => {

                        return(
                        <>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '20px',
                                        backgroundColor: 'red',
                                        marginRight: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <p style={{color: 'white'}}>ME</p>
                                </div>
                                <p className='home_chat_question'>
                                    {question}
                                </p>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center'}}>
                                {/* <p className='home_chat_answer'>{answers[i]}</p> */}
                                <LoadingIndicator />
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '20px',
                                        backgroundColor: 'blue',
                                        marginLeft: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <p style={{color: 'white'}}>BOT</p>
                                </div>
                            </div>
                        </>
                        )
                    })
                }
            </div>
            <div className='home_input'>
                <input
                    type='text'
                    className='home__textquery'
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />

                <Button
                    className='home__button'
                    variant="contained"
                    color='primary'
                    onClick={() => getResponseFromBot(query)}
                >
                    {underProgress ? <CircularProgress size={24} color="white" /> : 'Send'}
                </Button>
            </div>

        </div>
    )
}

export default Home;