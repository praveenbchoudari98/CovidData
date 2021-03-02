import axios from 'axios'
const URL = 'https://api.covid19india.org/raw_data3.json'
export function listStatesAll() {
    const states = axios.get(URL).then(response => response.data).then(data => {
        let states = []
        for (let i = 0; i < data.raw_data.length; i++) {
            if (states.includes(data.raw_data[i].detectedstate) === false)
                states.push(data.raw_data[i].detectedstate)
        }
        return states;
    })
    return {
        type: 'GET_STATES',
        payload: states
    }
}
export function listDistAll(params) {
    const Data=axios.get(URL).then(response => response.data).then(data => {
        let Dist=[]
        let Data=[]
        for (let i = 0; i < data.raw_data.length; i++) {
            if (Dist.includes(data.raw_data[i].detecteddistrict)===false&&data.raw_data[i].detectedstate===params)
            { 
               let cur_dist=data.raw_data[i].detecteddistrict
               let cur_state=data.raw_data[i].detectedstate
               let T_M=data.raw_data.filter((x,i)=>{return cur_state===x.detectedstate&&x.gender==='M'}).length
               let T_F=data.raw_data.filter((x,i)=>{return cur_state===x.detectedstate&&x.gender==='F'}).length
               let T_U=data.raw_data.filter((x,i)=>{return cur_state===x.detectedstate&&x.gender===''}).length
               let M=data.raw_data.filter((x,i)=>{return cur_dist===x.detecteddistrict&&x.gender==='M'}).length
               let F=data.raw_data.filter((x,i)=>{return cur_dist===x.detecteddistrict&&x.gender==='F'}).length
               let U=data.raw_data.filter((x,i)=>{return cur_dist===x.detecteddistrict&&x.gender===''}).length
               Dist.push(data.raw_data[i].detecteddistrict)
               Data.push({dist:cur_dist,M,F,U,male_count:T_M,female_count:T_F,Unknown:T_U})
           }
        }
        return Data;
    })

    return {
        type: 'GET_DIST',
        payload:Data
    }
}

export function listPatAll(params) {
    const Data=axios.get(URL).then(response => response.data).then(data =>data.raw_data.slice(0,500))
        return {
            type: 'GET_PATIENTS',
            payload:Data
        }
    }
export function clearCache(){
    return{
        type:'CLEAR_CACHE',
        payload:null
    }
}
