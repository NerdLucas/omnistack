import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
        marginTop: 48,
    },

    incidentList: {
        marginTop: 24
    },

    incidentProperty: {
        fontSize: 14,
        color: '#737380',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 0,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        color: '#13131a',
        fontSize: 20,
        lineHeight:30,
    },

    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent:'center',
        alignItems: 'center',
        
    },

    actionText:{
        color:'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});