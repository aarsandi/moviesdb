import React from 'react'

function CardItem({type, data, addFav, removeFav, myFav, open, openDetail}) {
    if(type === "tvshows") {
        return (
            <div className={`${ open ? "col-4" : "col-2" } m-4 card`}>
                {
                    !myFav.includes(data.id) ?
                    <div className="btn fav-toggle" onClick={() => addFav(data.id, 'tvshows')}>
                        <i className="bi bi-heart"></i>
                    </div>:
                    <div className="btn fav-toggle" onClick={() => removeFav(data.id, 'tvshows')}>
                        <i className="bi bi-heart-fill"></i>
                    </div>
                }
                {
                    data.poster_path?
                    <img className="card-img-top pointer" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="img" onClick={() => openDetail(data)}/>:
                    <div style={{ height:"450px"}}></div>
                }
                <div className="card-body pointer" onClick={() => openDetail(data)}>
                    <h5 className="card-title">{data.name}</h5>
                    <div class="d-flex justify-content-between">
                        {
                            data.first_air_date?
                            <p className="card-text"><small className="text-muted">{data.first_air_date}</small></p>:
                            <></>
                        }
                        {
                            data.vote_average?
                            <p className="card-text"><small className="text-muted">{data.vote_average}</small></p>:
                            <></>
                        }
                    </div>
                </div>
            </div>
        )
    }else if(type === "people") {
        return (
            <div className={`${ open ? "col-4" : "col-2" } m-4 card`}>
                {
                    !myFav.includes(data.id) ?
                    <div className="btn fav-toggle" onClick={() => addFav(data.id, 'people')}>
                        <i className="bi bi-heart"></i>
                    </div>:
                    <div className="btn fav-toggle" onClick={() => removeFav(data.id, 'people')}>
                        <i className="bi bi-heart-fill"></i>
                    </div>
                }
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt="img"/>
                <div className="card-body">
                    <div class="d-flex justify-content-between">
                        {
                            data.name?
                            <h5 class="card-title">{data.name}</h5>:
                            <></>
                        }
                        {
                            data.popularity?
                            <p className="card-text"><small className="text-muted">Popularity: {data.popularity}</small></p>:
                            <></>
                        }
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className={`${ open ? "col-4" : "col-2" } m-4 card`}>
                {
                    !myFav.includes(data.id) ?
                    <div className="btn fav-toggle" onClick={() => addFav(data.id, 'movies')}>
                        <i className="bi bi-heart"></i>
                    </div>:
                    <div className="btn fav-toggle" onClick={() => removeFav(data.id, 'movies')}>
                        <i className="bi bi-heart-fill"></i>
                    </div>
                }
                {
                    data.poster_path?
                    <img className="card-img-top pointer" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="img" onClick={() => openDetail(data)}/>:
                    <div style={{ height:"450px" }}></div>
                }
                <div className="card-body pointer" onClick={() => openDetail(data)}>
                    <h5 className="card-title">{data.title}</h5>
                    <div class="d-flex justify-content-between">
                        {
                            data.release_date?
                            <p className="card-text"><small className="text-muted">{data.release_date}</small></p>:
                            <></>
                        }
                        {
                            data.vote_average?
                            <p className="card-text"><small className="text-muted">{data.vote_average}</small></p>:
                            <></>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItem
