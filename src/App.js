import Dendrogram from "./components/gptComponent";
import "./App.css";
import Card from "./components/gptComponent/Card";
import HierarchyTreeMap from "./components/gptComponent/TreeMap";
import DendrogramPT from "./components/gptComponent/TreeMap";

const data = {
  options: {
    width: 1000,
    height: 800,
  },
  dataSet: {
    name: "Org",
    image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
    children: [
      {
        name: "Líder 1",
        title: "Manager",
        email: "leader1@example.com",
        phone: "+1234567890",
        image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        children: [
          {
            name: "Team Member 1.1",
            title: "Developer",
            email: "member1.1@example.com",
            phone: "+9876543210",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
          {
            name: "Team Member 1.2",
            title: "Designer",
            email: "member1.2@example.com",
            phone: "+919876543210",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
          {
            name: "Team Member 1.3",
            title: "Tester",
            email: "member1.3@example.com",
            phone: "+19876543210",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        ],
      },
      {
        name: "Líder 2",
        title: "Manager",
        email: "leader2@example.com",
        phone: "+2345678901",
        image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        children: [
          {
            name: "Team Member 2.1",
            title: "Developer",
            email: "member2.1@example.com",
            phone: "+7890123456",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
          {
            name: "Team Member 2.2",
            title: "Designer",
            email: "member2.2@example.com",
            phone: "+10987654321",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
          {
            name: "Team Member 2.3",
            title: "Tester",
            email: "member2.3@example.com",
            phone: "+3210987654",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        ],
      },
      {
        name: "Líder 3",
        title: "Manager",
        email: "leader3@example.com",
        phone: "+3456789012",
        image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        children: [
          {
            name: "Team Member 3.1",
            title: "Developer",
            email: "member3.1@example.com",
            phone: "+8765432109",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
            children: [
              {
                name: "Team Member 3.1.1",
                title: "Junior Developer",
                email: "member3.1.1@example.com",
                phone: "+5432109876",
                image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
              },
              {
                name: "Team Member 3.1.2",
                title: "Junior Designer",
                email: "member3.1.2@example.com",
                phone: "+4321098765",
                image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
              },
              {
                name: "Team Member 3.1.3",
                title: "Junior Tester",
                email: "member3.1.3@example.com",
                phone: "+6543210987",
                image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
              },
            ],
          },
          {
            name: "Team Member 3.2",
            title: "Developer",
            email: "member3.2@example.com",
            phone: "+9876543210",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
          {
            name: "Team Member 3.3",
            title: "Designer",
            email: "member3.3@example.com",
            phone: "+5678901234",
            image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
          },
        ],
      },
    ],
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">dendrogram playground</header>
      {/* <Dendrogram {...data} /> */}
      <DendrogramPT {...data}></DendrogramPT>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;
