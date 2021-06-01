// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'
import schema from 'part:@sanity/base/schema'
import { ExportToFiles } from './actions/exportToFiles'
import { ExportToPDF } from './actions/exportToPDF'

export default function resolveDocumentActions(props) {
  const actions = [
    ...defaultResolve(props),
    (props.type == 'activity' ? ExportToFiles : null),
    (props.type == 'activity' ? ExportToPDF : null),
  ].filter(Boolean)

  return actions
}
