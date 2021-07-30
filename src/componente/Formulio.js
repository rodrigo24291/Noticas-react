import React, { useState } from 'react';
import styles from './Formulario.module.css';

export const Formulario=({Setguardar})=>{
    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]
    const [Valor,SetValor]=useState(null)

const HandelSelect=(e)=>{
SetValor(e.target.value)    
}
console.log(Valor)
const buscarNoticias=(e)=>{
e.preventDefault();
Setguardar(Valor);
}

    return(
<>
        <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form
                onSubmit={buscarNoticias}
            >
                <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

        <select
            className="browser-default"
            onChange={HandelSelect}
            
        >
            {OPCIONES.map((op)=>{
                return <option value={op.value} key={op.label}>{op.label}</option>
            })}
        </select>

                <div className="input-field col s12">
                    <input 
                        type="submit" 
                        className={`${styles['btn-block']}  btn-large amber darken-2`}
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    </div>
    </>
    )
}