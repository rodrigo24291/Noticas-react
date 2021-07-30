import React from 'react';


export const Resultado=({api})=>{
if (api==null) return ""; 
const {articles}=api
     return (
         <>
            <div className="col s12 m6 l4">
                
         {articles.map((so)=>{

return(

    <div className="card" key={so.title}>
        <div className="card-image">
            <img src={so.urlToImage} alt={so.title} />
            <span className="card-title">{so.source.name}</span>
        </div>

                <div className="card-content">
                    <h3>{so.title}</h3>
                    <p>{so.description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={so.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
     </div>
        
        )
      

         })}
           </div>
         </>
     )
}