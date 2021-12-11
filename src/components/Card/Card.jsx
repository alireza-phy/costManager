import './CardStyle.css'

function Card({costList, setCostList, editRow, setEditRow, showCard, setShowCard}) {
    const handleChange = (e) => {
        let {name, value} = e.target
        setEditRow(preEditRow => ({...preEditRow, [name]: value}))
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(editRow)
        if (editRow.id === undefined) {
            setEditRow(preEditRow => ({...preEditRow, id:Math.floor(Math.random()*1000) }))
            setCostList([...costList, {...editRow}])
            console.log('*')
        } else {
            console.log('2*')
            setCostList(costList.map(
                item => ((item.id === editRow.id) ? {...editRow} : item)))
        }
        console.log('3*')
        setEditRow(preEditRow => (
                    preEditRow.title = '',
                    preEditRow.price = '',
                    preEditRow.count = '',
                    preEditRow.group = ''
            )
        )

        setShowCard(false)
    }
    return (
        <div className={'Card'}>
            {
                (showCard) &&
                <>
                    <h2>
                        Edit Card
                    </h2>

                    <form action="">
                        <label htmlFor="{'title'}">title</label>
                        <input id={'title'} type="text" name={'title'} value={editRow.title} onChange={handleChange}/>

                        <label htmlFor="{'count'}">count</label>
                        <input id={'count'} type="text" name={'count'} value={editRow.count} onChange={handleChange}/>

                        <label htmlFor="{'group'}">group</label>
                        <input id={'group'} type="text" name={'group'} value={editRow.group} onChange={handleChange}/>

                        <label htmlFor="{'price'}">price</label>
                        <input id={'price'} type="text" name={'price'} value={editRow.price} onChange={handleChange}/>

                        <button name={'submit'} onClick={submit}> submit</button>
                    </form>
                </>
            }

        </div>
    )
}

export default Card