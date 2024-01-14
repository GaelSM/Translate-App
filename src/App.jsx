import Card from "./components/Card"
import { CardContexProvider } from "./context/card"

export default function App() {
  return (
    <CardContexProvider>
      <div className="app">
        <Card type="from" />

        <Card type="to" />
      </div>
    </CardContexProvider>
  )
}