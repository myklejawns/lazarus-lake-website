import PressQuotes from '../../files/press.json';

function Press() {
  return (
    <div>
      
      {PressQuotes['press'].map((item, index) =>(
            <p>
        &quot;{item['quote']}&quot;
        <br />
        <span className="bold">{item['source']}</span>
        </p>
          ))}      

    </div>
  );
}

export default Press;
