import MenuItem from "./MenuItem";
import styles from '../../styles/Menu.module.css';

export default function Nav() {
    return (
        <div className={styles.nav}>
        <div className=" bg-white min-vh-100 border rounded ">
            <nav className="d-flex flex-column align-items-center p-3">
                <MenuItem link="/home">
                    <span className={styles.link}>Início</span>
                </MenuItem>

                <MenuItem link="/transferencias">
                    <span className={styles.link}>Transferências</span>
                </MenuItem>

                <MenuItem link="/">
                    <span className={styles.link}>Investimentos</span>
                </MenuItem>

                <MenuItem link="/">
                    <span className={styles.link}>Outros serviços</span>
                </MenuItem>
            </nav>
        </div>
        </div>
    )
}