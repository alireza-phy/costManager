
function Table ({costList, setCostList, editRow, setEditRow, showCard, setShowCard}) {
    function DeleteBtn (id) {
    setCostList (
        costList.filter(item => item.id !== id)
    )}
    function EditBtn (id) {
        const selectId = costList.filter(item => item.id === id)[0]
        setShowCard (true)
        setEditRow(preEditRow=>({...preEditRow,...selectId}))

    }
    const addRow= () => {
     setShowCard(true)
    }

    return (
        <div>
            <table>
            <thead>

            <tr>
                <td> title </td>
                <td> count </td>
                <td> group</td>
                <td> price </td>
                <td> options </td>
            </tr>
            </thead>

            <tbody>
            {costList.map(item => (
            <tr key={item.id}>
                <td> {item.title} </td>
                <td> {item.count} </td>
                <td> {item.group}</td>
                <td> {item.price} </td>
                <td> <button onClick={() => DeleteBtn (item.id) }>delete</button>
                    <button onClick={() => EditBtn (item.id) }>edit</button>
                </td>
            </tr>
            )
            )
            }
            </tbody>
            </table>
            <button onClick={addRow}>
                add new cost
            </button>
        </div>
    )
}

export default Table