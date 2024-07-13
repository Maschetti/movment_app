import { FlatList, View, Text } from "react-native";
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
        <View>
            <Text>{item.date}</Text>
            <Text>{item.type}</Text>
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
        />
    )
}
