import {useState} from "react";
import './headerStyle.css'
function Header({costList, setCostList}) {
    let sumfood = sumFood()
    const [sumFoodCost, setSumFoodCost] = useState(sumfood)


    function sumFood () {
        let sum = 0
         costList.map(item => {
            if (item.group === 'food') {
                // setSumFoodCost(sumFoodCost + item.price)
                sum += item.price
            }
        })
        return sum
    }



    return (
        <div className={'headerContainer'}>
            <div className={'filterSum'}>
                <p>
                    food cost: {sumFoodCost}
                </p>

            </div>
            <div className={'image'}>

            </div>

        </div>
    )
}

export default Header