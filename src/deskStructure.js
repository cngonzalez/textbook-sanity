import S from '@sanity/desk-tool/structure-builder'
import { EpubPreview } from './previews/EpubPreview'

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === 'activity') {
    return S.document().views([
      S.view.form().icon(),
      S.view.component(EpubPreview).title('HTML Preview')
    ])
  }
  return S.document().views([S.view.form()])
}

export default () => (
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
)
