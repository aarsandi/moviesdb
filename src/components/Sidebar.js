import React from 'react'

function Sidebar({ handleOpen, type, selected }) {
    if(type === "tvshows") {
        return (
            <div className="col-6 content-right">
                <div className="btn toggle-menu-btn" onClick={() => handleOpen()}>
                    <i className="bi bi-arrow-right-square-fill my-icon"></i>
                </div>
                {
                    selected.poster_path&&
                    <img className="poster-img rounded" src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`} alt="img"/>
                }
                {
                    selected.backdrop_path?
                    <img style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${selected.backdrop_path}`} alt="img"/>:
                    <div style={{ height: "500px" }}></div>
                }
                <div className="p-3">
                    <h1>{selected.name}</h1>
                    <p>First Air : {selected.first_air_date}</p>
                    <p>{selected.overview}</p>
                </div>
            </div>
        )
    }else{
        return (
            <div className="col-6 content-right">
                <div className="btn toggle-menu-btn" onClick={() => handleOpen()}>
                    <i className="bi bi-arrow-right-square-fill my-icon"></i>
                </div>
                {
                    selected.poster_path&&
                    <img className="poster-img rounded" src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`} alt="img"/>
                }
                {
                    selected.backdrop_path?
                    <img style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${selected.backdrop_path}`} alt="img"/>:
                    <div style={{ height: "500px" }}></div>
                }
                <div className="p-3">
                    <h1>{selected.title}</h1>
                    <p>Released : {selected.release_date}</p>
                    <p>{selected.overview}</p>
                </div>
            </div>
        )
    }
}

export default Sidebar
