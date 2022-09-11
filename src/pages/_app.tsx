import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// the solution is to initialize the query client outside of the app component!
const queryClient = new QueryClient()
function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  // Edit: This is the problem!
  // const queryClient = new QueryClient()
  // see snippet "unstable-query-client" in https://tkdodo.eu/blog/react-query-fa-qs#why-are-updates-not-shown
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default MyApp
