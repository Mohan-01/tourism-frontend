import '../css/PopUp.css';
const PopUp = ({message, setMessage}) => {
  let text = null, color = 'lightgreen', time = -1;
  if(message?.text) text = message.text;
  if(message?.color) color = message.color;
  if(message?.time) time = message.time;
  if(time > 0) setTimeout(() => setMessage(null), time);

  return (
    <div>
      {
        text
        ?<div className='pop-up' style={{backgroundColor: color, display: 'block'}}> {text} </div>
        : null
      }
    </div>
  )
}

export default PopUp
