import './restaurantCard.css';

export const RestaurantCard = (props) => {
    const restaurant = props.restaurant;
    return(
        <div className="restaurant-card" key={restaurant.id}>
            <div className="restaurant-carousel">Carrusel</div>
            <form className="restaurant-form">
                <div className="restaurant-menu">
                    {restaurant.menu.map(menuPart => {
                        return(
                            <div key={menuPart.key}>
                                <span>{menuPart.key}</span>
                                <ul>
                                    {menuPart.items.map((menuDish, index) => {
                                        return(
                                            <li key={index}>
                                                <input className="restaurant-menu-checkbox" type="checkbox"/>
                                                <span className="restaurant-menu-dish">{menuDish}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="restaurant-info">
                    <span className="restaurant-name">{restaurant.name}</span>
                    <span className="restaurant-phone">Teléfono {restaurant.phone}</span>
                    {restaurant.onlineEnabled && 
                        <button className="restaurant-button-submit">Boton pedir</button>
                    }
                </div>
            </form>
        </div>
    );
}