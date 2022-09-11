import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Solution: instantiate the QueryClient outside of the App component!
const queryClient = new QueryClient()
function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  // Edit: This is the problem! see "unstable-query-client" in https://tkdodo.eu/blog/react-query-fa-qs#why-are-updates-not-shown
  // const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default MyApp
