'use client'
import '../styles/globals.css'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import Footer from './Footer'
import TipModal from './TipModal'
import PicModal from './PicModal'
import FacilModal from './FacilModal'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // React.useEffect(() => {
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  // const handleBeforeUnload = (event: any) => {
  //   // Check if the event was caused by the user closing the tab
  //   if (event.currentTarget.performance.navigation.type === PerformanceNavigation.TYPE_NAVIGATE) {
  //     localStorage.clear(); // or sessionStorage.clear() if you're using sessionStorage
  //   }
  // };


  return (
    <>
      <Provider store={store}>
        <html lang="en">
          {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
          */}
          <head />
          <body>
            <PersistGate loading={null} persistor={persistor} >
              <Navbar />
              <TipModal />
              <FacilModal />
              <PicModal />
              {children}
              <Footer />
            </PersistGate>
          </body>
        </html>
      </Provider>
    </>
  )
}
