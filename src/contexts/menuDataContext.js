import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {getProductsFromDb} from "../services/firestoreProducts";
import {useMessageContext} from "./messageContext";

const MenuDataContext = createContext();

export function MenuDataProvider(props) {
    const [menuData, setMenuData] = useState([]);
    const {setMessage} = useMessageContext();

    const flatMenuData = useMemo(() => [].concat(...menuData.map(c => c.products)), [ menuData ]);

    const findProduct = useCallback(
        (productName) => flatMenuData.find(p => p.name===productName),
        [flatMenuData]
    );

    const loadMenu = useCallback(async function () {
        setMessage("loading");
        const menuDataFromDb = await getProductsFromDb();
        setMenuData(menuDataFromDb);
        setMessage(menuDataFromDb.length ? "" : "error : network connection problem");
    }, [setMessage, setMenuData]);

    useEffect(() => {
        loadMenu();
    }, [loadMenu]);

    const api = useMemo(() => ({ menuData, setMenuData, findProduct }), [menuData, setMenuData, findProduct]);

    return <MenuDataContext.Provider value={api}>
        {props.children}
    </MenuDataContext.Provider>
}

export const useMenuDataContext = () => useContext(MenuDataContext);