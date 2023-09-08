import Weather from './Weather';
function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Weather city_name="Tokyo" />
      <Weather city_name="Los Angeles" />
    </div>
  );
}

export default App;