import styles from './Edit.module.css';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import Inputs from './Inputs';

function EditName() {
  return (
    <div className={styles['modal_back']}>
      <div className={styles.modal}>
        <Link to="/">
          <ClearIcon className={styles.close} />
        </Link>
        <div className={styles.forms}>
          <h3>Редактировать</h3>
          <Inputs />
        </div>
      </div>
    </div>
  );
}

export default EditName;
