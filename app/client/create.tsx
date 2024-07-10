import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

type Errors = {
  name?: string;
  email?: string;
  days?: string;
};

export default function CreateClientPage() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [days, setDays] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

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
        if (!days) {
            valid = false;
            newErrors.days = 'Coloque o número de aulas';
        }

        if (valid) {
            Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nNumber of Days: ${days}`);
            // Clear form fields
            setName('');
            setEmail('');
            setDays('');
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
        
        <Text style={styles.label}>Número de aulas</Text>
        <TextInput
            style={styles.input}
            value={days}
            onChangeText={setDays}
            placeholder="Coloque o número de aulas"
            keyboardType="numeric"
        />
        {errors.days && <Text style={styles.errorText}>{errors.days}</Text>}
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
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
        marginTop: 20,
    },
    buttonText: {
        color: '#3d3d3d',
        fontSize: 20,
    },
});
