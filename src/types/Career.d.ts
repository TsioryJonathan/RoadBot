import { ImageProps, StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Career {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string | ImageProps | StaticImageData | IconType;
}
