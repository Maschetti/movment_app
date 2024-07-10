// import ClientList from '@/components/ClientList';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

export default function Home() {
    const [clients, setClients] = useState([
        {
            name: 'Maria',
            days: 2,
        },
        {
            name: 'Joao',
            days: 3,
        },
        {
            name: 'Anesia',
            days: 4,
        },
        {
            name: 'Dulce',
            days: -1,
        },
        {
            name: 'Jose',
            days: -2,
        },
    ])

    
    

    function sortClientsByDays() {
        setClients((clients) => {
          const sortedClients = [...clients].sort((a, b) => a.days - b.days);
          return sortedClients;
        });
    };

    useEffect(() => {
        sortClientsByDays();
    }, []);

    return (
        <View style={homeStyle.container}>
            <Image
                source={require('../assets/images/Logo.jpg')}
                style={homeStyle.image}
            />
            {/* 
            <ClientList
                clientList={clients}
            >

            </ClientList> */}
        </View>
    );
}

const homeStyle = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        flex: 1,
        backgroundColor: 'rgba(139, 191, 168, 1.0)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
});
