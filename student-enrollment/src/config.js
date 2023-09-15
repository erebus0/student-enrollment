import { createChatBotMessage } from 'react-chatbot-kit';
import GotItButton from './GotItButton';

const initialMessage = createChatBotMessage(
  'Hello, Welcome to student info system!',
  { widget: 'gotIt', delay: 3000 }
);

const gotItWidget = {
  widgetName: 'gotIt',
  widgetFunc: (props) => <GotItButton {...props} />,
  props: {},
  mapStateToProps: ['gotItClicked'],
};

const config = {
  widgets: [
    gotItWidget,
  ],
  initialMessages: [initialMessage],
};

export default config;
