export default class VideoModel {
	id: string;
	title: string;
	description: string;
	thumbnail: any;
	channelTitle: string;
	statistics: {
		commentCount: number;
		dislikeCount: number;
		favoriteCount: number;
		likeCount: number;
		viewCount: number;
	}
}