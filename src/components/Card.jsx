import Title from "./Title"
import BdayList from "./BdayList"
import ClearButton from "./ClearButton"
import { birthdays } from '../data'
import { useState } from 'react'
const Card = () => {
  const [people, setPeople] = useState(birthdays)
  return (
    <div className="card">
      <Title num={people.length}/>
      <BdayList people={people} />
      <ClearButton func={() => setPeople([])} />
    </div>
  )
}
export default Card
