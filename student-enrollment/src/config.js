import config from './config'; 
import { createChatBotMessage } from 'react-chatbot-kit';
import GotItButton from './GotItButton';

const message = createChatBotMessage('Hello, Welcome to student info system!');

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

export default config;