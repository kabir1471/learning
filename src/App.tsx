import "./styles.css";
import List from "./components/List";
import { cars, cities } from "./data";
import { useRequest } from "./data/api/wrapper/request";
import { Button } from "semantic-ui-react";
import { getUsers } from "./data/api/requests/users";
import { getResources } from "./data/api/requests/exployees";
const App = () => {
  const userRequest = useRequest(() => getUsers());
  const resourcesRequest = useRequest(() => getResources());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      }}
    >
      <Button
        onClick={() => {
          userRequest.execute();
        }}
      >
        Get User
      </Button>
      <h1>Users</h1>
      {userRequest.loading && <h1>Users Loading . . .</h1>}
      {userRequest.data &&
        userRequest.data.results.map((el) => (
          <>
            <div>{el.name.first}</div>
            <div>
              <img src={el.picture.large} />
            </div>
          </>
        ))}
      <Button
        onClick={() => {
          resourcesRequest.execute();
        }}
      >
        Get Resources
      </Button>
      <h1>Resources</h1>
      {resourcesRequest.loading && <h2>Resources Loading . . .</h2>}
      {resourcesRequest.data && (
        <div>
          <div>{resourcesRequest.data.data.employee_name}</div>
          <div>{resourcesRequest.data.data.employee_salary}</div>
        </div>
      )}
    </div>
  );
};

export default App;

{
  /* <h1>Cars</h1>
<List
  data={cars}
  render={(item) => (
    <>
      <img src={item.photo} height="100px" width="150px" />
      <h3>
        {item.id}: {item.name}
      </h3>
    </>
  )}
/>
<h1>Cities</h1>
<List
  data={cities}
  render={(item) => (
    <>
      <h1>{item.name}</h1>
      <h3>{item.country}</h3>
    </>
  )}
/> */
}
