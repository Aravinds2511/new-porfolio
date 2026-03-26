import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Lottie from "lottie-react";
import animationData from "../public/blockchain.json";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "NFT Marketplace",
      desc: "Full-stack NFT trading platform with minting, buying, and selling.",
      tech: "Next.js • Solidity • Hardhat",
      github: "https://github.com/Aravinds2511/NFT_Marketplace",
      // live: "https://nft-marketplace-61m7p6rcn-arvnds-projects.vercel.app/"
    },
    {
      title: "Solana Twitter DApp",
      desc: "Decentralized social app built on Solana using Anchor.",
      tech: "Rust • Anchor • Vue",
      github: "https://github.com/Aravinds2511/twitter_solana",
      live: "https://twitter-solana.vercel.app/#/"
    },
    {
      title: "Stablecoin Protocol",
      desc: "Collateral-backed stablecoin built using Foundry.",
      tech: "Solidity • Foundry",
      github: "https://github.com/Aravinds2511/StableCoin_defi_foundry"
    },
    {
      title: "Proof-of-Stake Blockchain",
      desc: "Custom blockchain with PoS consensus and P2P networking.",
      tech: "Python",
      github: "https://github.com/Aravinds2511/proof_of_stack_blockchain_prototype"
    },
    {
      title: "Web3 Tracking App",
      desc: "Blockchain-based tracking system with smart contracts.",
      tech: "Solidity • Next.js",
      github: "https://github.com/Aravinds2511/Web3_Tracking_App",
      live: "https://web3-tracking-app.vercel.app/"
    },
    {
      title: "Yul Puzzle Solutions",
      desc: "Low-level EVM optimizations using Yul.",
      tech: "Solidity • Yul",
      github: "https://github.com/Aravinds2511/Yul_Puzzles_Rare_Skills"
    }
  ];

  const certifications = [
    { name: "Advanced Solidity Bootcamp", link: "https://drive.google.com/file/d/10VqEC26DqMe9DHQ0bLF0h-ZWL61iWwmZ/view" },
    { name: "Solidity Bootcamp", link: "https://simpli-web.app.link/e/I0KKZkO3kEb" },
    { name: "School of Solana", link: "https://github.com/Aravinds2511/solana-crowd-funding-ackee" },
    { name: "Ethereum DApp Development", link: "https://dapp-world.com/course/certificate-verification/7990" },
    { name: "Python Certification", link: "https://www.datacamp.com/statement-of-accomplishment/course/ce1e3c69b5602ffdb4f1c0a412164e551b568965" },
    { name: "BEC - Business English Certification Vantage(2020)", link: "/bec.pdf" }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aravind S | Blockchain Engineer</title>
      </Head>

      <main className="bg-black px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-10">
        {/* NAV */}
        <nav className="bg-gray-900 p-4 sm:p-6 rounded-xl 
flex flex-col md:flex-row gap-4 md:gap-0 
justify-between items-start md:items-center text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center gap-2">
            Hi
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
            I'm Aravind S
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            {/* <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer" /> */}
            <h1 className="text-gray-400 text-sm sm:text-base md:text-xl">Check my resume here 👉</h1>
            <a href="/resume.pdf" target="_blank" className="px-3 py-2 sm:px-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg 
    text-sm sm:text-base hover:underline active:scale-110 transition-transform duration-150">Resume</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE (TEXT) */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Blockchain Engineer ⛓️
            </h1>

            <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl">
              Smart Contracts • DeFi • Layer 1 & Layer 2 Systems
            </p>

            <p className="text-gray-300 mt-6 text-sm sm:text-base">
              Blockchain Engineer focused on EVM & Solana ecosystems, with expertise in smart contracts (Solidity/Rust) and protocol design.
              Built zk-powered L2 infrastructure, DeFi systems (flashloans, staking, DEX), and cross-chain integrations.
              Passionate about scalable, secure, and production-ready Web3 systems.
              Deeply involved in the broader financial ecosystem, actively trading and investing in crypto and equities, which informs my understanding of market behavior and DeFi innovation.
            </p>

            <div className="flex gap-4 sm:gap-6 text-2xl sm:text-3xl mt-6 text-gray-400">
              <a href="http://www.linkedin.com/in/aravind-s-088367291" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/Aravinds2511" target="_blank"><AiFillGithub /></a>
              <a href="mailto:aravindvasang@gmail.com"><AiFillMail /></a>
            </div>
          </div>

          {/* RIGHT SIDE (ANIMATION) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[250px] sm:w-[320px] md:w-[400px]"
            >
              <Lottie animationData={animationData} loop={true} />
            </motion.div>
          </div>

        </section>

        {/* EXPERIENCE */}
        <section className="mt-20">
          <h3 className="text-2xl sm:text-3xl text-white mb-6">Experience💼</h3>

          <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="bg-gray-900 p-4 sm:p-6 rounded-xl mb-6">
            <h4 className="text-xl text-white">Blockchain Developer – Brixbit</h4>
            <ul className="mt-3 text-gray-400 list-disc ml-5">
              <li>Led the setup of a Layer 2 Validium chain using zk-proofs on top of a custom EVM-compatible Layer 1 blockchain (Silc)
                utilizing Polygon CDK repositories in Golang and running binaries directly instead of containerized deployments.</li>
              <li> Deployed, and maintained the Silc Layer 1 blockchain, ensuring network stability, performance, and validator operations.</li>
              <li> Developed secure Solidity smart contracts and Node.js (TypeScript) backend services for a decentralized identity (DID)
                system integrating AI-based face recognition to bind biometric identity with on-chain DIDs.</li>
              <li> Built flashloan-based DeFi systems (arbitrage, refinancing, collateral swaps, self-liquidation) integrating Aave, Compound,
                Uniswap V3, and Curve via solidity smart contracts.</li>
              <li> Developed multi-chain smart contracts in Solidity and Rust (Solana) for presale and staking systems.</li>
              <li>Wrote test suites using Foundry and performed security reviews and gas optimizations on solidity and rust-solana contracts</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="bg-gray-900 p-4 sm:p-6 rounded-xl mb-6">
            <h4 className="text-xl text-white">Protocol Developer – Nonceblox</h4>
            <ul className="mt-3 text-gray-400 list-disc ml-5">
              <li> Designed and developed a wide range of smart contracts including staking, vesting, token launchpads, and decentralized exchanges
                (DEX) across multiple chains such as Ethereum, Binance Smart Chain, and Polygon.</li>
              <li> Built customizable token, staking and vesting contracts with user-defined parameters and logic tailored for client-specific
                deployments.</li>
              <li> Researched and integrated advanced blockchain technologies like EigenLayer, Liquid Restaking Tokens (LRTs), and
                cross-chain protocols such as LayerZero.</li>
              <li> Worked with and implemented multiple Ethereum standards (ERCs), including ERC20, ERC721, ERC3643 for Real World.
                Assets (RWAs), ERC4626 for yield vaults, and interoperability standards.</li>
              <li> Developed smart contracts using both Solidity and Rust, enabling cross-chain interactions and supporting ecosystems like
                Ethereum and Solana.</li>
              <li> Built backend services (Node.js/Express) and on-chain bots for functionalities such as whale wallet copy trading, real-time data
                processing, and DeFi analytics.</li>
              <li> Integrated AI models (OpenAI, Gemini) into backend systems to enhance automation, user interaction, and trading intelligence.</li>
              <li> Collaborated on frontend development using React, contributing to dashboards, protocol interfaces, and internal tools.</li>
              <li> Worked on mobile features using React Native, implementing wallet integration and integrating backend and blockchain
                features.</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className="bg-gray-900 p-4 sm:p-6 rounded-xl mb-6">
            <h4 className="text-xl text-white">Blockchain Developer Intern – Rastr Technologies</h4>
            <ul className="mt-3 text-gray-400 list-disc ml-5">
              <li> Development and implementation of smart contracts.</li>
              <li> Researched various blockchains like Komodo, Cronos, etc.</li>
              <li> Implemented a private Ethereum blockchain for smart contract deployment</li>
            </ul>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="mt-20">
          <h3 className="text-3xl text-white mb-6">Projects🚀</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-xl text-white">{p.title}</h4>
                <p className="text-gray-400 mt-2">{p.desc}</p>
                <p className="text-sm text-gray-500 mt-2">{p.tech}</p>

                <div className="flex gap-4 mt-4">
                  <a href={p.github} target="_blank" className="text-cyan-400">GitHub</a>
                  {p.live && (
                    <a href={p.live} target="_blank" className="text-teal-400">Live</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mt-20">
          <h3 className="text-3xl text-white mb-6">Certifications🏆</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <motion.a
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-4 rounded-lg text-gray-300 hover:text-white block"
              >
                {c.name}
              </motion.a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h3 className="text-2xl sm:text-3xl text-white">✨Let’s Build Something Meaningful</h3>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">Open to Protocol Engineering, Smart contract roles, and Web3 infrastructure⚡.</p>
          <a href="mailto:aravindvasang@gmail.com" className="text-white inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:underline active:scale-110 transition-transform duration-150">
            📞 Contact Me
          </a>
        </section>
      </main>
    </div >
  );
}
