import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingAll } from '../store/home/actions'

function Home() {
    const [selected, setSelected] = useState()
    const [loading, setLoading] = useState(true)
    const home = useSelector((state) => state.homeReducer.data)

    useEffect(() => {
        fetchTrendingAll((el) => {
            if(el==="success") {
                setLoading(false)
            }
        })
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
