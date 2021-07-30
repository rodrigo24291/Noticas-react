export const Api=async(valores)=>{

const api=`https://newsapi.org/v2/top-headlines?country=mx&category=${valores}&apiKey=cf5a846770fa47e0940f35c6555ea42f`
const je=await fetch(api)
const resul=await je.json()
return resul
}