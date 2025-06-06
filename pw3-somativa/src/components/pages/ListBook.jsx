import React from "react";
import style from './ListBook.module.css'

import { useState, useEffect } from "react";

import iluminado from "../../assets/O iluminado.png"

import BookCard from "../BookCard";

import ContainerBook from "../layout/ContainerBook";

const ListBook = () => {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/listagemLivros', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*',

            }
        })
            .then((resp) => resp.json())
            .then((bookData) => {
                console.log(bookData.data);
                setBooks(bookData.data);
            })
            .catch((err) => { console.log(err) });
    }, []);
    return (
        <section>

            <h1>LIST BOOK</h1>

            <ContainerBook>
                {
                    books.map((book) => (
                        <BookCard
                            cod_livro={book.cod_livro}
                            nome_livro={book.nome_livro}
                            autor_livro={book.autor_livro}
                            imagem={iluminado}
                            key={book.cod_livro}
                        />
                    ))
                }
            </ContainerBook>

        </section>
    )
}

export default ListBook