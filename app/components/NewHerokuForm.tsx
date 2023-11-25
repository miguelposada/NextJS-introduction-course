import { NewHeroku } from "@/utils/actions";

const NewHerokuForm = () => {
  return (
    <div>
      <form action={NewHeroku}>
        <input
          type="text"
          name="content"
          className="border border-black"
        ></input>
        <button>Add Heroku</button>
      </form>
    </div>
  );
};

export default NewHerokuForm;
