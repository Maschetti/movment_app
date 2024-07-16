import { FlatList, View, Text, StyleSheet } from "react-native";
import { ItemSeparator } from "./ClientList";
import { useRef } from "react";

type PresenceProps = {
    date: string,
    type: string,
}

type PresenceListProps = {
    list: Array<PresenceProps>,
}

function renderItem({ item }: { item: PresenceProps}) {
    return (
        <View style={style.item}>
            <Text style={style.date}>{item.date}</Text>
            <Text style={style.type}>{item.type}</Text>
        </View>   
    )
}

export default function PresenceList({ list }: PresenceListProps) {
    const flatListRef = useRef<FlatList>(null);
    
    return (
        <FlatList
            ref={flatListRef}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.date)}
            ListHeaderComponent={ItemSeparator}
            ListFooterComponent={ItemSeparator}
            ItemSeparatorComponent={ItemSeparator}
            showsVerticalScrollIndicator={false}
            style={style.flatList}
        />
    )
}

const style = StyleSheet.create({
    flatList: {
        backgroundColor: 'rgba(139, 191, 168, 1.0)'
    },
    item: {
        padding: 10,
        marginVertical: 8,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        padding: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#bee2bb',
    },
    type: {
        fontSize: 18
    }
})
