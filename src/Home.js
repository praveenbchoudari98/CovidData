import React, { Fragment, useEffect,useState } from 'react'
import Loading from './components/Loading'
import { Navbar } from './components/Navbar'
import PatContainer from './container/Pat_Container'


const Home=()=>{
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      setLoading(false)
    },[])
    return(
    <Fragment>
    {loading?
    <Loading />
    :
    <Fragment>
    <Navbar />
    <PatContainer />
    </Fragment>
    }
    </Fragment>

    )}
export default Home;