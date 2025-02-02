import PresenceList from "@/components/PresenceList";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function PresencePage() {
    const [list, setList] = useState([
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Presente'
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Presente'
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Presente'
        },
        {
            date: new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }),
            type: 'Falta'
        }
      ]);
    return (
        <PresenceList list={list}/>
    )
}

const style = StyleSheet.create({

})
