export interface IBlog {
    id: number;
    coverImage: string;
    name: string;
    description: string;
    tags: string[];
    content: string;
    createdAt: number;
    updatedAt: number;
    readingTimeMins: number;
    isActive: boolean;
    isFeatured: boolean;
}