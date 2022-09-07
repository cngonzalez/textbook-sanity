import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import {PortableTextComponentsProvider, PortableText} from '@portabletext/react'
import styles from './styles'

const marks = {
  strong: ({children}) => <Text style={{fontFamily: 'Heinemann School Black'}}>{children}</Text>,
  em: ({children}) => <Text style={{fontFamily: 'Heinemann School Italic'}}>{children}</Text>,
}

const block = {
  normal: ({ children }) => <Text>{children}</Text>,
}

const textComponents = {
  block,
  marks
}

const ModelBox = ({value}) => {
  return (
    <View style={styles.modelBox}>
      <PortableText value={value.content} components={textComponents}/>
    </View>
  )
}

const components = {
  block,
  marks,
  types: {modelBox: ModelBox}
}
export default components