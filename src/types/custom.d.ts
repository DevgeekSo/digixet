import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    data?: string;
    button?: string;
    "text-1"?: string;
    "text-2"?: string;
    "scroll-item"?: string;
    "avatar-list"?: string;
    "cms-item"?: string;
    image?: string;
    htmlFor?: string;
    autoPlay?: any;
    loop?: any;
    muted?: any;
    playsInline?: any;
    hidden?: any;
  }
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    srcset?: string;
  }
}
