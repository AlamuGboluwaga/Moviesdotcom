import { Image } from "react-native";

import { ImagesProps } from "./constants";

const Images = ({ h, w, otherClasses, ...props }: ImagesProps) => {
  return <Image {...props} className={`${h} ${w}`} />;
};

export default Images;
