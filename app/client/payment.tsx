import PaymentList from "@/components/PaymentList";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function PaymentPage() {
    const [list, setList] = useState([
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Crédito',
            price: 250,
            days: 8,
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Débito',
            price: 250,
            days: 8,
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Dinheiro',
            price: 250,
            days: 8,
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Pix',
            price: 250,
            days: 8,
        }
      ]);
    return (
        <PaymentList list={list}/>
    )
}

const style = StyleSheet.create({

})
