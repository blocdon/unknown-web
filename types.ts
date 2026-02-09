
export enum SiteContext {
  THEOCHEIR = 'THEOCHEIR',
  SENTINEL = 'SENTINEL'
}

export interface NavigationItem {
  label: string;
  path: string;
  external?: boolean;
}
