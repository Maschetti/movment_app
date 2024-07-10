import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, TextInput, Image } from 'react-native';

type ItemProps = {
    name: string,
    days: number,
}

type ClientListProps = {
    clientList: Array<ItemProps>
}

const getBackgroundColor = (days: number) => {
    if (days <= 0) {
        return 'rgba(255, 181, 181, 1)'; // Red
    } else if (days <= 2) {
        return 'rgba(253, 255, 179, 1.0)'; // Yellow
    } else {
        return 'transparent'; // Green
    }
};

function ItemSeparator() {
    return (
        <View style={clientListStyle.separator} />
    )
}

export default function ClientList({ clientList }: ClientListProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const renderItem = ({ item }: { item: ItemProps }) => {
        const backgroundColor = getBackgroundColor(item.days);
        return (
            <View>
                <View style={clientListStyle.item}>
                    <View style={[clientListStyle.circle, { backgroundColor }]}>
                        <Text style={clientListStyle.days}>{item.days}</Text>
                    </View>
                    <Text style={clientListStyle.text}>{item.name}</Text>
                </View>
            </View>
        );
    };

    const filteredClientList = clientList.filter(client =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={clientListStyle.container}>
            <View style={clientListStyle.searchContainer}>
                <Image
                    source={require('../assets/images/search.png')} // Update the path to your search icon
                    style={clientListStyle.searchIcon}
                />
                <TextInput
                    style={clientListStyle.searchBar}
                    placeholder="Procure um cliente"
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>
            <FlatList
                data={filteredClientList}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={ItemSeparator}
                ListFooterComponent={ItemSeparator}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}

const clientListStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    days: {
        fontSize: 20,
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#bee2bb',
        width: '100%',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'white',
        
        height: 60,

        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        fontSize: 20,
    },
});
