export enum SkeletonType {
  Paragraph = "paragraph",
}

export type TSkeletonType = `${SkeletonType}`;

export interface ISkeletonProps {
  readonly type?: TSkeletonType;
}
