import React, { useState, useCallback,useEffect} from 'react'
import { View, Text, FlatList} from 'react-native'
import axios from 'axios'
import baseURL from '../../assets/common/baseUrl'
import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"
import OrderCard from '../../Shared/OrderCard'


const Orders = (props) => {

    const [orderList,setOrderList] = useState()
    const [token,setToken] = useState()

    useEffect(() => {
        AsyncStorage.getItem("jwt")
            .then((res) => {
                setToken(res);
            })
            .catch((error) => console.log(error))
        getOrders()

        return () => {
            setOrderList()
        }
    },[])

    
    const getOrders = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        axios
            .get(`${baseURL}/orders`,config)
            .then((x) => {
                console.log(x.data)
                setOrderList(x.data)
            })
            .catch((error) => console.log(error))
    }

  return (
    <View>
        <FlatList 
            data={orderList}
            renderItem={({ item }) => (
                <OrderCard navigation={props.navigation} {...item} editMode={true} />

            )}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Orders

