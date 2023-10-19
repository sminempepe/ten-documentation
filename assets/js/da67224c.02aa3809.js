"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),g=s,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:6},i="Cross Chain Messaging",o={unversionedId:"tools-infrastructure/cross-chain-messaging",id:"tools-infrastructure/cross-chain-messaging",title:"Cross Chain Messaging",description:"Obscuro features a cross-chain messaging protocol, facilitating secure and decentralized communication across layers.",source:"@site/docs/tools-infrastructure/cross-chain-messaging.md",sourceDirName:"tools-infrastructure",slug:"/tools-infrastructure/cross-chain-messaging",permalink:"/docs/tools-infrastructure/cross-chain-messaging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools-infrastructure/cross-chain-messaging.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Standard Bridge",permalink:"/docs/tools-infrastructure/standard-bridge"},next:{title:"Compatible Tools",permalink:"/docs/tools-infrastructure/compatible-tools"}},c={},l=[{value:"How It Works",id:"how-it-works",level:2},{value:"Advanced Capabilities",id:"advanced-capabilities",level:2},{value:"Security",id:"security",level:2},{value:"Interface",id:"interface",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cross-chain-messaging"},"Cross Chain Messaging"),(0,s.kt)("p",null,"Obscuro features a cross-chain messaging protocol, facilitating secure and decentralized communication across layers."),(0,s.kt)("p",null,"The foundational contract for this feature is ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus"),", present on both L1 and L2. On L1, it's nested under the management contract, while on L2, it's managed by the protocol."),(0,s.kt)("h2",{id:"how-it-works"},"How It Works"),(0,s.kt)("p",null,"Users invoke the ",(0,s.kt)("inlineCode",{parentName:"p"},"publishMessage")," function on ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus"),". This function triggers an event, capturing the message details. The protocol then ensures this message is accessible on the counterpart ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus"),"."),(0,s.kt)("p",null,"To verify message receipt, users can call ",(0,s.kt)("inlineCode",{parentName:"p"},"verifyMessageFinalized")," on the receiving layer's ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus"),". If the message matches the original details, it returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)("p",null,"This mechanism allows for queries like: ",(0,s.kt)("strong",{parentName:"p"},"'Has address 0xAAAA.. received 25WETH tokens on the bridge with address 0XAB0FF?'"),". If the bridge confirms the receipt, the query returns true."),(0,s.kt)("p",null,"For messages published on Obscuro's L2, the management contract transports them to L1 during rollup submission. However, these messages must await the rollup's challenge period to be deemed final."),(0,s.kt)("h2",{id:"advanced-capabilities"},"Advanced Capabilities"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus")," offers a method to query non-finalized delivered messages: ",(0,s.kt)("inlineCode",{parentName:"p"},"getMessageTimeOfFinality"),". This previews messages still within the challenge period."),(0,s.kt)("p",null,'Such "preview" functionality can empower dApps to offer faster-than-challenge-period finality. For instance, a contract might allow immediate withdrawals from a bridge at a fee, transferring withdrawal rights to the fee payer upon message finalization.'),(0,s.kt)("h2",{id:"security"},"Security"),(0,s.kt)("p",null,"The protocol listens only to events from the contract address linked to the management contract. Messages are tied to L1 blocks, recalculating state during reorganizations. L2 messages also link to L1 block hashes, ensuring state updates align with the correct fork."),(0,s.kt)("p",null,"The protocol securely manages the keys for the L2 contract within SGX. Extracting the private key controlling the L2 ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus")," would necessitate breaching SGX. Even if achieved, the protocol would auto-reject such transactions, as it scans all external transactions."),(0,s.kt)("h2",{id:"interface"},"Interface"),(0,s.kt)("p",null,"Below are the interfaces for interacting with ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageBus"),". For queries or issues, join our ",(0,s.kt)("a",{parentName:"p",href:"#"},"Discord"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"interface Structs {\n    struct CrossChainMessage {\n        address sender;\n        uint64  sequence;\n        uint32  nonce;\n        uint32  topic;\n        bytes   payload;\n        uint8   consistencyLevel;\n    }\n}\n\ninterface IMessageBus {\n    function publishMessage(\n        uint32 nonce,\n        uint32 topic,\n        bytes calldata payload, \n        uint8 consistencyLevel\n    ) external returns (uint64 sequence);\n\n    function verifyMessageFinalized(\n        Structs.CrossChainMessage calldata crossChainMessage\n    ) external view returns (bool);\n    \n    function getMessageTimeOfFinality(\n        Structs.CrossChainMessage calldata crossChainMessage\n    ) external view returns (uint256);\n}\n")))}d.isMDXComponent=!0}}]);