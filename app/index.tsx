import ClientList from '@/components/ClientList';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomePage() {
    const router = useRouter();

    const [clients, setClients] = useState([
        {
            name: 'Maria',
            days: 2,
            id: 1,
        },
        {
            name: 'Joao',
            days: 3,
            id: 2,
        },
        {
            name: 'Anesia',
            days: 4,
            id: 3,
        },
        {
            name: 'Dulce',
            days: -1,
            id: 4,
        },
        {
            name: 'Jose',
            days: -2,
            id: 5,
        },
        {
            name: 'Marta',
            days: 2,
            id: 6,
        },
        {
            name: 'Marko',
            days: 3,
            id: 7,
        },
        {
            name: 'Mateus',
            days: 4,
            id: 8,
        },
        {
            name: 'Alice',
            days: -1,
            id: 9,
        },
        {
            name: 'Camila',
            days: -2,
            id: 10,
        },
        {
            name: 'Beatriz',
            days: 2,
            id: 11,
        },
        {
            name: 'Guilherme',
            days: 3,
            id: 12,
        },
        {
            name: 'Gabriel',
            days: 4,
            id: 13,
        },
        {
            name: 'Ana',
            days: -1,
            id: 14,
        },
        {
            name: 'Cleo',
            days: -2,
            id: 15,
        },
    ]);

    function sortClientsByDays() {
        setClients((clients) => {
            const sortedClients = [...clients].sort((a, b) => a.days - b.days);
            return sortedClients;
        });
    }

    useEffect(() => {
        sortClientsByDays();
    }, []);

    return (
        <View style={homeStyle.container}>
            <Image
                source={require('../assets/images/Logo.jpg')}
                style={homeStyle.image}
            />

            <ClientList clientList={clients} />

            <TouchableOpacity style={homeStyle.addButton} onPress={() => router.push('/client/create')}>
                <Image 
                    source={require('../assets/images/add.png')}
                    style={homeStyle.addButtonImage}
                />
            </TouchableOpacity>
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
        height: 160,
        resizeMode: 'contain',
        marginTop: 20,
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    addButtonImage: {
        width: 30,
        height: 30,
    }
});
