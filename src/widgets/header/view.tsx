"use server";

import { FC } from "react";
import styles from "./styles.module.scss";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { headers } from "next/headers";
import { BackButton } from "@/shared/componets/back-button";

export const Header: FC = () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const is_home_page = fullUrl.slice(-1) === "/";

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
