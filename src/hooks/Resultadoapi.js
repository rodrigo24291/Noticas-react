import { useEffect, useState } from "react"
import {Api} from '../helpers/api'
export const Resultadoapi=(valor)=>{
const [vaca,setvaca]=useState(null)
    useEffect(()=>{
if (valor == null) return ; 
Api(valor).then((da)=>{setvaca(da)})
    },[valor])


return vaca;
}


