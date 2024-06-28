import React from "react";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const IconButton = ({ children, className }: Props) => {
	return <button className={`flex flex-row items-center justify-center ${className}`}>{children}</button>;
};

export default IconButton;
