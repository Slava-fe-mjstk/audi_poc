import { FC } from "react";
import { NextPage } from "next";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { AudiSportLogoIcon } from "./AudiSportLogoIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { LogoIcon } from "./LogoIcon";
import { ProfileIcon } from "./ProfileIcon";
import { TwitterIcon } from "./TwitterIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { FacebookIcon } from "./FacebookIcon";
import { Play } from "./Play";
import { Cross } from "./Cross";
import { SteeringWheel } from "./SteeringWheel";
import { Cars } from "./Cars";
import { Gallery } from "./Gallery";
import { Plus } from "./Plus";
import { Download } from "./Download";
import {Speedometer} from "./Speedometer";

export type tIconName =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "audi-sport-logo"
  | "facebook"
  | "instagram"
  | "linkedIn"
  | "logo"
  | "profile"
  | "twitter"
  | "youtube"
  | "play"
  | "steering-wheel"
  | "cars"
  | "gallery"
  | "plus"
  | "download"
  | "speedometer"
  | "cross";

const map: { [k: string]: NextPage } = {
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "audi-sport-logo": AudiSportLogoIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedIn: LinkedInIcon,
  logo: LogoIcon,
  profile: ProfileIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
  cross: Cross,
  play: Play,
  "steering-wheel": SteeringWheel,
  cars: Cars,
  gallery: Gallery,
  plus: Plus,
  download: Download,
  speedometer: Speedometer
};

interface iIconProps {
  name: tIconName;
  className?: string;
}

export const Icon: FC<iIconProps> = ({ name, className = "" }) => {
  const Component = map?.[name];

  return map.hasOwnProperty(name) ? (
    <span className={`Icon ${className}`}>
      <Component />
    </span>
  ) : null;
};
