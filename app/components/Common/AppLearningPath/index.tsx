import { COLORS } from '@/theme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppLearningPath: React.FC = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <Text style={styles.stepText}>
                        This week's goal: <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20 }}>4 days</Text>
                    </Text>
                </View>
                <View style={styles.dottedLine} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <Text style={styles.stepText}>
                        Weekly exercise time: <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20 }}>90 min</Text>
                    </Text>
                </View>
                <View style={styles.dottedLine} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <Text style={styles.stepText}>
                        Calories to burn: <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20 }}>450 kcal</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    stepContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginTop: 30,
    },
    dottedLine: {
        height: 40,
        marginLeft: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'gray',
    },
    dot: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    stepText: {
        fontSize: 16,
        marginLeft: 10,
    },
    hollowDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerDot: {
        width: 15,
        height: 15,
        borderRadius: 9,
        backgroundColor: COLORS.primary,
    },
});

export default AppLearningPath;
