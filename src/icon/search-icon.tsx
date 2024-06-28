import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
}

const SearchIcon: React.FC<SvgIconProps> = ({
    className = '',
    width = '24',
    height = '24',
   ...props
}: SvgIconProps) => {
    return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.5 17.5L22 22"
				
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
				
				strokeWidth="1.3"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
export default SearchIcon