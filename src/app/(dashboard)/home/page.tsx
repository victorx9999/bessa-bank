'use client'
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";

export default function Home() {

  const [saldoVisivel, setIsSaldoVisivel] = useState(true)
  const today = new Date();
  const formattedDate = formatDate(today);

  const mostrarSaldo = () => {
    console.log('clicou')
    setIsSaldoVisivel(!saldoVisivel)
  }

  return (
    <div className="card bg-blue text-white" style={{ width: '43.125rem', height: '30rem' }}>
      <div className="d-flex flex-column justify-content-between">
        <div className="p-5">
          <h5 className="">Olá, Joana! :)</h5>
          <span className="">{formattedDate}</span>
        </div>
        <div className="d-flex justify-content-end align-items-center p-2 ">
          <div className="d-flex flex-column text-right">
            <div>
            <span>Saldo</span>
            <a onClick={mostrarSaldo} className="btn btn-outline-light mt-2">
            {saldoVisivel ? 'Esconder Saldo' : 'Mostrar Saldo'}
          </a>
            </div>
 
            <span>Conta Corrente</span>
            {saldoVisivel && <span>R$ 2.500,00</span>}
          </div>
  
        </div>
      </div>
    </div>


  )
}