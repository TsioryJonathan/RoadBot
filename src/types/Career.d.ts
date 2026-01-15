import { ImageProps, StaticImageData } from "next/image";

export interface Career {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string | ImageProps | StaticImageData;
}
