// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(() => {
//   return {
//     define: {
//       'process.env': {
//         path: process.env
//       }
//     },
//     build: {
//       outDir: 'build',
//     },
//     plugins: [react()],
//   };
// });




// import {defineConfig, loadEnv} from 'vite';
// import react from '@vitejs/plugin-react';
// // import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// // import viteTsconfigPaths from 'vite-tsconfig-paths';
// // https://vitejs.dev/config/


// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     // base: env.VITE_BASE_PATH,
//     server: {
//       host: '0.0.0.0',
//       port: 3000,
//     },
//     resolve: {
//       alias: {
//         '@src': '/src',
//       },
//     },
//     clearScreen: false,
//     // plugins: [
//     //   react({
//     //     babel: {
//     //       plugins: [
//     //         [
//     //           'babel-plugin-styled-components',
//     //           {
//     //             displayName: true,
//     //             fileName: false,
//     //           },
//     //         ],
//     //       ],
//     //     },
//     //   }),
//     //   viteTsconfigPaths(),
//     // ],
//     define: {
//       'process.env': {},
//     },
//     // optimizeDeps: {
//     //   esbuildOptions: {
//     //     define: {
//     //       global: 'globalThis',
//     //     },
//     //     plugins: [
//     //       NodeGlobalsPolyfillPlugin({
//     //         buffer: true,
//     //       }),
//     //     ],
//     //   },
//     // },
//     build: {
//       chunkSizeWarningLimit: 6000
//     }
//   };
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// const envParameter = 'https://wwindziequizdatabase-default-rtdb.firebaseio.com/questions/-N2H39eLruhAXJ4Yu5K5/0.json' || 'defaultValue';

// export default defineConfig(() => {
//   return {
//     define: {
//       'process.env': {
//         envParameter: JSON.stringify(envParameter)
//       }
//     },
//     build: {
//       outDir: 'build',
//     },
//     plugins: [react()],
//   };
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
            host: '0.0.0.0',
            port: 3000,
          },
    // server: {
    //   open: true,
    // },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});