import './EmployesListItem.css'
import { Component } from 'react';

class EmployesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { name, salary } = this.props;
        const { increase, like } = this.state;

        const classes = `list-group-item ${increase && 'increase'} ${like && 'like'} d-flex justify-content-between`

        return (
            <li className={classes}>
                <span onClick={this.onLike} className="list-group-item-label like">{name} </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployesListItem;
