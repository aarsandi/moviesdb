import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { topRatedTvShows, popularTvShows, onAirTvShows, todayTvShows } from '../store/tvshows/actions'

function Tvshows() {
    const { slug } = useParams()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState()
    const tvshows = useSelector((state) => state.tvshowsReducer.data)

    useEffect(() => {
        setLoading(true)
        if(slug === 'top-rated') {
            topRatedTvShows((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'popular') {
            popularTvShows((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'on-the-air') {
            onAirTvShows((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else if(slug === 'airing-today') {
            todayTvShows((el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }else {
            // history.push('/404')
        }
    }, [slug])

    return (
        <div>
            <h1>Tv Shows</h1>
        </div>
    )
}

export default Tvshows
