class User {
    id: number;
    posts: string[];
    followers: User[];
    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(post: string): void {
        this.posts.push(post);
        console.log(`User ${this.id} created a post: ${post}`);
    }
    comment(postId: number, commentContent: string): void {
        console.log(`User ${this.id} commented on post ${postId}: ${commentContent}`);
    }
    follow(user: User): void {
        this.followers.push(user);
        console.log(`User ${this.id} followed user ${user.id}`);
    }
    likePost(postId: number): void {
        console.log(`User ${this.id} liked post ${postId}`);
    }
    viewFeed(): void {
        console.log(`User ${this.id} is viewing their feed:`);
        this.posts.forEach((post, index) => {
            console.log(`Post ${index + 1}: ${post}`);
        });
    }
}
class Post {
    id: number;
    likes: string[];
    comments: string[];
    userId: number;
    content: string;
    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId: number): void {
        this.likes.push(`User ${userId}`);
        console.log(`Post ${this.id} liked by User ${userId}`);
    }
    addComment(userId: number, comment: string): void {
        this.comments.push(`User ${userId}: ${comment}`);
        console.log(`Post ${this.id} received a comment from User ${userId}: ${comment}`);
    }
}
class Comments {
    id: number;
    userId: number;
    content: string;
    replies: string[];
    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(userId: number, reply: string): void {
        this.replies.push(`User ${userId}: ${reply}`);
        console.log(`Comment ${this.id} received a reply from User ${userId}: ${reply}`);
    }
}
