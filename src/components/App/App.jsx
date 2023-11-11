import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppFilter from '../AppFilter/AppFilter';
import EmployesList from '../EmployesList/EmployesList';
import EmployesAddForm from '../EmployesAddForm/EmployesAddForm';

import './App.css'

const App = () => {

    const data = [
        {name: 'Dima Arhei', salary: 11000, increase: true, id: 1 },
        {name: 'Nikita Kornyushin', salary: 3000, increase: false, id: 2 },
        {name: 'Dima Poroh', salary: 4000, increase: false, id: 3 },
    ]

    return (
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployesList data={data}/>
            <EmployesAddForm/>
        </div>
    );
}

export default App;
