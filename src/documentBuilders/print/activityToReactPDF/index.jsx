import React from 'react'
import {PortableText} from '@portabletext/react'
import { Page, Text, View, Document } from '@react-pdf/renderer'
import styles from './styles'
import getSectionColor from '../../utils/getSectionColor'
import components from './components'

export default function ActivityToReactPDF({doc}) {
  const color = getSectionColor(doc) 
  const backgroundColor = color[50].hex
  const mainColor = color[700].hex
  const borderColor = color[500].hex
  return (
    <Document>
      <Page size="A4" style={{...styles.page, backgroundColor}}>
        <View style={{...styles.header, backgroundColor: mainColor, borderBottom: `10px solid ${borderColor}`}}>
          <Text style={styles.headerH3}>
            <Text style={{fontFamily: 'Heinemann School Black'}}>{doc?.unitSection ?? ""}</Text>
            <Text>{doc?.focus ? (": " + doc.focus) :  ""}</Text>
          </Text>
        </View>
        <View style={styles.pageBackground}>
          <View style={{...styles.bodyContainer, border: `solid 4px ${mainColor}`}}>
           <View style={{...styles.bodyHeader, color: mainColor}}>
             <Text>{doc?.title}</Text>
           </View>
            <View>
              <PortableText value={doc?.printContent} components={components} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}