import { COLORS } from '@/theme';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text';

interface CustomTopTabBarProps {
    tabs: string[];
    activeTab: number;
    onTabPress: (index: number) => void;
}
const AppCustomTopTabBar: React.FC<CustomTopTabBarProps> = ({
    tabs,
    activeTab,
    onTabPress,
}) => {
    return (
        <View style={styles.tabBar}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.tabItem,
                        activeTab === index && styles.activeTab,
                    ]}
                    onPress={() => onTabPress(index)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === index && styles.activeTabText,
                        ]}
                    >
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: 15
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: COLORS.primary,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    activeTabText: {
        color: COLORS.primary,
    },
});

export default AppCustomTopTabBar;
