const Bday = ({ img, name, age }) => {
  return (
    <article className="bday">
      <div className="img-container">
        <img src={img} alt={name}/>
      </div>
      <div className="info">
        <span className="name">{name}</span>
        <span className="age">{age} years</span>
      </div>
    </article>
  )
}
export default Bday
