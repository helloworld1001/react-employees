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
            ]
        }

        this.nextId = 4;
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

    onToggleIncrease = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index];
            const newItem = { ...old, increase: !old.increase }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        const { data } = this.state;

        return (
            <div className='app'>
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployesAddForm onAdd={this.addItem} />
            </div>
        )

    }
}

export default App;
