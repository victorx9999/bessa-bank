// components/Header.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-3">
      <div className="container">
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center gap-5'>
            <Image
              src="/image_logo.png" // Caminho da imagem
              alt="Descrição da imagem"
              width={100}  // Largura desejada
              height={20} // Altura desejada
            />
            <div className='d-flex gap-4'>
              <span className='text-success fw-bold'>Sobre</span>
              <span className='text-success fw-bold'>Serviços</span>
            </div>
          </div>

          <div className='d-flex gap-3'>
            <Link href="/home">
              <button className="btn btn-success">Abrir minha conta</button>
            </Link>
            <button className="btn btn-outline-success">Já tenho conta</button>
          </div>
        </div>
      </div>
    </header>
  );
};



const Footer: React.FC = () => {
  return (

    <footer className='bg-black bg-gradient py-4 pb-5'>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row justify-content-between pt-4'>
          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0'>
            <ul className='text-white  list-unstyled'>
              <li className='fw-bold mb-2'>Serviços</li>
              <li className='mb-1'>Conta corrente</li>
              <li className='mb-1'>Conta PJ</li>
              <li className='mb-1'>Cartão de crédito</li>
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0'>
            <ul className='text-white  list-unstyled'>
              <li className='fw-bold mb-2'>Contato</li>
              <li className='mb-1'>0800 004 250 08</li>
              <li className='mb-1'>teste@gmail.com</li>
              <li className='mb-1'>ouvidoria@outlook.com</li>
            </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-3 mb-3 mb-md-0 d-flex flex-column align-items-center'>
            <span className='text-white fw-bold mb-2'>Desenvolvido por Victor</span>
            <Image
              src="/logo.svg"
              alt="Descrição da imagem"
              width={120}
              height={60}
            />
            <div className='d-flex gap-3'>

              <Image
                src="/Instagram.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />

              <Image
                src="/Whatsapp.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />

              <Image
                src="/Youtube.svg"
                alt="Descrição da imagem"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-custom-gradient">
      <Header />
      {/* <main className="flex-grow-1 bg-light bg-gradient d-flex align-items-center justify-content-center"> */}
      <main className="flex-grow-1 d-flex mt-5 justify-content-center">
        <div className="container">

          <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
            <div className='d-flex col-12 col-md-4'>
              <h3 className='fw-bold text-justify'>Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</h3>
            </div>
            <div className='d-flex col-12 col-md-auto'>
              <Image
                src="/image.png" // Caminho da imagem
                alt="Descrição da imagem"
                width={500}  // Largura desejada
                height={300} // Altura desejada
              />
            </div>
          </div>

          <div className='d-flex flex-column mt-5'>
            <div className='d-flex justify-content-center'>
              <h3 className='fw-bold'>Vantagens do nosso banco:</h3>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src="/presente.png"
                    alt="Descrição da imagem"
                    width={60}
                    height={50}
                  />
                  <h5 className="text-success fw-bold">Conta e cartão gratuitos</h5>
                  <span className="text-secondary text-center">Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src="/saque.png"
                    alt="Descrição da imagem"
                    width={60}
                    height={50}
                  />
                  <h5 className="text-success fw-bold">Saques sem custo</h5>
                  <span className="text-secondary text-center">Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src="/estrela.svg"
                    alt="Descrição da imagem"
                    width={60}
                    height={50}
                  />
                  <h5 className="text-success fw-bold">Programa de pontos</h5>
                  <span className="text-secondary text-center">Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src="/dispositivos.png"
                    alt="Descrição da imagem"
                    width={60}
                    height={50}
                  />
                  <h5 className="text-success fw-bold">Seguro Dispositivos</h5>
                  <span className="text-secondary text-center">Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </main>
      <Footer />
    </div>

  )
};
