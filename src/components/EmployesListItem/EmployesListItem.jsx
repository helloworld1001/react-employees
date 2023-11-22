import './EmployesListItem.css'

const EmployesListItem = ({ name, salary, onDelete, onToggleProp, onChangeSalary, increase, rise }) => {
    const classes = `list-group-item ${increase && 'increase'} ${rise && 'like'} d-flex justify-content-between`

    return (
        <li className={classes}>
            <span onClick={onToggleProp} className="list-group-item-label like" data-toggle='rise'>{name}</span>
            <input onChange={onChangeSalary} type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle='increase'
                    onClick={onToggleProp}>
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
