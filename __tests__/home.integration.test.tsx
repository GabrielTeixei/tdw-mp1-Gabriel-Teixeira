import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page';

jest.mock('../app/more-stories', () => ({
  __esModule: true,
  default: () => <div data-testid="more-stories">Mocked MoreStories</div>,
}));

jest.mock('next/headers', () => ({
  draftMode: jest.fn().mockResolvedValue({ isEnabled: false }),
}));

const mockGetAllPosts = jest.fn();
jest.mock('../lib/api', () => ({
  getAllPosts: (...args: any[]) => mockGetAllPosts(...args),
}));

describe('Home Page Integration', () => {
  it('renders the blog title and more stories section', async () => {
    mockGetAllPosts.mockResolvedValueOnce([
      {
        title: 'Post Teste',
        slug: 'post-teste',
        date: '2025-10-15',
        excerpt: 'Resumo do post',
        coverImage: { url: 'https://example.com/post.jpg' },
        author: { name: 'Gabriel', picture: { url: 'https://example.com/avatar.jpg' } },
      },
    ]);

    const element = await Home();
    render(element);

    await waitFor(() => {
      expect(screen.getByText(/Blog/i)).toBeInTheDocument();
      expect(screen.getByTestId('more-stories')).toBeInTheDocument();
    });
  });

  it('renders message when no posts are found', async () => {
    mockGetAllPosts.mockResolvedValueOnce([]);

    const element = await Home();
    render(element);

    await waitFor(() => {
      expect(screen.getByText(/No posts found/i)).toBeInTheDocument();
    });
  });
});
