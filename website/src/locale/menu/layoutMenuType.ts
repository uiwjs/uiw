export type LayoutMenuType = {
  path: string;
  name: string;
  icon: string;
  children: Array<{
    name: string;
    path: string;
    divider: boolean;
  }>;
};
