import React from 'react'
import { useDocumentOperation } from '@sanity/react-hooks'
import { ActivityPreviewPDF } from '../previews/ActivityPreviewPDF'
import { renderToString } from 'react-dom/server'
import { Page, View, Text, Document, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer'
import  { createHTMLString } from '../htmlBuilders/print/activitiesToHtml'


export const ExportToPDF = ({
  id,
  type,
  draft,
  published,
  onComplete}) => {
  
  const { publish } = useDocumentOperation(id, type)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const ActivityPDF = (
    <Document>
      <Page>
        <View>
          <Text>
            <body dangerouslySetInnerHTML={{__html: createHTMLString(draft ?? published)}} /> 
          </Text>
        </View>
      </Page>
    </Document>
  )

  return {
    label: 'Generate PDF',
    icon: () =>  '📃',
    onHandle: async () => {

      if (draft) {
        await publish.execute()
      }
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      //using a modal because it's the easiest way to get a download button
      type: 'modal',
      onClose: onComplete,
      content: (
        <>
          <PDFDownloadLink document={ActivityPDF} fileName="activity.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </>
      )
    }
  }
}
