import React, { useState, useEffect, useRef } from 'react';
import { getMenus } from "./actions";
import "./restaurantsList.css";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';

//Conectar el componente con redux y lanzar la carga del menu a traves de un dispatch de la accion
//En cada carga traer paginas de x tamaño y al estar cerca del final traer la siguiente pagina

const RestaurantsList = (props) => {
    const ITEMS_PER_PAGE = 20;

    const {
        loadMenus,
        menus,
        loading
    } = props;

    const restaurantsRef = useRef();

    useEffect(() => {
        loadMenus(0, ITEMS_PER_PAGE);
    }, []);

    const Items = React.memo(() => {
    return(
        menus.items.map(menuItem => 
            <RestaurantCard restaurant={menuItem} key={menuItem.id}/>
        )
    )}, [menus]);
    
    if(restaurantsRef.current){
        restaurantsRef.current.onScroll = () => {
            console.log("Scrolling");
            const heightToScroll = restaurantsRef.current.scrollHeight - (restaurantsRef.current.offsetHeight + restaurantsRef.current.scrollTop);

            if(heightToScroll < restaurantsRef.current.offsetHeight) {
                loadMenus((menus.currentPage + 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
                console.log("Load next page");
            }
        }
    }

    return (
        <>
            <Header />
            <div className="content" ref={restaurantsRef}>
                {loading &&
                    <div className="loading">Cargando</div>
                }
                {!loading && 
                    <Items/>
                }
            </div>
        </>
    );
}

export default connect(
    store => ({
        loading: store.restaurantsList.loading,
        menus: store.restaurantsList.menus,
    }),
    dispatch => ({
        loadMenus : (start, count) => dispatch(getMenus(start, count))
    })
)(RestaurantsList);