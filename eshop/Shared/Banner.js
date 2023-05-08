import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper/src'

const { width } = Dimensions.get('window')

const Banner = () => {
    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        setBannerData(['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png',
                        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c9839ad-9907-477e-8d9e-4347d155c726/air-force-1-07-shoe-pZBS0b.png',
                        'https://static.nike.com/a/images/t_default/d9cad8f4-f7f7-441f-b94d-faa4e623abbf/air-force-1-high-shoes-3n0Jxj.png'
        ])

        return () => {
            setBannerData([])
        }
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height: width / 2 }}
                        showButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                    >
                        {bannerData.map((item) => {
                            return (
                                <Image 
                                    key={item}
                                    style={styles.imageBanner}
                                    resizeMode='contain'
                                    source={{ uri: item }}
                                />
                            )
                        })}
                    </Swiper>
                    <View style={{ height: 20 }}></View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner
