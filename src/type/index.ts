import { IconStyleEnum, NavigationTypeEnum } from "@/enum";

export type StaticNavigationType = {
    text?: string;
    className?: string;
    icon?: React.ReactNode;
    styles?: React.CSSProperties;
    metadata?: Record<string, any>;
    type: NavigationTypeEnum.Static;
    iconStyle?: IconStyleEnum;
    iconClassName?: string;
    
};

export type LinkNavigationType = {
    path: string;
    text?: string;
    className?: string;
    styles?: React.CSSProperties;
    metadata?: Record<string, any>;
    type: NavigationTypeEnum.Link;
    iconStyle?: IconStyleEnum;
    iconClassName?: string;
};

export type NavigationType = StaticNavigationType | LinkNavigationType;