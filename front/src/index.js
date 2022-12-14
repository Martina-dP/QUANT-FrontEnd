import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Provider  } from "react-redux";
import store from "./store/index";
// import { QueryClient, QueryClientProvider  } from '@tanstack/react-query'
// import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 60 * 24,
//       cacheTime: 1000 * 60 * 60 * 24,
//     },
//   },
// })

// const persister = createSyncStoragePersister({
//   storage: window.localStorage,
// })

// createRoot(
//   document.getElementById('root')
// ).render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//           <App />
//       </Provider>
//     </QueryClientProvider>
//   </React.StrictMode>,
// );


createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

