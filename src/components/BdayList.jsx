import Bday from "./Bday"
const BdayList = ({people}) => {
  return (
    <section className="bday-list">
      {people.map(birthday => {
        return <Bday key={birthday.id} {...birthday}/>
      })}
    </section>
  )
}
export default BdayList
