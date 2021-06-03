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

  return {
    label: 'Export To PDF',
    icon: () =>  '📃',
    onHandle: async () => {
      const formattedActivity = {draft, displayed: published}
      const activityComponent = <ActivityPreviewPDF document={formattedActivity} />
      const html = renderToString(activityComponent)
      const htmlZip = await fetch('/api/createPDF', {
        method: 'POST',
        body: JSON.stringify({html, id})
        })
        .then(res => new Response(res.body))
        .then(stream => stream.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `${id}.pdf`,
          );
          document.body.appendChild(link);

          // Start download
          link.click();

          // Clean up and remove the link
          link.parentNode.removeChild(link);

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
