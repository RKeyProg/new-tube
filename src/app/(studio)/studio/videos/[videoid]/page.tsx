import { VideoView } from "@/modules/studio/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

interface PageProps {
	params: Promise<{ videoid: string }>;
}

const Page = async ({ params }: PageProps) => {
	const { videoid } = await params;
	const videoId = videoid;

	void trpc.studio.getOne.prefetch({ id: videoId });
	void trpc.categories.getMany.prefetch();

	return (
		<HydrateClient>
			<VideoView videoId={videoId} />
		</HydrateClient>
	);
};

export default Page;
