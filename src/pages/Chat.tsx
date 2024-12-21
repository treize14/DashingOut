import React from 'react';
import { useParams } from 'react-router-dom';
import { ChatWindow } from '../components/chat/ChatWindow';

export function Chat() {
  const { taskerId } = useParams();
  const [taskerName, setTaskerName] = React.useState('');

  React.useEffect(() => {
    // TODO: Fetch tasker details from API
    setTaskerName('John Smith');
  }, [taskerId]);

  if (!taskerId) {
    return <div>Invalid tasker ID</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <ChatWindow taskerId={taskerId} taskerName={taskerName} />
    </div>
  );
}