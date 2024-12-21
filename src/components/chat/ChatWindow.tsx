import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ChatMessage, TaskProposal } from '../../types/chat';
import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';
import { TaskProposalForm } from './TaskProposalForm';

interface ChatWindowProps {
  taskerId: string;
  taskerName: string;
}

export function ChatWindow({ taskerId, taskerName }: ChatWindowProps) {
  const { user } = useAuth();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = React.useState('');
  const [showProposalForm, setShowProposalForm] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      senderId: user.id,
      receiverId: taskerId,
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleProposalSubmit = (proposal: TaskProposal) => {
    if (!user) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      senderId: user.id,
      receiverId: taskerId,
      content: JSON.stringify(proposal),
      createdAt: new Date().toISOString(),
    };

    setMessages([...messages, message]);
    setShowProposalForm(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-md">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{taskerName}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === user?.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.senderId === user?.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Task Proposal Form */}
      {showProposalForm && (
        <div className="border-t p-4">
          <TaskProposalForm
            onSubmit={handleProposalSubmit}
            onCancel={() => setShowProposalForm(false)}
          />
        </div>
      )}

      {/* Message Input */}
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <TextArea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
            rows={2}
          />
          <div className="flex flex-col gap-2">
            <Button type="submit">Send</Button>
            {!showProposalForm && (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setShowProposalForm(true)}
              >
                Create Task
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}