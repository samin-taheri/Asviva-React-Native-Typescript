import { COLORS } from '@/theme';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const AppLearningPath: React.FC = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.stepText}>
                            This week's goal:
                        </Text>
                        <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20, bottom: 3.5, left: 10 }}>4 days</Text>
                    </View>
                </View>
                <View style={styles.dottedLine} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.stepText}>
                            Weekly exercise time:
                        </Text>
                        <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20, bottom: 3.5, left: 10 }}>90 min</Text>
                    </View>
                </View>
                <View style={styles.dottedLine} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.hollowDot}>
                        <View style={styles.innerDot} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.stepText}>
                            Calories to burn:
                        </Text>
                        <Text style={{ color: COLORS.primary, fontWeight: '600', fontSize: 20, bottom: 3.5, left: 10 }}>450 kcal</Text>
                    </View>
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
