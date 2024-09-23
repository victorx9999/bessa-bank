import Aside from "./Aside";
import Header from "./Header";
import Nav from "./Nav";


export default function Pagina(props: any) {
    return (
        <div className="flex flex-col bg-main">
            <Header />
            <div className="container">
                <div className="d-flex">
                    <Nav />
                    <div className="p-3">
                        <main className="">{props.children}</main>
                    </div>
                    <Aside/>
                </div>

            </div>

        </div>
    )
}