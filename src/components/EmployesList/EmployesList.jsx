import EmployesListItem from '../EmployesListItem/EmployesListItem';
import './EmployesList.css';

const EmployesList = ({ data, onDelete, onToggleRise, onToggleIncrease }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                //Вычленям при помощи деструтуризации id для key, пропсы собираем в объект itemProps
                const { id, ...itemProps } = item;
                return <EmployesListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleRise={() => onToggleRise(id)}
                    onToggleIncrease={() => onToggleIncrease(id)} />;
            })}
        </ul>
    );
};

export default EmployesList;
