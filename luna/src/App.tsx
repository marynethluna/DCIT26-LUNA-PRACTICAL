import './App.css'

const components = [
  {
    name: 'CPU',
    function: 'Processes instructions and performs calculations.',
    use: 'Runs the operating system and software.',
  },
  {
    name: 'RAM',
    function: 'Stores data temporarily while the computer is running.',
    use: 'Helps apps load and work quickly.',
  },
  {
    name: 'Storage',
    function: 'Keeps files and programs for long-term use.',
    use: 'Saves documents, videos, and programs.',
  },
  {
    name: 'Motherboard',
    function: 'Connects all computer parts together.',
    use: 'Allows communication between devices.',
  },
  {
    name: 'GPU',
    function: 'Handles graphics and visual output.',
    use: 'Displays images, videos, and games.',
  },
]

const steps = [
  'Open the lab manual and read the objective of the activity before starting.',
  'Prepare all tools and equipment needed for the experiment or task.',
  'Check the area for safety and ensure the workstation is organized.',
  'Identify each computer component and its purpose before handling anything.',
  'Connect the required devices carefully and avoid loose cable connections.',
  'Turn on the system only after confirming all setup steps are complete.',
  'Observe the startup process and note any issues that appear during testing.',
  'Run the software or application required for the activity as instructed.',
  'Record the results accurately and compare them with the expected outcome.',
  'Troubleshoot any errors using safe and proper procedures.',
  'Shutdown the system correctly and return all materials to their proper places.',
  'Submit the completed lab output and clean the workstation before leaving.',
]

function App() {
  return (
    <div className="lab-shell">
      <div className="keyboard-glow" aria-hidden="true" />

      <main className="lab-paper">
        <header className="lab-header">
          <p className="eyebrow">Computer Fundamentals</p>
          <h1>Laboratory Activity</h1>
        </header>

        <section className="info-grid" aria-label="Computer parts information">
          <div className="info-box">
            <h2>Components</h2>
            <ul>
              {components.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <h2>Functions</h2>
            <ul>
              {components.map((item) => (
                <li key={`${item.name}-function`}>
                  <span>{item.function}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <h2>Uses</h2>
            <ul>
              {components.map((item) => (
                <li key={`${item.name}-use`}>
                  <span>{item.use}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="procedure">
          <h2>Instructions</h2>
          <ol>
            {steps.map((step, index) => (
              <li key={step}>
                <span className="step-number">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  )
}

export default App
