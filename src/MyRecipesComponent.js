function myRecipesComponent ({label, image, calories, ingredients}) {
    return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
        <img src={image} alt="food"/>
        </div>
        <ul className="list">
            {ingredients.map(ingredient =>(
                <li><img src="https://img.icons8.com/?size=1x&id=BJbWhkeKPRAx&format=png" className="icon" height="30px" alt="bun"/>
                    {ingredient}</li>
            ))}
        </ul>
        <div className="container">
        <p>{calories.toFixed()}calories</p>
        </div>
        </div>
    )
}
export default myRecipesComponent;