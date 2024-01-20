"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { BackButton } from "@/shared/componets/back-button";
import { usePathname } from "next/navigation";

export const Header: FC = () => {
  const pathname = usePathname();
  const is_home_page = pathname === "/";

  return (
    <header className={styles.header}>
      {!is_home_page && <BackButton />}

      <Image
        src={Logo}
        alt={"hint"}
        width={47}
        height={35}
        className={styles.img}
      />
    </header>
  );
};
