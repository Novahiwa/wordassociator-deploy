import axios from "axios";

const page = async () => {
    const res = await axios.get("https://wam.kesug.com/join.php");
    const result = res.data;
    console.log(result);
     
  return (
    <div>
      <h1>test page</h1>
    </div>
  );
}

export default page;
