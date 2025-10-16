import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "../app/avatar";

const mockPicture = { url: "https://example.com/avatar.jpg" };

describe("Avatar", () => {
  it("renders the name", () => {
    render(<Avatar name="Gabriel" picture={mockPicture} />);
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
  });

  it("renders the image with correct alt", () => {
    render(<Avatar name="Gabriel" picture={mockPicture} />);
    const img = screen.getByAltText("Gabriel") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(mockPicture.url);
  });
});
