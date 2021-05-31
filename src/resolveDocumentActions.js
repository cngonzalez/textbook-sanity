// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'
import schema from 'part:@sanity/base/schema'
import { ExportToFiles } from './actions/exportToFiles'

export default function resolveDocumentActions(props) {
  const actions = [
    ...defaultResolve(props),
    (props.type == 'activity' ? ExportToFiles : null),
  ].filter(Boolean)

  return actions
}
