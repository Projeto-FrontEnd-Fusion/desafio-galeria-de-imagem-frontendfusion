import { render, screen, waitFor } from '@testing-library/react';
import * as Dialog from "@radix-ui/react-dialog";
import { PhotoModal } from './photo-modal';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import type { photo } from '../@types/photo';



const TestPhotoModal = ({ photo }: { photo: photo }) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal />
      <PhotoModal photo={photo} />
    </Dialog.Root>
  );
};

describe("Modal Photo", () => {
  const photo = {
    id: '1',
    author: 'Test Author',
    url: 'https://example.com/photo',
    download_url: 'https://example.com/photo/download',
    height: 600,
    width: 800,
  };

  it('should render correctly', () => {
    const { getByText } = render(
      <Dialog.Root open>
        <Dialog.Portal />
        <PhotoModal photo={photo} />
      </Dialog.Root>
    );

    expect(getByText(/Autor:/)).toBeInTheDocument();
    expect(getByText('Test Author')).toBeInTheDocument();
    expect(getByText(/Largura:/)).toBeInTheDocument();
    expect(getByText('800')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', async () => {
    render(<TestPhotoModal photo={photo} />);

    const closeButton = screen.getByRole('button', { name: /Voltar/i });
    const user = userEvent.setup();
    expect(screen.queryByText(/Autor:/)).toBeInTheDocument();
    
    await user.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(/Autor:/)).not.toBeInTheDocument();
    });
  });
});
