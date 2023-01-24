import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "faffaf",
      label: "faseufiaegfa",
      content: "cjsdvsdfse",
    },
    {
      id: "adfsa",
      label: "asfasefsf",
      content: "safasdfsaf",
    },
    {
      id: "sdff",
      label: "bnvnvbnv",
      content: "cgcfcg",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
