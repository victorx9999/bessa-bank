'use client'
import { useEffect, useState } from "react"
import styles from '../../styles/Menu.module.css';

interface Transacao {
    tipo: string;
    valor: number;
    data: string;
    mes: string;
  }

export default function Aside() {

    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/transacoes')
          .then(res => res.json())
          .then(data => setTransacoes(data))
          .catch(error => console.error('Erro ao buscar transações:', error));
      }, []);

      return (
        <div className={`p-3 ${styles.aside}`}>
          <div className="bg-white border rounded">
            <div className="p-3 text-decoration-none">
              <h4 className="fw-bold p-1 text-left">Extrato</h4>
              <div className="text-decoration-none">
                {transacoes.map((transacao, index) => (
                    <div key={index} className="d-flex flex-column mb-3">
                        <span className="text-success">{transacao.mes}</span>
                        <span>{transacao.tipo}  <span className="ms-5 text-secondary">{transacao.data}</span></span>
                        <span className={styles.asideTransacao}>R$ {transacao.valor}</span>
                    </div>
    
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}