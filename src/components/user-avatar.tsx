import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { AvatarImage } from "./ui/avatar";

const avatarVariants = cva("block rounded-full overflow-hidden", {
	variants: {
		size: {
			default: "h-9 w-9",
			xs: "h-4 w-4",
			sm: "h-6 w-6",
			lg: "h-10 w-10",
			xl: "h-[160px] w-[160px]",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
	imgUrl: string;
	name: string;
	className?: string;
	onClick?: () => void;
}

export const UserAvatar = ({
	imgUrl,
	name,
	size,
	className,
	onClick,
}: UserAvatarProps) => {
	return (
		<Avatar
			className={cn(avatarVariants({ size, className }))}
			onClick={onClick}
		>
			<AvatarImage src={imgUrl} alt={name} />
		</Avatar>
	);
};
