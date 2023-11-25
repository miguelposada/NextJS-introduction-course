import HerokuList from "@/app/components/HerokuList";
import db from "@/utils/db";

const getData = async () => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const herokus = await db.heroku.findMany({});
  return herokus;
};

const HerokusPage = async () => {
  const herokus = await getData();

  return (
    <div>
      <HerokuList herokus={herokus} />
    </div>
  );
};

export default HerokusPage;
