import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.css'

export const Loading = ({ loadPage = false }) => {

    return(
        <div className={loadPage ? 'loadPage' : 'loading'}>
            <div className='background'>
                <span className='icon'>
                    <FontAwesomeIcon icon={faSpinner} />
                </span>
            </div>
        </div>
    );
}