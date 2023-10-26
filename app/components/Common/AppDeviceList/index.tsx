import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DeviceListProps = {
    peripheral: {
        name: string;
        rssi: number;
        connected: boolean;
    };
    connect: (peripheral: any) => void; // Replace 'any' with the actual type if necessary
    disconnect: (peripheral: any) => void; // Replace 'any' with the actual type if necessary
};

const DeviceList: React.FC<DeviceListProps> = ({ peripheral, connect, disconnect }) => {
    const { name, rssi, connected } = peripheral;

    return (
        <>
            {name && (
                <View style={styles.deviceContainer}>
                    <View style={styles.deviceItem}>
                        <Text style={styles.deviceName}>{name}</Text>
                        <Text style={styles.deviceInfo}>RSSI: {rssi}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => (connected ? disconnect(peripheral) : connect(peripheral))}
                        style={styles.deviceButton}
                    >
                        <Text>
                            {connected ? 'Disconnect' : 'Connect'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default DeviceList;

const styles = StyleSheet.create({
    deviceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    deviceItem: {
        marginBottom: 10,
    },
    deviceName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    deviceInfo: {
        fontSize: 14,
    },
    deviceButton: {
        backgroundColor: '#2196F3',
        padding: 8,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});
