import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import * as MailComposer from 'expo-mail-composer';




export default function Detail(){

    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();

    const mensage = `Olá ${incident.nome}, estou entrando em contato pois gostaria de ajudar no caso da "${incident.title}" com o valor de ${Intl.NumberFormat('pt-Br',{
        style: 'currency',
        currency: 'BRL'
        }).format(incident.value)} ` ;

    function sendWhats(){
        Linking.openURL(`whatsapp://send?phone=${incident.whats}&text=${mensage}`);
    } 

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: mensage
        });
    }
    
    function navigateBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color='#E82041'/>
                </TouchableOpacity>

            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.nome} de {incident.cidade}/{incident.uf} </Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-Br',{
                            style: 'currency',
                            currency: 'BRL'
                            }).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhats}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

        </View>
    );
}