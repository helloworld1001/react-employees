import { Component } from 'react';

import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployesList from '../EmployesList/EmployesList';
import EmployesAddForm from '../EmployesAddForm/EmployesAddForm';

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Dima Arhei', salary: 11000, increase: false, rise: true, id: 1 },
                { name: 'Nikita Kornyushin', salary: 500, increase: true, rise: false, id: 2 },
                { name: 'Dima Poroh', salary: 4000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all',
        }

        this.nextId = 4;
        this.number = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }


    addItem = (name, salary) => {

        if (name.trim() === '' || salary.trim() === '') {
            alert('Incorrect input')
        } else {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.nextId++
            }

            this.setState(({ data }) => ({
                data: [...data, newItem]
            }))
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    searchEmp = (items, term) => {
        if (!term.length) {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    onUpdateFilter = (filter) => {
        this.setState({ filter });
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'overThousand':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }

    }

    onChangeSalary = (id, e) => {
        const item = this.state.data.find(item => item.id === id);
        item.salary = e.target.value;
        const newData = [...this.state.data.filter(item => item.id !== id), item];
        this.setState({ data: newData })
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter currentFilter={filter} onUpdateFilter={this.onUpdateFilter} />
                </div>
                <EmployesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}
                />
                <EmployesAddForm onAdd={this.addItem} />
            </div>
        )

    }
}

export default App;
