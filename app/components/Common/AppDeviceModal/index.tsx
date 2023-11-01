import React, { FC, useCallback } from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    ActivityIndicator,
    SafeAreaView,
    Image,
    ScrollView,
} from 'react-native';
import { Device } from 'react-native-ble-plx';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import Feather from 'react-native-vector-icons/Feather';
import Text from '../Text';
import { COLORS, padding } from '@/theme';

type DeviceModalListItemProps = {
    item: ListRenderItemInfo<Device>;
    connectToPeripheral: (device: Device) => void;
    closeModal: () => void;
};

type DeviceModalProps = {
    devices: Device[];
    visible: boolean;
    connectToPeripheral: (device: Device) => void;
    closeModal: () => void;
};

const DeviceModalListItem: FC<DeviceModalListItemProps> = props => {
    const { item, connectToPeripheral, closeModal } = props;

    const connectAndCloseModal = useCallback(() => {
        connectToPeripheral(item.item);
        closeModal();
    }, [closeModal, connectToPeripheral, item.item]);

    return (
        <TouchableOpacity
            onPress={connectAndCloseModal}
            style={modalStyle.ctaButton}>
            <Text style={modalStyle.ctaButtonText}>{item.item.id}</Text>
        </TouchableOpacity>
    );
};

const DeviceModal: FC<DeviceModalProps> = props => {
    const { devices, visible, connectToPeripheral, closeModal } = props;
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const renderDeviceModalListItem = useCallback(
        (item: ListRenderItemInfo<Device>) => {
            return (
                <DeviceModalListItem
                    item={item}
                    connectToPeripheral={connectToPeripheral}
                    closeModal={closeModal}
                />
            );
        },
        [closeModal, connectToPeripheral],
    );
    return (
        <Modal
            style={modalStyle.modalContainer}
            animationType="slide"
            transparent={false}
            visible={visible}>
            <View style={modalStyle.modalTitle}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 20 }}>
                    <Feather
                        name="x"
                        size={30}
                        color="black"
                        style={{ paddingRight: 20, paddingTop: 15 }}
                        onPress={closeModal}
                    />
                    <Text style={modalStyle.modalTitleText}>
                        Tap on a device to connect
                    </Text>
                </View>
                {devices ? (
                    <SafeAreaView style={modalStyle.contentContainer}>
                        <Image source={require('../../../assets/images/power-bike-5.png')} style={modalStyle.image2} />
                        <ActivityIndicator size={'large'} color={COLORS.primary} />
                    </SafeAreaView>
                ) : null}
                <SafeAreaView style={{ flex: 1, maxHeight: '65%', marginTop: '5%' }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={devices}
                        renderItem={renderDeviceModalListItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </SafeAreaView>
            </View>
        </Modal>
    );
};

const modalStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '2%',
        width: '90%',
        height: '10%',
        alignItems: 'center',
        paddingLeft: '10%',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    modalFlatlistContiner: {
        flex: 1,
        justifyContent: 'center',
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 15,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
    },
    image2: {
        width: 130,
        height: 130,
    },
    modalCellOutline: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
    },
    modalTitle: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    modalTitleText: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 25,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'
    },
    ctaButton: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 8,
    },
    ctaButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default DeviceModal;