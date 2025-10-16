import { render, screen } from "@testing-library/react";
import MoreStories from "../app/more-stories";

const mockPosts = [
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
];

describe("MoreStories", () => {
  it("renders section title", () => {
    render(<MoreStories morePosts={mockPosts} />);
    expect(screen.getByText(/More Stories/i)).toBeInTheDocument();
  });

  it("renders a post preview with title and author", () => {
    render(<MoreStories morePosts={mockPosts} />);
    expect(screen.getByText("Post Teste")).toBeInTheDocument();
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
  });
});
