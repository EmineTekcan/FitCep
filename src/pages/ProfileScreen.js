import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {

  const photos = [
    { id: '4', source: require('../images/spor2.png') },
    { id: '5', source: require('../images/spor3.jpg') },
    { id: '6', source: require('../images/spor4.jpg') },
    { id: '6', source: require('../images/spor5.jpg') },
    { id: '6', source: require('../images/spor6.jpg') },
    { id: '1', source: require('../images/profile.jpg') },
    { id: '2', source: require('../images/kubra.jpg') },
    { id: '3', source: require('../images/spor.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View className="flex flex-1 bg-[#FF7511] relative">

      <View className="flex flex-1 space-y-2 mt-8 rounded-t-3xl bg-white py-3">
        <View style={{ position: 'absolute', left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }} className="-top-8">
          <Image source={require("../images/profile.jpg")} alt='profile' className="h-28 w-28 rounded-xl" />
        </View>


        <View className="flex flex-row items-center justify-around">
          <View className="flex flex-col items-center justify-center">
            <Text className="text-2xl font-semibold">302k</Text>
            <Text>followers</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <Text className="text-2xl font-semibold">125</Text>
            <Text>following</Text>
          </View>
        </View>

        <View className="flex items-center">
          <Text className="text-lg font-semibold">Emine Tekcan</Text>
          <Text>@eminee.tekcan</Text>
        </View>

        {/*      <View className=" h-20 flex items-center justify-center" >

          <ScrollView className="px-3 space-x-2" horizontal>
            <View className="h-16 w-16 border border-gray-300 rounded-xl flex items-center justify-center">
              <Ionicons name="add" size={40} color="gray" />
            </View>

            <View className="h-16 w-16 bg-blue-300 flex items-center rounded-xl justify-center">
              <Image className="h-12 w-12 rounded-xl" alt='' source={require("../images/game.png")} />
            </View>

            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>

            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>
            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>
            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>
            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>
            <View className="h-16 w-16 bg-red-300 rounded-xl">
              <Image className="h-16 w-16" alt='' source={require("../images/music.png")} />
            </View>
          </ScrollView>
        </View> */}

        <View className="flex flex-row items-center justify-between p-3">
          <Text className="text-base font-semibold">Posts</Text>
          <View className="flex flex-row items-center gap-1 ">
            <Text className="text-gray-500">View All</Text>
            <AntDesign name="right" size={16} color="gray" />
          </View>
        </View>

        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />

      </View>
    </View>
  )
}

export default ProfileScreen

const { width } = Dimensions.get('window');
const itemSize = (width - 20) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    margin: 5,
    height: itemSize,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
});