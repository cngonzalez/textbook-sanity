import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import textbookBlockContent from './blockContent/textbookBlockContent'

import exercise from './objects/exercise'

import activity from './documents/activity'
import bookSection from './documents/bookSection'
import bridgeTopic from './documents/bridgeTopic'
import learningGoal from './documents/learningGoal'
import unit from './documents/unit'
import week from './documents/week'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    textbookBlockContent,
    exercise,
    activity,
    bookSection,
    bridgeTopic,
    learningGoal,
    unit,
    week,
  ]),
})
