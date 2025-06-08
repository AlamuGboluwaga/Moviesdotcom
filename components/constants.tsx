import { ImageResizeMode, ImageSourcePropType } from "react-native";

export interface HeaderImageProps {
   title ?:  string
  h?: string | number;
  w?: string | number;
  source: ImageSourcePropType;
  style?: any;
  vh?:string|number
  vw?:string|number|[string]
  others: string
  

  resizeMode: ImageResizeMode;
}

export interface HeaderProps {
  h: string | number;
  w: string | number;
  title: string;
  children: any;
}
