import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from 'app/components/pagination';
import Item from 'app/components/pagination/item';

describe('Componente Pagination', () => {
    test('se renderiza null cuando total es menor que 2', () => {
        render(<Pagination page={1} total={1} type={undefined} region={undefined} />);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeNull();
    });

    test('se renderiza correctamente basado en page y total', () => {
        const { container } = render(<Pagination page={3} total={5} type="article" region="eu" />);
        expect(container.querySelectorAll('a').length).toBe(9); // Refleja la cantidad correcta de enlaces basada en la lógica de tu componente
    });


    test('la página actual tiene estilo especial', () => {
        render(<Pagination page={3} total={5} type="article" region="eu" />);
        const paginaActual = screen.getByText('3');
        expect(paginaActual).toHaveClass('bg-red-500');
    });
});

describe('Componente Item', () => {
    test('se renderiza con el href correcto', () => {
        render(<Item item={{ page: 4, label: 'Next' }} type="article" region="eu" current={3} />);
        const buttonElement = screen.getByRole('button', { name: 'Go to page 4' }); // Usar 'button' y el valor de aria-label

        // Verifica que el elemento enlace (a) tenga el atributo href correcto
        expect(buttonElement).toHaveAttribute('href', '/?page=4&type=article&region=eu');
    });
});
