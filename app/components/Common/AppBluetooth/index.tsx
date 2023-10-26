import { useEffect, useReducer, useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { window } from '@/theme';

interface State {
    isScanning: boolean;
    scanDone: boolean;
    bleReady: boolean;
    items: Device[];
}

type Action =
    | { type: 'setBLEReady' }
    | { type: 'setBLEScan'; payload: boolean }
    | { type: 'addItem'; payload: Device }
    | { type: 'stopScan' }
    | { type: 'reset' };

const initialState: State = {
    isScanning: false,
    scanDone: false,
    bleReady: false,
    items: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setBLEReady':
            return { ...state, bleReady: true };
        case 'setBLEScan':
            return { ...state, isScanning: action.payload };
        case 'addItem':
            const items = state.items;
            if (items.findIndex((x) => x.id === action.payload.id) === -1) {
                items.push(action.payload);
            }
            return { ...state, items: items };
        case 'stopScan':
            return { ...state, isScanning: false, scanDone: true };
        case 'reset':
            return {
                ...state,
                items: [],
                bleReady: true,
                isScanning: false,
                scanDone: false,
            };
        default:
            return state;
    }
};

const manager = new BleManager();

export default function Bluetooth() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const stopBLEScan = () => {
        manager.stopDeviceScan();
        dispatch({ type: 'stopScan' });
    };

    const timerRef = useRef<number | null>(null);

    const scanAndConnect = () => {
        manager.startDeviceScan(null, null, (error, device) => {
            dispatch({ type: 'setBLEScan', payload: true });
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return;
            }
            // dispatch({ type: 'addItem', payload: device });
        });
    };

    useEffect(() => {
        if (state.bleReady && !state.isScanning && !state.scanDone) {
            scanAndConnect();
        }

        // if (state.isScanning && !state.scanDone) {
        //     timerRef.current = window.setTimeout(() => {
        //         stopBLEScan();
        //     }, 10000);
        // }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [state]);

    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                dispatch({ type: 'setBLEReady' });
                subscription.remove();
            }
        }, true);

        return () => subscription.remove();
    }, [manager]);

    const renderItem = ({ item }: { item: Device }) => {
        return (
            <View>
                <Text>{item.name || 'No name found'}</Text>
                <Text>{item.id}</Text>
            </View>
        );
    };

    return (
        <View>
            <View>
                <Text>
                    Available BLE devices in your area
                </Text>
            </View>
            <FlatList
                refreshing={state.isScanning}
                onRefresh={() => dispatch({ type: 'reset' })}
                renderItem={renderItem}
                data={state.items}
            />
        </View>
    );
}