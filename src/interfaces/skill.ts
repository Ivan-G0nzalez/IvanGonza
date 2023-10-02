import { IconType } from "react-icons/lib";

export interface ISkill {
  name: string;
  para: string;
  logo: string;
}

export interface ISkills {
  icon: IconType;
  title: string;
  subtitle: string;
  skills_content: ISkill[];
}
