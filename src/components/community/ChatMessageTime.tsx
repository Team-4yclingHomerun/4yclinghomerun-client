const ChatMessageTime = ({ time }: { time: string }) => {
  const formatDateToCustomFormat = (dateString: string): string => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMonth = month < 10 ? '0' + month : month.toString();
    const formattedDay = day < 10 ? '0' + day : day.toString();
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();

    return `${year}/${formattedMonth}/${formattedDay} ${ampm} ${hours}:${formattedMinutes}`;
  };

  return <p>{formatDateToCustomFormat(time)}</p>;
};
export default ChatMessageTime;
