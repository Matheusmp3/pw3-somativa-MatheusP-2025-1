import Button from './Button.jsx'
import style from "./BookCard.module.css"

const BookCard = ({titulo, autor, imagem})=>{
    return(
        <div className={style.bookCard}>
            <h3  className={style.titulo}>{titulo}</h3>
            <p  className={style.author}>{autor}</p>
           <img src={imagem} alt="Capa: As Cavernas de Aço"/>
           <Button label='Detalhe'/>
        </div>
    )
}

export default BookCard