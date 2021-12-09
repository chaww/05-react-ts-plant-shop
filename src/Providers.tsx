import React from "react"
import { Provider } from "react-redux"
// import { ThemeProvider } from "styled-components"
import store from "state"

// const ThemeProviderWrapper = (props) => {
//   // const [isDark] = useThemeManager()
//   const [isDark] = [false]
//   const [dark, light] = [false, true]
//   return <ThemeProvider theme={isDark ? dark : light} {...props} />
// }

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      {/* <ThemeProviderWrapper>{children}</ThemeProviderWrapper> */}
    </Provider>
  )
}

export default Providers
