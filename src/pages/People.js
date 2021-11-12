import React, { useState, useEffect } from 'react'
import CardItem from '../components/CardItem'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popularPeople } from '../store/people/actions'
import { ClipLoader } from "react-spinners";

function People() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [myFav, setMyFav] = useState([]);
    const [ loading, setLoading ] = useState(true)
    const { data } = useSelector((state) => state.peopleReducer)

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
            setMyFav(data["people"] || [])
        }
        popularPeople(dispatch, (el) => {
            if(el==="success") {
                setLoading(false)
            }else{
                history.push('/404')
            }
        })
    }, [])

    return (
        <div className="row gx-0">
            <div className="col-12 font-13">
                {
                    loading?
                    <div className="d-flex align-items-center justify-content-center">
                        <ClipLoader size={40} color={"black"} loading={loading} style={{height: "100vh"}}/>
                    </div>:
                    <div className="row gx-0 justify-content-center">
                        {
                            data.length?data.map((el) => {
                                return <CardItem type="people" data={el} addFav={addFav} removeFav={removeFav} myFav={myFav}/>
                            }):
                            <h1 class="text-center">data not found</h1>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default People
