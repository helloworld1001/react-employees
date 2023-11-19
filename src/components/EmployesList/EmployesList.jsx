import EmployesListItem from '../EmployesListItem/EmployesListItem';
import './EmployesList.css';

const EmployesList = ({ data, onDelete, onToggleProp }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                //Вычленям при помощи деструтуризации id для key, пропсы собираем в объект itemProps
                const { id, ...itemProps } = item;
                return <EmployesListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                />;
            })}
        </ul>
    );
};

export default EmployesList;
