import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
}

const LogoIcon: React.FC<SvgIconProps> = ({
    className = '',
    width = '40',
    height = '41',
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
			<rect y=".5" width="40" height="40" rx="20" fill="#0E1422" />
			<path
				d="m24.477 11.849-6.273-3.794a3.75 3.75 0 0 0-1.95-.555c-2.045 0-3.92 1.712-3.92 4.105v14.202l12.143-7.34c2.431-1.472 2.431-5.147 0-6.618m-8.629 7.099v-7.58l6.268 3.789z"
				fill="#fff"
			/>
			<path
				d="M27.849 33.484c0 .043-11.858-.018-11.858-.018l-1.048-.123c-1.696-.199-2.999-1.72-2.941-3.508q.001-.063.006-.125a3.9 3.9 0 0 1 .778-2.122 2.4 2.4 0 0 1 .673-.6l9.02-5.415c1.862-1.12 3.414-1.511 4.22-3.539a5.6 5.6 0 0 0 .377-2.396l-.031-.552.92 5.334c.118.906-.064 1.834-.544 2.597a3.55 3.55 0 0 1-1.126 1.13L15.83 29.395l-.03.02c-.286.215-.11.693.241.673l8.712.053c1.691-.098 3.1 1.571 3.097 3.344"
				fill="#fff"
			/>
		</svg>
	);
}
export default LogoIcon