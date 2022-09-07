import S from '@sanity/desk-tool/structure-builder';
import {
  GiBookshelf, GiWhiteBook, GiFountainPen, GiScrollUnfurled,
} from 'react-icons/gi';
import { ActivityPreview } from './previews/ActivityPreview';
import { ActivityPreviewPDF } from './previews/ActivityPreviewPDF';

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === 'activity') {
    return S.document().views([
      S.view.form().icon(),
      S.view.component(ActivityPreview).title('HTML Preview'),
      S.view.component(ActivityPreviewPDF).title('PDF Preview'),
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default () => (
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('unit')
        .title('Units')
        .icon(GiBookshelf),
      S.divider(),
      S.documentTypeListItem('week')
        .title('Weeks')
        .icon(GiWhiteBook),
      S.documentTypeListItem('activity')
        .title('Activities')
        .icon(GiFountainPen),
    ])
);
