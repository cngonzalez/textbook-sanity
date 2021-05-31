import React, { useEffect, useState } from 'react'
import { useDocumentOperation, useEditState } from '@sanity/react-hooks'
import { ActivityPreview } from '../previews/ActivityPreview'
import { renderToString } from 'react-dom/server'

export const ExportToFiles = ({
  id,
  type,
  draft,
  published,
  onComplete}) => {
  
  const { patch, publish } = useDocumentOperation(id, type)
  const intent = draft ?? published
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const formattedActivity = {draft, displayed: published}
  const activityComponent = <ActivityPreview document={formattedActivity} />
  const html = renderToString(activityComponent)
  console.log(JSON.stringify(html))

  return {
    label: 'Export To Files',
    icon: () =>  '🗂',
    onHandle: async () => {
      const htmlZip = await fetch('/api/createZipFile', {
        method: 'POST',
        body: JSON.stringify({html, id})
        })
        .then(res => new Response(res.body))
        .then(stream => stream.blob())
        // .then(blob => {
        //   const url = window.URL.createObjectURL(new Blob([blob]))
        //   const link = document.createElement('a');
        //   link.href = url;
        //   link.setAttribute(
        //     'download',
        //     `${id}.zip`,
        //   );
        //   document.body.appendChild(link);

        //   // Start download
        //   link.click();

        //   // Clean up and remove the link
        //   link.parentNode.removeChild(link);
        // });
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
