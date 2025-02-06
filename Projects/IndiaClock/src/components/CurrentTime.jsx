let CurrentTime = () => {
  let time = new Date();

  return (
    <div>
      {/* 
      <p> This is The Current Time: {time} </p> 
      This is incorrect because We have to convert it to LocalString
      */}
      <p className="lead">
        This is The Current Time: {time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};
export default CurrentTime;
