import { render, screen } from '@testing-library/react';
import CoverImage from '../app/cover-image';

const mockUrl = 'https://example.com/cover.jpg';

describe('CoverImage', () => {
  it('renders an image without link if slug is not provided', () => {
    render(<CoverImage title="Meu Post" url={mockUrl} />);
    const img = screen.getByAltText(/Cover Image for Meu Post/i);
    expect(img).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders an image wrapped in a link if slug is provided', () => {
    render(<CoverImage title="Meu Post" url={mockUrl} slug="meu-post" />);
    const link = screen.getByRole('link', { name: /Meu Post/i });
    expect(link).toHaveAttribute('href', '/posts/meu-post');

    const img = screen.getByAltText(/Cover Image for Meu Post/i);
    expect(img).toBeInTheDocument();
  });
});
