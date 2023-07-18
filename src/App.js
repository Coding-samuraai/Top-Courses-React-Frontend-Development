import React from "react";
import Filter from "./Filter";
import Courses from "./Courses";
import { filterData, apiUrl } from "./data";
import Loader from "./Loader";

const App = () => {
  const [tag, setTag] = React.useState("All");
  const [courseList, setCourseList] = React.useState({});
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    async function fetchCourses() {
      let apiResponse = await fetch(apiUrl);
      let { data } = await apiResponse.json();
      setCourseList(data);
      setLoader(false);
    }
    fetchCourses();
  }, []);

  function tagChanger(tag) {
    setTag(tag);
  }

  return (
    <div className="min-h-screen bg-bgDark2">
      <h1 className="flex justify-center items-center text-xl font-bold bg-bgDark text-white h-12">
        Top Courses
      </h1>
      <Filter tag={tag} tagChanger={tagChanger} filterData={filterData} />
      <div className="mx-auto w-[70%] flex justify-center items-stretch flex-wrap mt-5">
        {loader ? <Loader /> : <Courses tag={tag} courseList={courseList} />}
      </div>
    </div>
  );
};

export default App;
