import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import Contactlist from './components/Contactlist'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <Contactlist />

      </ScrollView>
    </SafeAreaView>
  )
}

export default App