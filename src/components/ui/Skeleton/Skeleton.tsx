import classNames from "classnames";
import { SkeletonType, type ISkeletonProps } from "./Skeleton.types";
import styles from "./styles.module.css";

export const Skeleton = ({ type = SkeletonType.Paragraph }: ISkeletonProps) => {
  switch (type) {
    case SkeletonType.Paragraph:
      return (
        <div className={styles.skeletonParagraph}>
          <div className={classNames(styles.line, styles.lineOne)}></div>
          <div className={classNames(styles.line, styles.lineTwo)}></div>
          <div className={classNames(styles.line, styles.lineThree)}></div>
        </div>
      );
    default:
      return <></>;
  }
};
