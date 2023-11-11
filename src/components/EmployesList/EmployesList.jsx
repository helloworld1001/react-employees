import EmployesListItem from '../EmployesListItem/EmployesListItem';
import './EmployesList.css';

const EmployesList = ({ data }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                //Вычленям при помощи деструтуризации id для key, пропсы собираем в объект itemProps
                const { id, ...itemProps } = item;
                return <EmployesListItem key={id} {...itemProps} />;
            })}
        </ul>
    );
};

export default EmployesList;
