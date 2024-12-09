/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"cdn.sanity.io"
        }
    ]
},
      compiler: {
        styledComponents: true,
      },
};

// module.exports = {
//     compiler: {
//       // Enables the styled-components SWC transform
//       styledComponents: true
//     }
//   }

export default nextConfig;
