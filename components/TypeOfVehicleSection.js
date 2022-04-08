import { useState } from 'react'
import StepHeader from './StepHeader'
import VehicleTypeCard from './VehicleTypeCard'
import { FaQuestionCircle } from 'react-icons/fa'
import VehicleTypeHelpModal from './VehicleTypeHelpModal'

const vehicleTypes = [
    {
        title: 'Citadine',
        iconClass: 'cbs-vehicle-icon cbs-vehicle-icon-mini-car',
        value: 'citadine'
    },
    {
        title: 'Compacte',
        iconClass: 'cbs-vehicle-icon cbs-vehicle-icon-car-mid-size',
        value: 'compacte'
    },
    {
        title: 'Berline / Break / SUV',
        iconClass: 'cbs-vehicle-icon cbs-vehicle-icon-suv',
        value: 'berline-break-suv'
    },
    {
        title: '4x4 / Monospace / 7 places',
        iconClass: 'cbs-vehicle-icon cbs-vehicle-icon-4x4',
        value: '4x4-monospace-7-places'
    },
]

const TypeOfVehicleSection = () => {
    const [selected, setSelected] = useState('citadine')
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModalHandler = () => setIsOpenModal(true)
    const closeModalHandler = () => setIsOpenModal(false)

    return (
        <section className='mt-[100px]'>
            <div className="container">
                <StepHeader title={"TYPE DE VÉHICULE"} subtitle={"SÉLECTIONNEZ VOTRE TYPE DE VÉHICULE."} currentStep={1} totalStep={5} />

                <div className='mt-[50px]'>
                    <p className="subtitle_sm text-dark">
                        Si vous hésitez pour votre type de véhicule,
                        <button onClick={openModalHandler} className='text-primary hover:underline inline-flex ml-1 items-center gap-1' >cliquez ici <FaQuestionCircle size={17} /></button>
                    </p>
                    <VehicleTypeHelpModal isOpen={isOpenModal} onClose={closeModalHandler} />

                    {/* Vehicle Types Grid --Start-- */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                        {
                            vehicleTypes.map((vehicleType, index) => (
                                <VehicleTypeCard data={vehicleType} isSelected={selected === vehicleType.value} onSelect={(vehicle_type) => setSelected(vehicle_type.value)} key={index} />
                            ))
                        }
                    </div>
                    {/* Vehicle Types Grid --End-- */}
                </div>
            </div>
        </section>
    )
}

export default TypeOfVehicleSection