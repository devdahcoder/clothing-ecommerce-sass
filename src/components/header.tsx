import LogoIcon from "@/icon/logo-icon";
import Link from "next/link";
import IconButton from "./icon-button";
import SearchIcon from "@/icon/search-icon";
import CartIcon from "@/icon/cart-icon";
import ProfileIcon from "@/icon/profile-icon";
import { headerNavigationContent } from "@/content";
import { NavigationTypeEnum } from "@/enum";

type Props = {};

const Header = (props: Props) => {
	return (
		<div>
			<div className="w-11/12 lg:w-[80%] mx-auto my-0 flex flex-row items-center justify-between py-5">
				<div className="flex flex-row items-center gap-x-20">
					<div className=" flex flex-row items-center justify-center gap-x-3">
						<LogoIcon />
						<Link href="" className="font-bold text-xl">
							Ecommerce
						</Link>
					</div>
					<div>
						<nav>
							<ul className="inline-flex flex-row items-center gap-x-10">
								{headerNavigationContent.map(
									(
										{
											type,
											className,
											metadata,
											styles,
											text,
										},
										index
									) => (
										<>
											{type ===
											NavigationTypeEnum.Link ? (
												<li
													className="flex flex-row items-center justify-center"
													key={index}
												>
													<Link
														href={""}
														className="text-sm text-neutral-black-500 font-medium"
													>
														{text}
													</Link>
												</li>
											) : null}
											{type ===
											NavigationTypeEnum.Static ? (
												<li
													className="flex flex-row items-center justify-center"
													key={index}
												>
													<div>{text}</div>
												</li>
											) : null}
										</>
									)
								)}
							</ul>
						</nav>
					</div>
				</div>

				<div className="flex flex-row items-center gap-x-7">
					<div className="relative flex flex-row items-center h-fit w-[264px] border border-neutral-black-100 rounded-lg overflow-hidden">
						<IconButton className="border-none outline-none absolute pointer-events-none select-none px-3">
							<SearchIcon className="stroke-neutral-black-300 w-5 h-5" />
						</IconButton>
						<input
							className=" flex flex-row items-start justify-start outline-none border-0 w-full h-[45px] pl-10 pr-2 text-sm font-medium text-neutral-black-300 placeholder:font-medium placeholder:text-sm placeholder:text-neutral-black-300"
							type="text"
							name="search-products"
							id="search-products"
							placeholder="Search products"
						/>
					</div>

					<IconButton className="">
						<CartIcon className="stroke-neutral-black-500" />
					</IconButton>
					<IconButton className="">
						<ProfileIcon className="stroke-neutral-black-500" />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Header;
