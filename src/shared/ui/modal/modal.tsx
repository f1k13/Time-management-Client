import styles from "./modal.module.scss";
import React from "react";
import { DeleteIcon } from "@/shared/ui/icons";

const Modal = ({
  children,
  setIsVisible,
}: {
  children: React.ReactNode;
  setIsVisible: (value: boolean) => void;
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.root}>
      <div className={styles.content}>{children}</div>
      <button className={styles.button} onClick={() => setIsVisible(false)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Modal;
