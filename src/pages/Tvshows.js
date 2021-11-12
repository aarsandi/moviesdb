import React, { useState, useEffect } from 'react'
import CardItem from '../components/CardItem'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { topRatedTvShows, popularTvShows, onAirTvShows, todayTvShows } from '../store/tvshows/actions'
import Sidebar from '../components/Sidebar'
import { ClipLoader } from "react-spinners";

function Tvshows() {
    const { slug } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [myFav, setMyFav] = useState([]);
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false);
    const { data } = useSelector((state) => state.tvshowsReducer)

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
            setMyFav(data["tvshows"] || [])
        }
        if(slug === 'top-rated') {
            topRatedTvShows(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'popular') {
            popularTvShows(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'on-the-air') {
            onAirTvShows(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        }else if(slug === 'airing-today') {
            todayTvShows(dispatch, (el) => {
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
                    <div className="d-flex align-items-center justify-content-center">
                        <ClipLoader size={40} color={"black"} loading={loading} style={{height: "100vh"}}/>
                    </div>:
                    <div className="row gx-0 justify-content-center">
                        {
                            data.length?data.map((el) => {
                                return <CardItem type="tvshows" data={el} addFav={addFav} removeFav={removeFav} myFav={myFav} open={open} openDetail={openDetail}/>
                            }):
                            <h1 class="text-center">data not found</h1>
                        }
                    </div>
                }
            </div>
            {
                open&&selected&&
                <Sidebar handleOpen={handleOpen} type="tvshows" selected={selected}/>
            }
        </div>
    )
}

export default Tvshows
