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
                { name: 'Nikita Kornyushin', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Dima Poroh', salary: 4000, increase: false, rise: false, id: 3 },
            ],

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

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        const { data } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length

        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployesAddForm onAdd={this.addItem} />
            </div>
        )

    }
}

export default App;
