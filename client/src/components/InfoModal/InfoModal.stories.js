import React from 'react';
import { FormattedMessage } from 'react-intl';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InfoModal from './InfoModal';

const StoryRouter = require('storybook-router');

const header = <FormattedMessage id='InfoModal.caption.wrongInput' defaultMessage='Wrong Input' />;

const body = (
  <FormattedMessage
    id='InfoModal.label.startAndTargetDifferentLengths'
    defaultMessage="Length of start and target system don't match!"
  />
);

const stories = storiesOf('Start.InfoModal', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(StoryRouter.default());

stories.add('Modal to show information if there is invalid input', () => (
  <InfoModal body={body} header={header} handleClick={() => {}} />
));
