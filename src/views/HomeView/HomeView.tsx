/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Pokemon } from '../../models/Pokemon';
import { listPokemon } from '../../data/PokemonList';


const HomeView = () => {

  const name = 'Pikachu';
  const level: number = 15;
  const isMale: boolean = true;

  const PokemonInfo = ({ name, level, isMale, src }: Pokemon) => {
    return (
      <View>
        <Text>This is a Pokemon</Text>
        <Text>This is {name}, is level his {level}</Text>
        {isMale ? <Text>This is a male</Text> : <Text>This is a female</Text>}
        <Image source={src} style={styles.imagePokemon} />
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View>

        <FlatList
          data={listPokemon}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            <PokemonInfo id={item.id} name={item.name} level={item.level} isMale={false} src={item.src} />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagePokemon: {
    width: 200,
    height: 200,
  }
});

export default HomeView;
