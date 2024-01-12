/*import { useStore } from "./hooks/useStore"*/

import Languages from "./components/Languages";

export default function App() {
  /*const { fromLanguage, toLanguage } = useStore()*/

  return (
    <div className="app">
      <div className="card">
        <Languages type="from" />
      </div>
    </div>
  )
}