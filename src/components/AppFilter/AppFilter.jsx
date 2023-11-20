import { Component } from 'react';
import './AppFilter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.buttonsData = [
            { name: 'all', label: 'Все сотрудники' },
            { name: 'rise', label: 'На повышение' },
            { name: 'overThousand', label: 'З/П больше 1000$' }
        ]
    }

    render() {
        const { onUpdateFilter, currentFilter } = this.props;
        const buttons = this.buttonsData.map(({ name, label }) => {
            const active = currentFilter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onUpdateFilter(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;
