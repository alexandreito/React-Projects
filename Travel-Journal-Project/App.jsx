/* eslint-disable react/jsx-key */
import Header from "./src/components/Header"
import Entry from "./src/components/Entry"
import data from "./data.js"

export default function App() { 

  const entries = data.map((entry) => 
                              <Entry 
                                key={entry.key}
                                entry={entry}               
                              />
                            )
  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>      
    </>
  )
}
