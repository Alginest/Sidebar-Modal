import React, { useState, useContext } from 'react'
import App from './App'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openSidebar = () => {
    setShowSidebar(true)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeSidebar = () => {
    setShowSidebar(false)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// costum hook
export const useGlobal = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
