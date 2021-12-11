import './App.css';
import Header from './components/header/Header'
import {useState} from "react";
import Table from "./components/tableCost/tableCost";
import Card from "./components/Card/Card";

const list = [
    {
        id: 1,
        title: 'buy meat',
        count: '1kg',
        price: 250000,
        group: 'food',
    },
    {
        id: 2,
        title: 'go to cinema',
        count: '2',
        price: 50000,
        group: 'entertainment',
    },
    {
        id: 3,
        title: 'gas bill',
        count: '1',
        price: 60000,
        group: 'Bills',
    },
    {
        id: 4,
        title: 'fruits',
        count: '10kg',
        price: 120000,
        group: 'food',
    }
]

function App() {
    const [costList, setCostList] = useState(list)
    const [editRow, setEditRow] = useState([])
    const [showCard, setShowCard] = useState(false)
    return (
        <div className="App">

            <Header costList={costList} setCostList={setCostList}>

            </Header>
            <div>
                <Table editRow={editRow} setEditRow={setEditRow}
                       showCard={showCard} setShowCard={setShowCard}
                       costList={costList} setCostList={setCostList} className={'table'}> </Table>
                <Card editRow={editRow} setEditRow={setEditRow}
                      showCard={showCard} setShowCard={setShowCard}
                      costList={costList} setCostList={setCostList}> </Card>
            </div>

        </div>
    );
}

export default App;