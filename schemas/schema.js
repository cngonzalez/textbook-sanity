import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import textbookBlockContent from './blockContent/textbookBlockContent';
import digitalBlockContent from './blockContent/digitalBlockContent';

import exercise from './objects/exercise';
import modelBox from './objects/modelBox';
import interactiveMap from './objects/interactiveMap';

import activity from './documents/activity';
import unitSection from './documents/unitSection';
import bridgeTopic from './documents/bridgeTopic';
import unit from './documents/unit';
import week from './documents/week';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    textbookBlockContent,
    digitalBlockContent,
    exercise,
    modelBox,
    interactiveMap,
    activity,
    unitSection,
    bridgeTopic,
    unit,
    week,
  ]),
});
