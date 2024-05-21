import { render, screen, fireEvent } from '@testing-library/react';
import SearchFilter from 'app/components/search';
import '@testing-library/jest-dom';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

// Mocks de los hooks de Next.js y use-debounce
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
    usePathname: jest.fn(),
}));
jest.mock('use-debounce', () => ({
    useDebouncedCallback: jest.fn().mockImplementation((fn) => fn),
}));

describe('Componente SearchFilter', () => {
    const mockReplace = jest.fn();
    const mockSearchParams = new URLSearchParams();

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
        (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
        (usePathname as jest.Mock).mockReturnValue('/search');
    });

    test('se renderiza correctamente', () => {
        render(<SearchFilter />);
        const inputElement = screen.getByPlaceholderText('Search Pokémon');
        expect(inputElement).toBeInTheDocument();
    });

    test('actualiza el parámetro de búsqueda en la URL al cambiar el input', () => {
        render(<SearchFilter />);
        const inputElement = screen.getByPlaceholderText('Search Pokémon');

        // Simula un cambio en el input
        fireEvent.change(inputElement, { target: { value: 'Pikachu' } });

        // Verifica que el método replace haya sido llamado con el parámetro correcto
        expect(mockReplace).toHaveBeenCalledWith('/search?query=Pikachu');
    });

});
