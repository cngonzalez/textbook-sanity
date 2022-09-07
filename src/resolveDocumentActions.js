// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions';
import { ExportToEpub } from './actions/exportToEpub';
import { ExportToPDF } from './actions/exportToPDF';

export default function resolveDocumentActions(props) {
  const actions = [
    ...defaultResolve(props),
    (props.type == 'week' ? ExportToEpub : null),
    (props.type == 'activity' ? ExportToPDF : null),
  ].filter(Boolean);

  return actions;
}
