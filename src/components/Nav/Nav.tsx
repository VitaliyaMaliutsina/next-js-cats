import styles from "./nav.module.css";
import {NavItem} from "@/components/NavItem/NavItem";
import {ROUTES} from "@/constants/routes";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            {ROUTES.map((item) => {
                return <NavItem href={item.href} key={item.id}>{item.title}</NavItem>
            })}
        </nav>
    );
};
