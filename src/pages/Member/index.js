import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MemberComponent from '../../components/MemberComponent';

const Member = () => {
    const navigate = useNavigate();

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <MemberComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button onClick={()=>{
                            navigate('/view/trip/all');
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

  return renderHTML();
};
export default Member;
