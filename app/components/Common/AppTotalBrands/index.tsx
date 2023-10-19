import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import AppCustomHeader from "../AppCustomHeader";
import AppLable from "../AppLable";
import AppBrandCard from "../AppBrandCard";
import { COLORS } from "@/theme";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import Text from "../Text";

const brands = [
    { name: 'asviva', uri: 'https://static.kinomap.com/manufacturer/asviva.png' },
    { name: 'adidas', uri: 'https://static.kinomap.com/manufacturer/adidas.png' },
    { name: 'alinco', uri: 'https://static.kinomap.com/manufacturer/alinco.png' },
    { name: 'abilica', uri: 'https://static.kinomap.com/manufacturer/abilica.png' },
    { name: 'anyrun', uri: 'https://static.kinomap.com/manufacturer/anyrun.png' },
    { name: 'attacus', uri: 'https://static.kinomap.com/manufacturer/attacus.png' },
    { name: 'aquarowing', uri: 'https://static.kinomap.com/manufacturer/aquarowing.png' },
    { name: 'artgo', uri: 'https://static.kinomap.com/manufacturer/artgo.png' },
    { name: 'andre-martin', uri: 'https://static.kinomap.com/manufacturer/andre-martin.png' },
    { name: 'BTWIN', uri: 'https://static.kinomap.com/manufacturer/BTWIN.png' },
    { name: 'behumax', uri: 'https://static.kinomap.com/manufacturer/behumax.png' },
    { name: 'beter-sport', uri: 'https://static.kinomap.com/manufacturer/beter-sport.png' },
    { name: 'BHFitness', uri: 'https://static.kinomap.com/manufacturer/BHFitness.png' },
    { name: 'biorower', uri: 'https://static.kinomap.com/manufacturer/biorower.png' },
    { name: 'BKOOL', uri: 'https://static.kinomap.com/manufacturer/BKOOL.png' },
    { name: 'Blackburn', uri: 'https://static.kinomap.com/manufacturer/Blackburn.png' },
    { name: 'bluefin-fitness', uri: 'https://static.kinomap.com/manufacturer/bluefin-fitness.png' },
    { name: 'bodimax', uri: 'https://static.kinomap.com/manufacturer/bodimax.png' },
    { name: 'BodyBike', uri: 'https://static.kinomap.com/manufacturer/BodyBike.png' },
    { name: 'BodyFlex', uri: 'https://static.kinomap.com/manufacturer/BodyFlex.png' },
    { name: 'bodycraft', uri: 'https://static.kinomap.com/manufacturer/bodycraft.png' },
    { name: 'bodytone', uri: 'https://static.kinomap.com/manufacturer/bodytone.png' },
    { name: 'botorro', uri: 'https://static.kinomap.com/manufacturer/botorro.png' },
    { name: 'bowflex', uri: 'https://static.kinomap.com/manufacturer/bowflex.png' },
    { name: 'brother', uri: 'https://static.kinomap.com/manufacturer/brother.png' },
    { name: 'capital-sports', uri: 'https://static.kinomap.com/manufacturer/capital-sports.png' },
    { name: 'cardiofitness', uri: 'https://static.kinomap.com/manufacturer/cardiofitness.png' },
    { name: 'cardiostrong', uri: 'https://static.kinomap.com/manufacturer/cardiostrong.png' },
    { name: 'CareFitness', uri: 'https://static.kinomap.com/manufacturer/CareFitness.png' },
    { name: 'casall-by-qz', uri: 'https://static.kinomap.com/manufacturer/casall-by-qz.png' },
    { name: 'cascade', uri: 'https://static.kinomap.com/manufacturer/cascade.png' },
    { name: 'cecotec', uri: 'https://static.kinomap.com/manufacturer/cecotec.png' },
    { name: 'chang-yow', uri: 'https://static.kinomap.com/manufacturer/chang-yow.png' },
    { name: 'christopeit-sport', uri: 'https://static.kinomap.com/manufacturer/christopeit-sport.png' },
    { name: 'Ciclotte', uri: 'https://static.kinomap.com/manufacturer/Ciclotte.png' },
    { name: 'circuit-fitness', uri: 'https://static.kinomap.com/manufacturer/circuit-fitness.png' },
    { name: 'Computrainer', uri: 'https://static.kinomap.com/manufacturer/Computrainer.png' },
    { name: 'Concept2', uri: 'https://static.kinomap.com/manufacturer/Concept2.png' },
    { name: 'conlin', uri: 'https://static.kinomap.com/manufacturer/conlin.png' },
    { name: 'crivit', uri: 'https://static.kinomap.com/manufacturer/crivit.png' },
    { name: 'd-c-athletics', uri: 'https://static.kinomap.com/manufacturer/d-c-athletics.png' },
    { name: 'dansprint', uri: 'https://static.kinomap.com/manufacturer/dansprint.png' },
    { name: 'darwin', uri: 'https://static.kinomap.com/manufacturer/darwin.png' },
    { name: 'deep-fitness', uri: 'https://static.kinomap.com/manufacturer/deep-fitness.png' },
    { name: 'delightech', uri: 'https://static.kinomap.com/manufacturer/delightech.png' },
    { name: 'deskbike', uri: 'https://static.kinomap.com/manufacturer/deskbike.png' },
    { name: 'dfc', uri: 'https://static.kinomap.com/manufacturer/dfc.png' },
    { name: 'diadora', uri: 'https://static.kinomap.com/manufacturer/diadora.png' },
    { name: 'DKN', uri: 'https://static.kinomap.com/manufacturer/DKN.png' },
    { name: 'Domyos', uri: 'https://static.kinomap.com/manufacturer/Domyos.png' },
    { name: 'dong-qi', uri: 'https://static.kinomap.com/manufacturer/dong-qi.png' },
    { name: 'echelon-by-qz', uri: 'https://static.kinomap.com/manufacturer/echelon-by-qz.png' },
    { name: 'ehealth', uri: 'https://static.kinomap.com/manufacturer/ehealth.png' },
    { name: 'Elite', uri: 'https://static.kinomap.com/manufacturer/Elite.png' },
    { name: 'endex', uri: 'https://static.kinomap.com/manufacturer/endex.png' },
    { name: 'eunsung', uri: 'https://static.kinomap.com/manufacturer/eunsung.png' },
    { name: 'evertop-fitness', uri: 'https://static.kinomap.com/manufacturer/evertop-fitness.png' },
    { name: 'fassi', uri: 'https://static.kinomap.com/manufacturer/fassi.png' },
    { name: 'feedback-sports', uri: 'https://static.kinomap.com/manufacturer/feedback-sports.png' },
    { name: 'finnlo', uri: 'https://static.kinomap.com/manufacturer/finnlo.png' },
    { name: 'first-degree-fitness-fluid-exercice', uri: 'https://static.kinomap.com/manufacturer/first-degree-fitness-fluid-exercice.png' },
    { name: 'first-degree-fitness-fluid-rower', uri: 'https://static.kinomap.com/manufacturer/first-degree-fitness-fluid-rower.png' },
    { name: 'fitengine', uri: 'https://static.kinomap.com/manufacturer/fitengine.png' },
    { name: 'fitfiu', uri: 'https://static.kinomap.com/manufacturer/fitfiu.png' },
    { name: 'genis-fitness', uri: 'https://static.kinomap.com/manufacturer/genis-fitness.png' },
    { name: 'giant', uri: 'https://static.kinomap.com/manufacturer/giant.png' },
    { name: 'gowell-fitness', uri: 'https://static.kinomap.com/manufacturer/gowell-fitness.png' },
    { name: 'gymconnect', uri: 'https://static.kinomap.com/manufacturer/gymconnect.png' },
    { name: 'Hammer', uri: 'https://static.kinomap.com/manufacturer/Hammer.png' },
    { name: 'hci-fitness', uri: 'https://static.kinomap.com/manufacturer/hci-fitness.png' },
    { name: 'head', uri: 'https://static.kinomap.com/manufacturer/head.png' },
    { name: 'hop-sport', uri: 'https://static.kinomap.com/manufacturer/hop-sport.png' },
    { name: 'iConsole', uri: 'https://static.kinomap.com/manufacturer/iConsole.png' },
    { name: 'inspire-by-qz', uri: 'https://static.kinomap.com/manufacturer/inspire-by-qz.png' },
    { name: 'ise', uri: 'https://static.kinomap.com/manufacturer/ise.png' },
    { name: 'jasport', uri: 'https://static.kinomap.com/manufacturer/jasport.png' },
    { name: 'JetBlack', uri: 'https://static.kinomap.com/manufacturer/JetBlack.png' },
    { name: 'jk-fitness', uri: 'https://static.kinomap.com/manufacturer/jk-fitness.png' },
    { name: 'jll-fitness', uri: 'https://static.kinomap.com/manufacturer/jll-fitness.png' },
    { name: 'kayakpro', uri: 'https://static.kinomap.com/manufacturer/kayakpro.png' },
    { name: 'Kettler', uri: 'https://static.kinomap.com/manufacturer/Kettler.png' },
    { name: 'kettler-europe-2022-onwards', uri: 'https://static.kinomap.com/manufacturer/kettler-europe-2022-onwards.png' },
    { name: 'Kinetic', uri: 'https://static.kinomap.com/manufacturer/Kinetic.png' },
    { name: 'king-i-tech', uri: 'https://static.kinomap.com/manufacturer/king-i-tech.png' },
    { name: 'LifeFitness', uri: 'https://static.kinomap.com/manufacturer/LifeFitness.png' },
    { name: 'lifepro-fitness', uri: 'https://static.kinomap.com/manufacturer/lifepro-fitness.png' },
    { name: 'lifespan', uri: 'https://static.kinomap.com/manufacturer/lifespan.png' },
    { name: 'lifespan-fitness', uri: 'https://static.kinomap.com/manufacturer/lifespan-fitness.png' },
    { name: 'magene-technology-co', uri: 'https://static.kinomap.com/manufacturer/magene-technology-co.png' },
    { name: 'marathon', uri: 'https://static.kinomap.com/manufacturer/marathon.png' },
    { name: 'masterfit', uri: 'https://static.kinomap.com/manufacturer/masterfit.png' },
    { name: 'matrix', uri: 'https://static.kinomap.com/manufacturer/matrix.png' },
    { name: 'neezee', uri: 'https://static.kinomap.com/manufacturer/neezee.png' },
    { name: 'niceday', uri: 'https://static.kinomap.com/manufacturer/niceday.png' },
    { name: 'nobleo', uri: 'https://static.kinomap.com/manufacturer/noble-pro.png' },
    { name: 'nhord', uri: 'https://static.kinomap.com/manufacturer/nohrd.png' },
    { name: 'northpole', uri: 'https://static.kinomap.com/manufacturer/npe.png' },
    { name: 'oma', uri: 'https://static.kinomap.com/manufacturer/OMA.png' },
    { name: 'orbit', uri: 'https://static.kinomap.com/manufacturer/orbit-fitness-equipment.png' },
    { name: 'oreka', uri: 'https://static.kinomap.com/manufacturer/oreka-training.png' },
    { name: 'orion', uri: 'https://static.kinomap.com/manufacturer/orion-fitness.png' },
    { name: 'ovix', uri: 'https://static.kinomap.com/manufacturer/ovicx.png' },
    { name: 'pafers', uri: 'https://static.kinomap.com/manufacturer/Pafers.png' },
    { name: 'peakfitness', uri: 'https://static.kinomap.com/manufacturer/peak-fitness.png' },
    { name: 'powerland', uri: 'https://static.kinomap.com/manufacturer/powerland.png' },
    { name: 'powerplus', uri: 'https://static.kinomap.com/manufacturer/powerplus.png' },
    { name: 'precore', uri: 'https://static.kinomap.com/manufacturer/precor.png' },
    { name: 'progressive', uri: 'https://static.kinomap.com/manufacturer/progressive.png' },
    { name: 'gzfitness', uri: 'https://static.kinomap.com/manufacturer/qz-fitness.png' },
    { name: 'reebok', uri: 'https://static.kinomap.com/manufacturer/reebok.png' },
    { name: 'renpho', uri: 'https://static.kinomap.com/manufacturer/renpho.png' },
    { name: 'revbox', uri: 'https://static.kinomap.com/manufacturer/Revbox.png' },
    { name: 'rfx', uri: 'https://static.kinomap.com/manufacturer/rfx.png' },
    { name: 'rpm', uri: 'https://static.kinomap.com/manufacturer/rpm-power.png' },
    { name: 'salter', uri: 'https://static.kinomap.com/manufacturer/salter.png' },
    { name: 'saris', uri: 'https://static.kinomap.com/manufacturer/saris.png' },
    { name: 'schwinn', uri: 'https://static.kinomap.com/manufacturer/SchwinnFitness.png' },
    { name: 'senzsports', uri: 'https://static.kinomap.com/manufacturer/senz-sports.png' },
    { name: 'shuafitness', uri: 'https://static.kinomap.com/manufacturer/shua-fitness.png' },
    { name: 'skandika', uri: 'https://static.kinomap.com/manufacturer/Skandika.png' },
    { name: 'smartrow', uri: 'https://static.kinomap.com/manufacturer/smartrow.png' },
    { name: 'snode', uri: 'https://static.kinomap.com/manufacturer/snode-by-qz.png' },
    { name: 'solefitness', uri: 'https://static.kinomap.com/manufacturer/sole-fitness.png' },
    { name: 'speedo', uri: 'https://static.kinomap.com/manufacturer/speedo-only-in-brazil.png' },
    { name: 'spirit', uri: 'https://static.kinomap.com/manufacturer/spirit.pngg' },
    { name: 'sportop', uri: 'https://static.kinomap.com/manufacturer/sportop.png' },
    { name: 'sportplus', uri: 'https://static.kinomap.com/manufacturer/sportplus.png' },
    { name: 'sportsart', uri: 'https://static.kinomap.com/manufacturer/sportsart-1.png' },
    { name: 'sportsmaster', uri: 'https://static.kinomap.com/manufacturer/sportsmaster.png' },
    { name: 'staczero', uri: 'https://static.kinomap.com/manufacturer/stac-zero.png' },
    { name: 'stagescycling', uri: 'https://static.kinomap.com/manufacturer/stages-cycling.png' },
    { name: 'stairemaster', uri: 'https://static.kinomap.com/manufacturer/stairmaster.png' },
    { name: 'startrac', uri: 'https://static.kinomap.com/manufacturer/star-trac.png' },
    { name: 'strake', uri: 'https://static.kinomap.com/manufacturer/starke.png' },
    { name: 'stilfit', uri: 'https://static.kinomap.com/manufacturer/stil-fit.png' },
    { name: 'stryd', uri: 'https://static.kinomap.com/manufacturer/stryd.png' },
    { name: 'synchronaction', uri: 'https://static.kinomap.com/manufacturer/synchronaction.png' },
    { name: 'tacx', uri: 'https://static.kinomap.com/manufacturer/Tacx.png' },
    { name: 'taizhi', uri: 'https://static.kinomap.com/manufacturer/tai-zhi.png' },
    { name: 'taurus', uri: 'https://static.kinomap.com/manufacturer/taurus.png' },
    { name: 'techfit', uri: 'https://static.kinomap.com/manufacturer/techfit.png' },
    { name: 'technogym', uri: 'https://static.kinomap.com/manufacturer/technogym.png' },
    { name: 'tecnofit', uri: 'https://static.kinomap.com/manufacturer/tecnofit.png' },
    { name: 'test', uri: 'https://static.kinomap.com/manufacturer/tests.png' },
    { name: 'titanlife', uri: 'https://static.kinomap.com/manufacturer/titan-life.png' },
    { name: 'toorx', uri: 'https://static.kinomap.com/manufacturer/toorx.png' },
    { name: 'topiom', uri: 'https://static.kinomap.com/manufacturer/topiom.png' },
    { name: 'ukfitness', uri: 'https://static.kinomap.com/manufacturer/uk-fitness.png' },
    { name: 'ultrasport', uri: 'https://static.kinomap.com/manufacturer/ultrasport-by-qz.png' },
    { name: 'ultryup', uri: 'https://static.kinomap.com/manufacturer/utryup.png' },
    { name: 'vmax', uri: 'https://static.kinomap.com/manufacturer/v-max.png' },
    { name: 'vanrysel', uri: 'https://static.kinomap.com/manufacturer/van-rysel.png' },
    { name: 'virtufit', uri: 'https://static.kinomap.com/manufacturer/virtufit.png' },
    { name: 'vraifitness', uri: 'https://static.kinomap.com/manufacturer/vrai-fitness.png' },
    { name: 'vulcanstrength', uri: 'https://static.kinomap.com/manufacturer/vulcan-strength.png' },
    { name: 'wahoo', uri: 'https://static.kinomap.com/manufacturer/Wahoo.png' },
    { name: 'waterpower', uri: 'https://static.kinomap.com/manufacturer/waterrower.png' },
    { name: 'wattbike', uri: 'https://static.kinomap.com/manufacturer/Wattbike.png' },
    { name: 'woodway', uri: 'https://static.kinomap.com/manufacturer/woodway.png' },
    { name: 'xebex', uri: 'https://static.kinomap.com/manufacturer/xebex.png' },
    { name: 'xgfitness', uri: 'https://static.kinomap.com/manufacturer/xg-fitness.png' },
    { name: 'xmfitness', uri: 'https://static.kinomap.com/manufacturer/xm-fitness.png' },
    { name: 'xpedo', uri: 'https://static.kinomap.com/manufacturer/xpedo.png' },
    { name: 'xplorer', uri: 'https://static.kinomap.com/manufacturer/xplorer.png' },
    { name: 'xplova', uri: 'https://static.kinomap.com/manufacturer/xplova.png' },
    { name: 'xterra', uri: 'https://static.kinomap.com/manufacturer/xterra.png' },
    { name: 'yesoul', uri: 'https://static.kinomap.com/manufacturer/yesoul.png' },
    { name: 'yourmove', uri: 'https://static.kinomap.com/manufacturer/your-move.png' },
    { name: 'zhongyang', uri: 'https://static.kinomap.com/manufacturer/zhongyang.png' },
    { name: 'zipro', uri: 'https://static.kinomap.com/manufacturer/zipro.png' },
    { name: 'zwift', uri: 'https://static.kinomap.com/manufacturer/zwift.png' },
    { name: 'zycle', uri: 'https://static.kinomap.com/manufacturer/zycle.png' },
];


const AppTotalBrands = () => {

    const [filteredBrands, setFilteredBrands] = useState(brands);

    const filterBrands = (keyword: string) => {
        const filtered = brands.filter((brand) =>
            brand.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredBrands(filtered);
    };
    const navigation = useNavigation<HomeStackNavigationPropsType>();


    return (
        <View style={styles.container}>
            <AppCustomHeader title="brands" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <View style={styles.contentContainer}>
                <AppLable title="choose_the_brand_of_your_equipment" />
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search brand"
                        onChangeText={(text) => filterBrands(text)}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => filterBrands}>
                        <Text style={styles.buttonText}>search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.brandsContainer}>
                        {filteredBrands.map((brand, index) => (
                            <AppBrandCard key={index} imageSource={{ uri: brand.uri }} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 80,
        height: 35,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        padding: 8,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        padding: 8
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    brandsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});
export default AppTotalBrands;