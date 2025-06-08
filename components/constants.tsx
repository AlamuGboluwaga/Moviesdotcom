import { ImageProps } from "react-native";

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
