import Link from "next/link";
import React from "react";

type Props = {};

const DiscountBanner = (props: Props) => {
	return (
		<div className="flex flex-row items-center justify-center py-2.5 w-full bg-neutral-black-900 text-neutral-white-900">
			<div className="w-10/12 mx-auto my-0 flex flex-row items-center justify-center gap-x-2 text-center text-sm font-light">
				<div>
					<p>Get 25% OFF on your first order.</p>
				</div>
				<div>
					<Link href="">Order Now</Link>
				</div>
			</div>
		</div>
	);
};

export default DiscountBanner;
