import React from 'react';
import styles from './css/default.css';
import { createHTMLString } from '../documentBuilders/digital/activitiesToHtml';
import { getSectionColor } from './helpers';

const BlockContent = require('@sanity/block-content-to-react');

// create portable text renders for different types
// for reading activity, upload "blank" versions with page breaks
// expel whole deal as unit
// figure out how to expel to xhtml
// expel to PDF with diff background

const serializers = {
  types: {
    modelBox: (props) => {
      const content = <BlockContent blocks={props.node.content ?? []} />;
      return <div className={styles.modelBox}>{content}</div>;
    },
  },
};

export function ActivityPreview({ document }) {
  const doc = document.draft ?? document.displayed;
  return (
    <div className={styles.body}>
      <header style={{ backgroundColor: getSectionColor(doc.unitSection) }}>
        <h5>
          <strong>{doc.unitSection}</strong>
          {(doc.focus) ? (`: ${doc.focus}`) : ''}
        </h5>
      </header>
      <h5 className="article-title">
        {doc.title}
      </h5>
      <div className="article-content">
        <BlockContent blocks={doc.digitalContent ?? []} serializers={serializers} />
      </div>
    </div>
  );
}
