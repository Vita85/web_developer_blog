import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary" | "error" | "success";
  variant?: "fill" | "outlined" | "soft";
  fullWidth?: boolean;
  classnames?: string[];
}

const Button = ({
  children,
  color = "primary",
  variant = "fill",
  fullWidth,
  classnames = [],
  ...props
}: Props) => (
  <button
    {...props}
    className={classNames(styles.root, ...classnames, {
      [styles.primary]: color === "primary" && variant === "fill",
      [styles.secondary]: color === "secondary" && variant === "fill",
      [styles.error]: color === "error" && variant === "fill",
      [styles.success]: color === "success" && variant === "fill",
      [styles.primaryOutlined]: color === "primary" && variant === "outlined",
      [styles.secondaryOutlined]: color === "secondary" && variant === "outlined",
      [styles.errorOutlined]: color === "error" && variant === "outlined",
      [styles.successOutlined]: color === "success" && variant === "outlined",
      [styles.soft]: variant === "soft",
      [styles.primarySoft]: color === "primary" && variant === "soft",
      [styles.secondarySoft]: color === "secondary" && variant === "soft",
      [styles.errorSoft]: color === "error" && variant === "soft",
      [styles.successSoft]: color === "success" && variant === "soft",
      [styles.fullWidth]: !!fullWidth,
    })}
  >
    {children}
  </button>
);

export default Button;
