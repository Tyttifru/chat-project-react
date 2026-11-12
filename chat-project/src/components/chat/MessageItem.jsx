import { formatDate } from '../../utils/formatDate';

function MessageItem({ text, author, time }) {
    return (
        <div className="message-item">
            <span className="message-meta">
                {author} | {formatDate(time)}
            </span>
            <span className="message-text">{text}</span>
        </div>
    );
}
export default MessageItem;