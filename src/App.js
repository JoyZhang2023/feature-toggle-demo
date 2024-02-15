import './App.css';
import FeatureToggle from './featureToggle';

function App() {
  return (
    <section>
      <h1>Feature Toggle Prop</h1>
      <p>
        <FeatureToggle isEnabled={true} featureName="Jone" />
        <br />
        <FeatureToggle isEnabled={false} featureName="Jone" />
      </p>
    </section>

  );
}

export default App;
