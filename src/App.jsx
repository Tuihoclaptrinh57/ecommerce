import MainLayout from "@components/layout/Layout"
import MyHeader from "@components/header/Header"
import MyFooter from "@components/footer/Footer"

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        CONTENT
        <MyFooter />
      </MainLayout>
    </>
  )
}

export default App
