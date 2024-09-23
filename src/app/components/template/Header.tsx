
import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-blue py-4">
            <div className="container">
            <div className="d-flex justify-content-end align-items-center gap-3">
                <span className="text-white">Joana da Silva Oliveira</span>
                <Image
                    src="/Avatar.svg"
                    alt="Descrição da imagem"
                    width={40}
                    height={40} />
            </div>
            </div>
        </header>
    )
}
