import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ActivityToReactPDF from '../documentBuilders/print/activityToReactPDF';

export function ActivityPreviewPDF({ document }) {
  return (
    <PDFViewer width="100%" height="100%">
      <ActivityToReactPDF doc={document.displayed} />
    </PDFViewer>
  );
}
