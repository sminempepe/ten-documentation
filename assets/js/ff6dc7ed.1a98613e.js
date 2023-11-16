"use strict";(self.webpackChunkobscuro_docs=self.webpackChunkobscuro_docs||[]).push([[907],{2135:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(5893),i=s(1151);const r={sidebar_position:1},o="Explore Contracts in Ten",a={id:"getting-started/for-developers/explore-contracts-in-obscuro",title:"Explore Contracts in Ten",description:"Ten offers a distinct environment for smart contract development so you'll need to consider how to design your dApps slightly differently from how you would a transparent dApp. This guide explains these differences:",source:"@site/docs/getting-started/for-developers/explore-contracts-in-obscuro.md",sourceDirName:"getting-started/for-developers",slug:"/getting-started/for-developers/explore-contracts-in-obscuro",permalink:"/docs/getting-started/for-developers/explore-contracts-in-obscuro",draft:!1,unlisted:!1,editUrl:"https://github.com/obscuronet/obscuro-documentation/blob/main/docs/getting-started/for-developers/explore-contracts-in-obscuro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/docs/category/for-developers"},next:{title:"Set Up Dev Environment",permalink:"/docs/getting-started/for-developers/setup-dev-env"}},c={},l=[{value:"1. Accessing Storage Values",id:"1-accessing-storage-values",level:2},{value:"Ethereum&#39;s Transparency Challenge",id:"ethereums-transparency-challenge",level:3},{value:"Ten&#39;s Privacy Solution",id:"tens-privacy-solution",level:3},{value:"2. Access Control for Functions",id:"2-access-control-for-functions",level:2},{value:"Access Control Using <code>require</code>",id:"access-control-using-require",level:3},{value:"3. Event Visibility",id:"3-event-visibility",level:2},{value:"4. Secure Random Number Generation in Ten",id:"4-secure-random-number-generation-in-ten",level:2},{value:"Challenges with On-Chain Randomness",id:"challenges-with-on-chain-randomness",level:3},{value:"Ten&#39;s Solution",id:"tens-solution",level:3},{value:"5. Gas Consumption",id:"5-gas-consumption",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"explore-contracts-in-ten",children:"Explore Contracts in Ten"}),"\n",(0,t.jsx)(n.p,{children:"Ten offers a distinct environment for smart contract development so you'll need to consider how to design your dApps slightly differently from how you would a transparent dApp. This guide explains these differences:"}),"\n",(0,t.jsx)(n.h2,{id:"1-accessing-storage-values",children:"1. Accessing Storage Values"}),"\n",(0,t.jsx)(n.p,{children:"While both Ethereum and Ten allow easy access to public variables, their handling of private variables differs significantly, highlighting Ethereum's transparency challenges and Ten's privacy solutions."}),"\n",(0,t.jsx)(n.h3,{id:"ethereums-transparency-challenge",children:"Ethereum's Transparency Challenge"}),"\n",(0,t.jsxs)(n.p,{children:["In Ethereum, private variables are intended to be accessed solely through functions. However, due to Ethereum's transparent nature, a workaround exists using the ",(0,t.jsx)(n.code,{children:"getStorageAt"})," function. This method can bypass the designated functions, making true private data storage unattainable."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":\nAccessing a private variable in Ethereum:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 value = eth.getStorageAt(contractAddress, position);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tens-privacy-solution",children:"Ten's Privacy Solution"}),"\n",(0,t.jsxs)(n.p,{children:["To provide privacy on Ethereum, Ten has disabled the ",(0,t.jsx)(n.code,{children:"getStorageAt"})," function. This ensures that private variables can only be accessed via their associated functions, providing genuine programmable privacy."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":\nAccessing a private variable in Ten:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"private uint256 privateVariable;\n\nfunction getPrivateVariable() public view returns (uint256) {\n    return privateVariable;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In summary, while Ethereum's transparency poses challenges for true data privacy, Ten offers a robust solution by ensuring that private data remains genuinely private."}),"\n",(0,t.jsx)(n.h2,{id:"2-access-control-for-functions",children:"2. Access Control for Functions"}),"\n",(0,t.jsx)(n.p,{children:"In smart contract development, it's essential to ensure that only authorized entities can access certain functions. This is achieved using access control mechanisms."}),"\n",(0,t.jsxs)(n.h3,{id:"access-control-using-require",children:["Access Control Using ",(0,t.jsx)(n.code,{children:"require"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"require"})," statement in Solidity is a straightforward way to enforce access control. It checks a condition, and if the condition is not met, the function execution stops, and an optional error message is thrown."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:'address owner = msg.sender;\n\nfunction restrictedFunction() public {\n    require(msg.sender == owner, "Only the owner can call this function.");\n    // Rest of the function logic\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This example ensures that only the contract's owner can call the ",(0,t.jsx)(n.code,{children:"restrictedFunction"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-event-visibility",children:"3. Event Visibility"}),"\n",(0,t.jsx)(n.p,{children:"Ten has specific event visibility rules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lifecycle events without an address parameter are public."}),"\n",(0,t.jsx)(n.li,{children:"Events with an address parameter related to an account are private."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"// Public event on Ten\nevent LifecycleEvent(uint256 indexed value);\n\n// Private event on Ten\nevent AccountEvent(address indexed account, uint256 value);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-secure-random-number-generation-in-ten",children:"4. Secure Random Number Generation in Ten"}),"\n",(0,t.jsx)(n.p,{children:"Random number generation on blockchains is challenging due to timing, delay, complexity, and fees. Ten offers a unique, immediate, and secure solution."}),"\n",(0,t.jsx)(n.h3,{id:"challenges-with-on-chain-randomness",children:"Challenges with On-Chain Randomness"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timing"}),": If block producers predict randomness, they can manipulate results."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delay"}),": Many solutions introduce a delay, affecting user experience."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Complexity & Fees"}),": Solutions like oracles add overhead and costs."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tens-solution",children:"Ten's Solution"}),"\n",(0,t.jsx)(n.p,{children:"Ten nodes run on secure enclave's, ensuring:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Immediate Randomness"}),": No delays."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unpredictability"}),": Random numbers are based on an inaccessible private seed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplicity & No Extra Fees"}),": Every transaction gets its random seed."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function getRandomNumber() public view returns (uint256) {\n    return uint256(blockhash(block.number - 1));\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ten's approach ensures secure and straightforward random number generation."}),"\n",(0,t.jsx)(n.h2,{id:"5-gas-consumption",children:"5. Gas Consumption"}),"\n",(0,t.jsx)(n.p,{children:"Gas consumption is a vital consideration in smart contract development. On Ten, it's essential to optimize your contract functions to ensure efficient gas usage. Always test your contracts in a simulated environment before deploying to gauge gas consumption."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);