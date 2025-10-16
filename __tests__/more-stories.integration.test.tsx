import { render, screen } from "@testing-library/react";
import MoreStories from "../app/more-stories";

interface Post {
  title: string;
  coverImage: { url: string };
  date: string;
  excerpt: string;
  author: { name: string; picture: { url: string } };
  slug: string;
}

const mockPosts: Post[] = [
  {
    title: "Post Teste",
    coverImage: { url: "https://example.com/post.jpg" },
    date: "2025-10-15",
    excerpt: "Resumo do post",
    author: {
      name: "Gabriel",
      picture: { url: "https://example.com/avatar.jpg" },
    },
    slug: "post-teste",
  },
  {
    title: "Segundo Post",
    coverImage: { url: "https://example.com/post2.jpg" },
    date: "2025-10-16",
    excerpt: "Resumo do segundo post",
    author: {
      name: "Ana",
      picture: { url: "https://example.com/avatar2.jpg" },
    },
    slug: "segundo-post",
  },
];

describe("MoreStories Integration", () => {
  it("renders all posts with author, cover image and date", () => {
    render(<MoreStories morePosts={mockPosts} />);

    const coverImage1 = screen.getByAltText(
      "Cover Image for Post Teste"
    ) as HTMLImageElement;
    const coverImage2 = screen.getByAltText(
      "Cover Image for Segundo Post"
    ) as HTMLImageElement;
    expect(coverImage1.src).toContain("https://example.com/post.jpg");
    expect(coverImage2.src).toContain("https://example.com/post2.jpg");

    expect(screen.getByText("Post Teste")).toBeInTheDocument();
    expect(screen.getByText("Segundo Post")).toBeInTheDocument();

    expect(screen.getByText("Gabriel")).toBeInTheDocument();
    expect(screen.getByText("Ana")).toBeInTheDocument();

    expect(screen.getByText("October 15, 2025")).toBeInTheDocument();
    expect(screen.getByText("October 16, 2025")).toBeInTheDocument();
  });

  it("links para as páginas corretas dos posts", () => {
    render(<MoreStories morePosts={mockPosts} />);

    expect(
      document.querySelector<HTMLAnchorElement>('a[href="/posts/post-teste"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector<HTMLAnchorElement>('a[href="/posts/segundo-post"]')
    ).toBeInTheDocument();
  });
});
