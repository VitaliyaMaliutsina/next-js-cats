"use client"
import styles from "./navItem.module.css";

import Link from "next/link";
import {ReactNode} from "react";
import {clsx} from "clsx";
import {usePathname} from "next/navigation";

type Props = {
    href: string;
    children: ReactNode
};
export const NavItem = (props: Props) => {

    const {href, children} = props

    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href} className={clsx(styles.navLink, isActive ? styles.active : "")}>
            {children}
        </Link>
    )
};