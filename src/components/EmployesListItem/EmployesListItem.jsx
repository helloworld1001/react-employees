import './EmployesListItem.css'

const EmployesListItem = (props) => {

    const { name, salary, onDelete, onToggleRise, onToggleIncrease, increase, rise } = props;

    const classes = `list-group-item ${increase && 'increase'} ${rise && 'like'} d-flex justify-content-between`

    return (
        <li className={classes}>
            <span onClick={onToggleIncrease} className="list-group-item-label like">{name} </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployesListItem;
