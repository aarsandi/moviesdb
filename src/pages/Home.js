import React, { useState, useEffect, useCallback } from 'react'
import CardItem from '../components/CardItem'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingAll, searchMovies } from '../store/home/actions'
import { debounce } from "../helpers";
import Sidebar from '../components/Sidebar'
import { ClipLoader } from "react-spinners";

function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [myFav, setMyFav] = useState([]);

    const [loading, setLoading] = useState(true)
    const { data } = useSelector((state) => state.homeReducer)

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

    const doSearch = useCallback(
        debounce((val) => {
            searchMovies(dispatch, val, (el) => {
                if(el==="success") {
                    setLoading(false)
                }else{
                    history.push('/404')
                }
            })
        },3000),[]
    )

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 1) {
            setSelected(null)
            setOpen(null)
            setLoading(true);
            doSearch(e.target.value)
        }else{
            fetchTrendingAll(dispatch, (el) => {
                if(el==="success") {
                    setLoading(false)
                }
            })
        }
    }

    useEffect(() => {
        setLoading(true)
        if (localStorage.getItem("pilmDbMyFav")) {
            const data = JSON.parse(localStorage.getItem("pilmDbMyFav"));
            setMyFav(data["movies"] || [])
        }
        fetchTrendingAll(dispatch, (el) => {
            if(el==="success") {
                setLoading(false)
            }
        })
    }, [])
    
    return (
        <div className="row gx-0">
            <div className={`${ open ? "col-6" : "col-12" } font-13`}>
                <div className="mx-5 mt-2" >
                    <i className="bi bi-search mx-2"></i>
                    <input className="search-input" value={search} onChange={(e) => handleSearch(e)} placeholder="Pencarian" type={"text"}/>
                </div>
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

export default Home
