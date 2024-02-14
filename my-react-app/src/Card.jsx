function Card(){
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <div className="card" onClick={(e) => handleClick(e)}>
            <img className="card-image" alt="profile picture" src="https://via.placeholder.com/150"></img>
            <h2 className="card-title">Sam</h2>
            <p className="card-text">I go to school and I play videogames.</p>
        </div>
    );
}
export default Card