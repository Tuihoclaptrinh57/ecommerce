import MainLayout from "@components/layout/Layout"
import MyHeader from "@components/header/Header"
import MyFooter from "@components/footer/Footer"
import MyButton from "@components/button/Button"

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        CONTENT
        <MyButton />
        <MyFooter />
      </MainLayout>
    </>
  )
}

export default App
