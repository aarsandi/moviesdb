import React, { useState, useEffect } from 'react'
import CardItem from '../components/CardItem'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies } from '../store/movies/actions'
import Sidebar from '../components/Sidebar'
import { ClipLoader } from "react-spinners";

function Movies() {
    const { slug } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [myFav, setMyFav] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const [ selected, setSelected ] = useState(null)
    const [open, setOpen] = useState(false);
    const { data } = useSelector((state) => state.moviesReducer)

    function handleOpen() {
        setOpen(!open)
    }

    function openDetail(val) {
        setOpen(true)
        setSelected(val)
    }

    function addFav(key, type) {
        let data = JSON.parse(localStorage.getItem("pilmDbMyFav")) || {};
        if (Object.keys(data).includes(type)) {
          if (!data[type].includes(key)) {
            data[type].push(key);
          }
        } else {
          data[type] = [key];
        }
        setMyFav(data[type])
        localStorage.setItem("pilmDbMyFav", JSON.stringify(data));
      }
    
    function removeFav(key, type) {
        let data = JSON.parse(localStorage.getItem("pilmDbMyFav")) || {};
        if (Object.keys(data).includes(type)) {
            if (data[type].includes(key)) {
            data[type] = data[type].filter((el) => el !== key);
            }
        }
        setMyFav(data[type])
        localStorage.setItem("pilmDbMyFav", JSON.stringify(data));
    }

    useEffect(() => {
        setLoading(true)
        if (localStorage.getItem("pilmDbMyFav")) {
            const data = JSON.parse(localStorage.getItem("pilmDbMyFav"));
            setMyFav(data["movies"] || [])
        }
        if(slug === 'top-rated') {
            topRatedMovies(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'popular') {
            popularMovies(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'upcoming') {
            upcomingMovies(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'now-playing') {
            nowPlayingMovies(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else {
            history.push('/404')
        }
    }, [slug])

    return (
        <div className="row gx-0">
            <div className={`${ open ? "col-6" : "col-12" } font-13`}>
                {
                    loading?
                    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                        <ClipLoader size={40} color={"black"} loading={loading} />
                    </div>:
                    <div className="row gx-0 justify-content-center">
                        {
                            data.length?data.map((el) => {
                                return <CardItem type="movie" data={el} addFav={addFav} removeFav={removeFav} myFav={myFav} open={open} openDetail={openDetail}/>
                            }):
                            <h1 class="text-center">data not found</h1>
                        }
                    </div>
                }
            </div>
            {
                open&&selected&&
                <Sidebar handleOpen={handleOpen} type="movie" selected={selected}/>
            }
        </div>
    )
}

export default Movies
