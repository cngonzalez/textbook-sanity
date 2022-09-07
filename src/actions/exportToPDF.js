import React from 'react';
import { useDocumentOperation } from '@sanity/react-hooks';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ActivityToReactPDF from '../documentBuilders/print/activityToReactPDF';

export const ExportToPDF = ({
  id,
  type,
  draft,
  published,
  onComplete,
}) => {
  const { publish } = useDocumentOperation(id, type);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const doc = draft || published;
  const ActivityPDF = <ActivityToReactPDF doc={doc} />;

  return {
    label: 'Generate PDF',
    icon: () => '📃',
    onHandle: async () => {
      if (draft) {
        await publish.execute();
      }
      setDialogOpen(true);
    },
    dialog: dialogOpen && {
      // using a modal because it's the easiest way to get a download button
      type: 'modal',
      onClose: onComplete,
      content: (
        <PDFDownloadLink document={ActivityPDF} fileName="activity.pdf">
          {({
            blob, url, loading, error,
          }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      ),
    },
  };
};
