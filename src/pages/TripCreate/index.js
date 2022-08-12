import TripForm from '../../components/TripForm';

const Trip = () => {

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <TripForm id={null} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Trip;