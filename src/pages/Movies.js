import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies } from '../store/movies/actions'

function Movies() {
    const { slug } = useParams()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState()
    const movies = useSelector((state) => state.moviesReducer.data)

    useEffect(() => {
        setLoading(true)
        if(slug === 'top-rated') {
            topRatedMovies((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'popular') {
            popularMovies((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'upcoming') {
            upcomingMovies((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'now-playing') {
            nowPlayingMovies((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else {
            history.push('/404')
        }
    }, [slug])

    return (
        <div>
            <h1>Movies</h1>
        </div>
    )
}

export default Movies
