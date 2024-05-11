import { LiaWeightHangingSolid } from 'react-icons/lia';
import { TfiRuler } from 'react-icons/tfi';
import { ICharacteristicsProps } from '../interfaces';

export default function Characteristics({ item }: ICharacteristicsProps) {
    const weightInKilograms: number = item.weight / 10;  // Convertir a kilogramos
    const heightInMeters: number = item.height / 10;    // Convertir a metros

    return (
        <section className='mt-4 flex justify-center gap-2' aria-labelledby="characteristics-heading">
            <h2 id="characteristics-heading" className="sr-only">Characteristics</h2>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-1' aria-label={`Weight: ${weightInKilograms} kilograms`}>
                    <LiaWeightHangingSolid aria-hidden="true" />
                    <strong>{weightInKilograms} Kg</strong>
                </div>
                <span>Weight</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-1' aria-label={`Height: ${heightInMeters} meters`}>
                    <TfiRuler aria-hidden="true" />
                    <strong>{heightInMeters} m</strong>
                </div>
                <span>Height</span>
            </div>
        </section>
    );
}
