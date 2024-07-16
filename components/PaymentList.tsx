import { FlatList, View, Text, StyleSheet } from "react-native";
import { ItemSeparator } from "./ClientList";
import { useRef } from "react";

type PaymentProps = {
    date: string,
    type: string,
    price: number,
    days: number,
}

type PaymentListProps = {
    list: Array<PaymentProps>,
}

const VerticalSeparator = () => {
    return (
        <View style={style.separator}/>
    )
}

function renderItem({ item }: { item: PaymentProps}) {
    return (
        <View style={style.item}>
            <Text style={style.date}>{item.date}</Text>
            <VerticalSeparator />
            <Text style={style.type}>{item.type}</Text>
            <VerticalSeparator />
            <Text style={style.price}>{item.price}</Text>
            <VerticalSeparator />
            <Text style={style.days}>{item.days}</Text>
        </View>   
    )
}
export default function PaymentList({ list }: PaymentListProps) {
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
    separator: {
        height: '100%',
        width: 1,
        backgroundColor: '#bee2bb',
    },
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

    },
    type: {
        fontSize: 18,
        width: '25%'
    },
    price: {
        fontSize: 18,
        width: '15%'
    },
    days: {
        fontSize: 18,
    }
})
