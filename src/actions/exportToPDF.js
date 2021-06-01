import React, { useEffect, useState } from 'react'
import { useDocumentOperation, useEditState } from '@sanity/react-hooks'
import { ActivityPreviewPDF } from '../previews/ActivityPreviewPDF'
import { renderToString } from 'react-dom/server'

export const ExportToPDF = ({
  id,
  type,
  draft,
  published,
  onComplete}) => {
  
  const { patch, publish } = useDocumentOperation(id, type)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const formattedActivity = {draft, displayed: published}
  const activityComponent = <ActivityPreviewPDF document={formattedActivity} />
  const html = renderToString(activityComponent)

  return {
    label: 'Export To PDF',
    icon: () =>  '📃',
    onHandle: async () => {
      const htmlZip = await fetch('/api/createPDF', {
        method: 'POST',
        body: JSON.stringify({html, id})
        })
      if (draft) {
        await publish.execute()
      }
      setDialogOpen(true)
    },
    dialog: dialogOpen && {
      type: 'popover',
      onClose: onComplete,
      content: "Done!"
    }
  }
}
