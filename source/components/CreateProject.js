import { View, Text } from 'react-native'
import React from 'react'

import ProjectData from '../assets/data/Project'
import Discover from '../components/Discover'

export default function CreateProject() {
  return (
    <View>
      <Discover Standout={ProjectData} />
    </View>
  )
}