import React from 'react'
import { Link } from 'react-router-dom'
import style from './Button.module.css'

const Button = ({label, router, cod_livro})=>{
    return(
            <div>
                <Link to='/detailBook'>
                      <button>{label}</button>
                </Link>
            </div>
    )  
}

export default Button