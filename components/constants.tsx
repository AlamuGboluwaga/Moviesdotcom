import { ImageProps, TouchableOpacityProps } from "react-native";
import { LinearGradientProps } from 'expo-linear-gradient';

export interface  TabIconProp {
  focus:any
   icon:any
    name: string
}

export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  h: string | number;
  w: string | number;
  otherClasses:string
  linearGradientProps?: Partial<LinearGradientProps>;
}

export interface ImagesProps extends ImageProps {
  h: string | number;
  w: string | number;
  otherClasses?: string;
}

export interface HeaderProps {
  h: string | number;
  w: string | number;
  title: string;
  children: React.ReactNode;
}
export interface MessageProps {
  h: string;
  w: string;
  otherClasses: string;
  children: React.ReactNode;
}
