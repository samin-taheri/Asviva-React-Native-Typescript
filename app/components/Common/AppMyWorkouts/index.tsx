import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Modal from 'react-native-modal';
import AppCustomHeader from '../AppCustomHeader';
import AppMyModal from '../AppMyModal';
import { COLORS } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '../DateTimePicker';
import AppButton from '../AppButton';
import Text from '../Text';

LocaleConfig.locales['custom'] = {
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'custom';

const AppMyWorkouts: React.FC = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());
    const [dateVisible, setDateVisible] = useState(false);

    const dates = ['2023-10-13', '2023-10-14', '2023-10-15', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19'];

    function getCurrentDate(): string {
        const currentDate = new Date();
        return currentDate.toISOString().split('T')[0];
    }

    const handleCalendarClose = () => {
        setCalendarVisible(false);
    };

    const handleDatePress = (date: string) => {
        setSelectedDate(date);
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const formatDateString = (dateString: string) => {
        const date = new Date(dateString);
        const monthName = LocaleConfig.locales.custom.monthNames[date.getMonth()];
        const dayName = LocaleConfig.locales.custom.dayNames[date.getDay()];
        const day = date.getDate();
        return `${monthName} ${day} ${dayName} `;
    };
    const handleDateChange = (date: any) => {
        setSelectedDate(date.dateString);
        handleDatePress(date)
        handleCalendarClose();
    }

    return (
        <View style={styles.container}>
            <AppCustomHeader title="My Workouts" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <Pressable
                style={styles.currentDateButton}
                onPress={() => setCalendarVisible(true)}
            >
                <Feather name="calendar" size={22} color="#000" style={{ marginRight: 8 }} />
                <Text style={styles.currentDateText}>
                    {selectedDate ? formatDateString(selectedDate) : formatDateString(currentDate)}
                </Text>
            </Pressable>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dates.map((date) => (
                    <TouchableOpacity
                        key={date}
                        style={[styles.dateButton, selectedDate === date && styles.selectedDateButton]}
                        onPress={() => handleDatePress(date)}
                    >
                        <Text style={styles.dateText}>{formatDateString(date)}</Text>
                    </TouchableOpacity>

                ))}
                <View style={styles.horizontalLine} />
            </ScrollView>
            {selectedDate && (
                <View style={styles.dateScrollView}>
                    <Text style={styles.selectedDateText}>
                        {formatDateString(selectedDate)}
                    </Text>
                    <View style={{ width: '90%', alignSelf: 'center', top: '40%' }}>
                        <AppButton mt-10 type="primary" onPress={toggleModal} title="create_activity" />
                    </View>
                </View>
            )}
            {/* <Modal isVisible={calendarVisible} onBackdropPress={handleCalendarClose}> */}
            {/* <View style={styles.modalContainer}> */}
            {/* <Calendar
                        onDayPress={(day) => {
                            setSelectedDate(day.dateString);
                            handleCalendarClose();
                        }}
                        hideArrows={false}
                        hideExtraDays={true}
                        current={currentDate}
                    /> */}
            <DateTimePicker visible={calendarVisible} onClose={() => setCalendarVisible(false)} onDateChange={handleDateChange} />

            {/* </View>
            </Modal> */}
            <AppMyModal isVisible={isModalVisible} onClose={toggleModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    selectedDateButton: {
        backgroundColor: '#e1bdbc'
    },
    selectedDateContainer: {
        marginLeft: 20,
        marginTop: 20,
    },
    currentDateButton: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
        width: '50%',
        flexDirection: 'row'
    },
    loginButton: {
        width: '90%',
        height: 45,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    currentDateText: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: '600'
    },
    dateButton: {
        padding: 13,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        margin: 8,
        width: '9%',
        height: '12%',
        left: 12,
    },
    dateText: {
        textAlign: 'left',
    },
    selectedDateText: {
        fontSize: 22,
        fontWeight: '600',
        top: '30%',
        textAlign: 'left',
        marginLeft: 25,
        color: '#000'
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    horizontalLine: {
        borderTopWidth: 2,
        borderColor: 'gray',
    },
    dateScrollView: {
        borderTopWidth: 1,
        borderColor: 'gray',
        bottom: '50%',
        marginBottom: 10,
    },
});

export default AppMyWorkouts;
