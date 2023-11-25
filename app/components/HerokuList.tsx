import Heroku from "./Heroku";

const HerokuList = ({ herokus }) => {
  return (
    <div>
      {herokus.map((heroku) => (
        <Heroku heroku={heroku} key={heroku.id} />
      ))}
    </div>
  );
};

export default HerokuList;
