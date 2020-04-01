import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../../assets/logo.png';
import Constants from 'expo-constants';
import api from '../../services/api';

import styles from './styles';
import { getCurrentFrame } from 'expo/build/AR';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigationToDetail(incident){
        navigation.navigate('Detail', {incident});
    }
    
    async function loadIncidents(){
        if (loading){
            return;
        }

        if (total > 0 && incidents.length == total){
            return;
        }

        setLoading(true);
        const response = await api.get('incidents', {
            params: (page)
        });
        
        setTotal(response.headers['x-total-count'])
        setIncidents([... incidents, ... response.data]);
        setPage(page + 1);
        setLoading(false);
    }
    

    useEffect(() => {
        loadIncidents()
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                renderItem={({item: incident}) => (
                     
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.nome} </Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title} </Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-Br',{
                            style: 'currency',
                            currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigationToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                
                )}
                />
                

            
            
            

        </View>
        
    );
}