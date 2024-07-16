import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from "react";

type Errors = {
    name?: string;
    email?: string;
    days?: string;
};

export default function UserInfoPage() {
    const router = useRouter();
    
    const { id } = useLocalSearchParams();
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
    const client = clients[Number(id) - 1];

    const [name, setName] = useState<string>(client.name);
    const [email, setEmail] = useState<string>('');
    const [days, setDays] = useState<string>(String(client.days));
    const [errors, setErrors] = useState<Errors>({});

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const onDeleteUser = () => {
        Alert.alert('Deseja deletar o clietne?')
    }

    const handleSubmit = () => {
        let valid = true;
        let newErrors: Errors = {};

        if (!name) {
            valid = false;
            newErrors.name = 'O cliente precisa de um nome';
        }
        if (email && !validateEmail(email)) {
            valid = false;
            newErrors.email = 'O email é inválido';
        }

        if (valid) {
            Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nNumber of Days: ${days}`);
            setErrors({});
        }
        else {
            setErrors(newErrors);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Nome do cliente"
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email do cliente"
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <View style={styles.daysContainer}>
                <Text style={styles.label}>Número de aulas</Text>
                <Text style={[styles.label, styles.days]}>{days}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <View style={styles.separator}/>

            <TouchableOpacity style={styles.listButton} onPress={() => router.push('/client/presence')}>
                <Text style={styles.listText}>Lista de presença</Text>
            </TouchableOpacity>

            <View style={styles.separator}/>

            <TouchableOpacity style={styles.listButton} onPress={() => router.push('/client/payment')}>
                <Text style={styles.listText}>Lista de pagamentos</Text>
            </TouchableOpacity>

            <View style={styles.separator}/>

            <TouchableOpacity style={[styles.deleteButton]} onPress={onDeleteUser}>
                <Text style={styles.deletButtonText}>Deletar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'rgba(139, 191, 168, 1.0)',
        height: '100%',
        alignItems: 'center',
    },
    label: {
        marginBottom: 5,
        fontSize: 18,
        color: '#3d3d3d',
        alignSelf: 'flex-start',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        width: '100%',
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: '40%',
        marginVertical: 20,
    },
    deleteButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,

        borderRadius: 10,
        width: 80,
        height: 40,
        backgroundColor: 'red',
        fontSize: 20,
        padding: 0,
        margin: 0,

        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#3d3d3d',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    deletButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center', 
    },
    separator: {
        height: 1,
        backgroundColor: '#bee2bb',
        width: '100%',
    },
    listButton: {
        width: '100%',
        paddingVertical: 20,
    },
    listText: {
        textAlign: 'left',
        fontSize: 20,
    },
    daysContainer: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
    },
    days: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
    }
});
