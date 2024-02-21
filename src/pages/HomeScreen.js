import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView className="flex flex-1 bg-white">

      <View className="bg-white flex rounded-md mt-4 p-2 space-y-2">
        <View className="flex flex-row items-center justify-between px-2">
          <View className="flex flex-row gap-2 items-center">
            <Image className="w-14 h-14 rounded-full" source={require("../images/profile.jpg")} alt='profile image' />
            <View className="flex flex-col">
              <Text className="text-black text-base font-semibold">Emine Tekcan</Text>
              <Text className="text-slate-700 text">Bugün 12:32</Text>
            </View>
          </View>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
        <View className="px-2">
          <Text className="text-black text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book...</Text>
        </View>
        <View>
          <Image className="w-full h-96 rounded-2xl" source={require("../images/spor.png")} alt='profile image' />
        </View>

        <View className="flex flex-row gap-2 items-center flex-1">
          <View className="flex flex-row gap-1 items-center">
            <Octicons name="heart" size={20} color="black" />
            <Text className="font-semibold">22.5K</Text>
          </View>
          <View className="flex flex-row gap-1 items-center">
            <MaterialCommunityIcons name="comment-processing-outline" size={22} color="black" />
            <Text className="font-semibold">22.5K</Text>
          </View>
        </View>
      </View>

      <View className="bg-white flex rounded-md mt-4 p-2 space-y-2 pb-3">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-2 items-center">
            <Image className="w-14 h-14 rounded-full" source={require("../images/kubra.jpg")} alt='profile image' />
            <View className="flex flex-col">
              <Text className="text-black text-base font-semibold">Kübra Ermeydan</Text>
              <Text className="text-slate-700 text">Dün 23:00</Text>
            </View>
          </View>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
        <View>
          <Text className="text-black text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        </View>
        <View>
          <Image className="w-full h-60 rounded-2xl" source={require("../images/spor2.png")} alt='profile image' />
        </View>

        <View className="flex flex-row gap-2">
          <View className="flex flex-row gap-1 items-center">
            <Octicons name="heart" size={20} color="black" />
            <Text className="font-semibold">22.5K</Text>
          </View>
          <View className="flex flex-row gap-1 items-center">
            <MaterialCommunityIcons name="comment-processing-outline" size={22} color="black" />
            <Text className="font-semibold">22.5K</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})